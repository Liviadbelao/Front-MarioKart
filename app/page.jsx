import Image from "next/image"
import styles from "./page.module.css"
export default function Home() {
  return (
    <main className={styles.main}>

      <Image src={"/marioHome-removebg-preview.png"} width={1460} height={600} />
      
    <div className={styles.container2}>
      <div className={styles.container}>
      <h2 className={styles.titulo}>O que é o jogo Mário Kart?</h2>
      <p>O Mario Kart é uma série de jogos de corrida desenvolvida pela Nintendo. O jogo geralmente apresenta personagens populares da série Mario, como Mario, Luigi, Peach e muitos outros, competindo em pistas criativas e coloridas.</p>

      <p>O diferencial do Mario Kart é o uso de power-ups e itens especiais que os jogadores podem coletar durante a corrida para ganhar vantagem ou prejudicar os oponentes. Estes itens podem variar de cascos de tartaruga que podem ser lançados para atingir outros competidores, bananas que podem ser deixadas na pista para causar deslizes, até cogumelos que proporcionam velocidade extra.</p>

      <p>Além disso, há uma variedade de modos de jogo, desde corridas simples até batalhas onde o objetivo é derrotar outros jogadores usando os itens. O Mario Kart é conhecido por sua jogabilidade divertida e acessível para jogadores de todas as idades, tornando-o um dos jogos de corrida mais populares e duradouros.</p>
      </div>
      <Image src={"/download.jpg"} width={400} height={400} />
      </div>
    </main>
  )
}
