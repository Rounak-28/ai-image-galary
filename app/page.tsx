import ImageCard from "@/components/ImageCard";

export default function Home() {
  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate assumenda praesentium temporibus asperiores perspiciatis exercitationem inventore quod incidunt quam odit non ullam, perferendis dicta dolores ea officia deleniti nostrum.";

  return (
    <main className="w-screen min-h-screen bg-[#27272a] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ImageCard id={1} text={text} />
        <ImageCard id={2} text={text} />
        <ImageCard id={3} text={text} />
        <ImageCard id={4} text={text} />
        <ImageCard id={5} text={text} />
        <ImageCard id={6} text={text} />
        <ImageCard id={7} text={text} />
        <ImageCard id={8} text={text} />
      </div>
    </main>
  );
}
