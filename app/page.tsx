import ImageCard from '@/components/ImageCard'

export default function Home() {
  return (
    <main className='w-screen min-h-screen bg-[#27272a] text-white'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      <ImageCard id={1}/>
      <ImageCard id={2}/>
      <ImageCard id={3}/>
      <ImageCard id={4}/>
      <ImageCard id={5}/>
      <ImageCard id={6}/>
      <ImageCard id={7}/>
      <ImageCard id={8}/>
      </div>
    </main>
  )
}
