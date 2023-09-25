"use client";

import React, { useState } from "react";
import ReactLoading from "react-loading";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [inputText, setInputText] = useState("");
  const [prediction, setPrediction]: any = useState(null);
  const [isgenerating, setIsGenerating] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    let response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inputText,
      }),
    });

    let prediction = await response.json();

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/generate/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setIsGenerating(false);
        console.error("error bruhhh...");
        return;
      }
      setPrediction(prediction);
    }
    setIsGenerating(false);
  };

  const handleGenerateTest = async () => {
    setIsGenerating(true);
    await sleep(2000);
    setPrediction({
      id: "73hnl4bby5rwn5rldf7xpxmsqu",
      version:
        "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
      input: {
        prompt: "a cat on the moon",
      },
      logs: "pretty long, removed",
      output: [
        "https://pbxt.replicate.delivery/8K4oUDcC6fQ4SKd0ojkOeRXf862eS4gFHvheGNTMYZe10ntZE/out-0.png",
      ],
      error: null,
      status: "succeeded",
      created_at: "2023-09-22T15:41:59.764346Z",
      started_at: "2023-09-22T15:42:06.86155Z",
      completed_at: "2023-09-22T15:42:12.515937Z",
      metrics: {
        predict_time: 5.654387,
      },
      urls: {
        cancel:
          "https://api.replicate.com/v1/predictions/73hnl4bby5rwn5rldf7xpxmsqu/cancel",
        get: "https://api.replicate.com/v1/predictions/73hnl4bby5rwn5rldf7xpxmsqu",
      },
    });
    setIsGenerating(false);
  };

  const handlePost = async () => {
    setIsPosting(true);
    const response = await fetch("/api/sharepost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caption: inputText,
        image: prediction.output[0],
        username: session?.user?.name,
        userDP: session?.user?.image,
      }),
    });
    // const responsejson = await response.json();
    // console.log(responsejson);
    setIsPosting(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div className="bg-[#0e0821] text-white w-screen h-screen flex justify-center">
      <div className="w-[80%] mt-8 space-y-3 flex flex-col items-center">
        <span className="text-gray-400">Describe your image</span>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-8/12 h-28 px-3 focus:outline outline-1 outline-purple-600 bg-[#1e1a2d] rounded-md"
          placeholder="give some prompt..."
        />
        <button
          className="w-28 h-12 rounded-lg bg-[#7c6bff] hover:bg-[#9689f5]"
          // onClick={handleGenerate}
          onClick={handleGenerateTest} // just for testing purposes without using real api
        >
          Generate
        </button>
        {isgenerating && <ReactLoading type="bars" width={150} height={100} />}
        {prediction?.output && (
          <div className="space-y-4">
            <img src={prediction?.output[0]} alt="" className="w-80 h-80" />
            <div className="side flex justify-center items-center space-x-7">
              <button
                className="bg-[#7c6bff] hover:bg-[#9689f5] w-28 h-12 rounded-md"
                onClick={handlePost}
              >
                {isPosting ? "Posting..." : "Share Image"}
              </button>
              <button
                className="bg-[#7c6bff] hover:bg-[#9689f5] w-28 h-12 rounded-md"
                onClick={() => setPrediction(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
