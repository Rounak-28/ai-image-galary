"use client";

import Image from "next/image";
import React, { useState } from "react";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Page = () => {
  const [inputText, setInputText] = useState("");
  const [prediction, setPrediction]: any = useState(null);

  const handleGenerate = async () => {
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
        console.log("error bruhhh...");
        return;
      }
      setPrediction(prediction);
    }

    // console.log(prediction);

    // {
    //   "id": "bbzjfcjbjfmjl7p5vjzddf7vni",
    //   "version": "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
    //   "input": {
    //     "prompt": "an astronaut on the sun"
    //   },
    //   "logs": "",
    //   "error": null,
    //   "status": "starting",
    //   "created_at": "2023-09-22T15:17:55.681027073Z",
    //   "urls": {
    //     "cancel": "https://api.replicate.com/v1/predictions/bbzjfcjbjfmjl7p5vjzddf7vni/cancel",
    //     "get": "https://api.replicate.com/v1/predictions/bbzjfcjbjfmjl7p5vjzddf7vni"
    //   }
    // }

    // {
    //   "id": "73hnl4bby5rwn5rldf7xpxmsqu",
    //   "version": "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
    //   "input": {
    //     "prompt": "a cat on the moon"
    //   },
    //   "logs": "pretty long, removed",
    //   "output": [
    //     "https://pbxt.replicate.delivery/8K4oUDcC6fQ4SKd0ojkOeRXf862eS4gFHvheGNTMYZe10ntZE/out-0.png"
    //   ],
    //   "error": null,
    //   "status": "succeeded",
    //   "created_at": "2023-09-22T15:41:59.764346Z",
    //   "started_at": "2023-09-22T15:42:06.86155Z",
    //   "completed_at": "2023-09-22T15:42:12.515937Z",
    //   "metrics": {
    //     "predict_time": 5.654387
    //   },
    //   "urls": {
    //     "cancel": "https://api.replicate.com/v1/predictions/73hnl4bby5rwn5rldf7xpxmsqu/cancel",
    //     "get": "https://api.replicate.com/v1/predictions/73hnl4bby5rwn5rldf7xpxmsqu"
    //   }
    // }
  };

  return (
    <div className="bg-[#27272a] text-white w-screen h-screen flex justify-center">
      <div className="w-[80%] mt-8 space-y-3 flex flex-col items-center">
        <span className="text-gray-400">Describe your image</span>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-8/12 h-28 px-3 focus:outline outline-1 outline-purple-600 bg-[#35353b] rounded-md"
          placeholder="give some prompt..."
        />
        <button
          className="w-28 h-12 rounded-lg bg-[#352f9b] hover:bg-[#4640bb]"
          onClick={handleGenerate}
        >
          Generate
        </button>
        {prediction?.output && (
          <img src={prediction?.output[0]} alt="" className="w-96 h-96" />
        )}
      </div>
    </div>
  );
};

export default Page;
