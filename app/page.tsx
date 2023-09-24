import ImageCard from "@/components/ImageCard";

async function getData() {
  // some hacky way, but hey it works
  const response = await import("../app/api/posts/route");
  return await (await response.GET()).json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="w-screen min-h-screen bg-[#27272a] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((post: any) => (
          <ImageCard
            key={post.id}
            caption={post.caption}
            image={post.image}
            username={post.username}
            userDP={post.userDP}
          />
        ))}
      </div>
    </main>
  );
}
