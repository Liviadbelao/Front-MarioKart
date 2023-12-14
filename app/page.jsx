/* impotações */
import Image from "next/image"
import styles from "./page.module.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.titulo1}> Software Ways</h1>
      <div className={styles.miniMain}>
        <Image className={styles.gif} src={"/pagHome/giphy.gif"} width={400} height={400} />
        <div className={styles.container}>

          <h2 className={styles.titulo}>O que é o jogo Mário Kart?</h2>
          <p>O Mario Kart é uma série de jogos de corrida desenvolvida pela Nintendo. O jogo geralmente apresenta personagens populares da série Mario, como Mario, Luigi, Peach e muitos outros, competindo em pistas criativas e coloridas.</p>

          <p>O diferencial do Mario Kart é o uso de power-ups e itens especiais que os jogadores podem coletar durante a corrida para ganhar vantagem ou prejudicar os oponentes. Estes itens podem variar de cascos de tartaruga que podem ser lançados para atingir outros competidores, bananas que podem ser deixadas na pista para causar deslizes, até cogumelos que proporcionam velocidade extra.</p>

          <p>Além disso, há uma variedade de modos de jogo, desde corridas simples até batalhas onde o objetivo é derrotar outros jogadores usando os itens. O Mario Kart é conhecido por sua jogabilidade divertida e acessível para jogadores de todas as idades, tornando-o um dos jogos de corrida mais populares e duradouros.</p>
        </div>
      </div>
      {/* detalhe do site vermelho */}
      <div className={styles.imgContainer}>
        <Image className={styles.img1} src={"/pagHome/marioHome (1).png"} width={100} height={300} />

        <Image className={styles.img2} src={"/pagHome/Mario.png"} width={400} height={400} />
      </div>
      <div className={styles.container4}>

        <h2 className={styles.titulo2} >Personagens Mario Kart</h2>
        {/* imagens dos personagens */}
        <div className={styles.personagens}>
          <Image src={"/pagHome/donkeyKong.png"} width={200} height={200} />
          <Image src={"/pagHome/luigi.png"} width={200} height={200} />
          <Image src={"/pagHome/marioPersonagem.png"} width={200} height={200} />
          <Image src={"/pagHome/princesaPeach.png"} width={200} height={200} />
          <Image src={"/pagHome/prinesaStar.png"} width={250} height={200} />
          <Image src={"/pagHome/rosalina.png"} width={200} height={200} />
          <Image src={"/pagHome/toad.png"} width={200} height={200} />
          <Image src={"/pagHome/download__1_-removebg-preview.png"} width={200} height={200} />
          <Image src={"/pagHome/yoshi.png"} width={200} height={200} />
          <Image src={"/pagHome/Waluigi_-_Mario_Part_Waluigi_-_Mario_Party__Star_Rush-removebg-preview.png"} width={210} height={210} />

        </div>

      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img1} src={"/pagHome/marioHome (1).png"} width={100} height={300} />

        <Image className={styles.img4} src={"/pagHome/princesaPeachHome.png"} width={400} height={450} />
      </div>
      <div className={styles.containerAjuste}>
        <Image className={styles.img3} src={"/pagHome/2.png"} width={1000} height={1200} />
        <div className={styles.container3}>
          <h2 className={styles.titulo}>O que são os mapas do Mario Kart?</h2>
          <p>Os "mapas" em Mario Kart, também chamados de "circuitos" ou "pistas", são os percursos pelos quais os jogadores competem em corridas. Eles variam em termos de design, desafios e temática, oferecendo desde trajetos simples até ambientes complexos com obstáculos, atalhos e elementos interativos. Cada jogo da série Mario Kart possui uma coleção única de mapas, ampliando a diversidade e a experiência de jogo para os jogadores.</p>
        </div>
      </div>
      <div>

      </div>
      <Footer />
    </main>
  )
}
