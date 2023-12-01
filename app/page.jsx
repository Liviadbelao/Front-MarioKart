import Image from "next/image"

export default function Home() {
  return (
    <main >
      <h1>Mário Kart</h1>
      <img src={"/mario-kart.jpg"} width={1500} height={600}/>
    </main>
  )
}
