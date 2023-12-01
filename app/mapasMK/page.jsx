'use client'
import axios from "axios"
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./mapas.module.css"
import Modal from "../components/modal/Modal";

export default function Home() {
    const [dados, setDados] = useState([]);
    const [mapas, setMapas] = useState([]);
    const [copa, setCopa] = useState('');
    const [filtrados, setFiltrados] = useState([]);
    const [abrirModal, setAbrirModal] = useState(null);

    const openModal = (id) => {
        setAbrirModal(id);
    };

    //fechar modal
    const closeModal = () => {
        setAbrirModal(null);
    };

    useEffect(() => {
        async function fetchMaps() {
            try {
                const response = await axios.get("/api/mapas");
                setDados(response.data.listaMapas);
                setMapas(response.data.listaMapas);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchMaps();
    }, []);

    const aplicarFiltro = (copa) => {
        const mapasFiltrados = dados.filter((item) => item.copa === copa);
        setFiltrados(mapasFiltrados);
        setCopa(copa);
    };

    useEffect(() => {
            aplicarFiltro(copa);
    }, [copa]);

    return (
        <main>
            <Link href="/mapasMK/cadastro">
                <button>
                    Cadastrar Aluno
                </button>
            </Link> 
            <div className={styles.container}>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Cogumelo")}><img src={'/copas/copacogumelo.png'} width={100} height={100}/></button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Flor")}><img src={'/copas/copaflor.png'} width={100} height={100}/></button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Estrela")}><img src={'/copas/copaestrela.png'} width={100} height={100}/></button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Especial")}><img src={'/copas/copaespecial.png'} width={100} height={100}/></button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Casco")}><img src={'/copas/copacasco.png'} width={100} height={100}/></button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Banana")}>Banana</button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Folha")}>Folha</button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Especial")}>Especial</button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Ovo")}>Ovo</button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Leve")}>Leve</button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Flor de Ouro")}>Flor de Ouro</button>
            <button className={styles.botoes} onClick={() => aplicarFiltro("Copa Coroa")}>Coroa</button>
            </div>
            {filtrados.length != 0 ? (
                filtrados.map((mapa) => (
                    <div  onClick={() => openModal(mapa.id)} key={mapa.id}>
                        <div className={styles.cardContainer}>
                            <div className={styles.titulo}>
                        <h1>{mapa.nome}</h1>
                        
                        <img className={styles.img} src={mapa.imagem} width={200} height={200} />
                        </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1>Selecione a copa</h1>
            )}
              {
                            //modal
                            abrirModal ? (
                                filtrados.map((mapa) => (
                                    mapa.id == abrirModal && (
                                        <div key={mapa.id}>

                                            <Modal nome={mapa.nome} imagem={mapa.imagem} descricao={mapa.description} inpiracao={mapa.inspiracao} copa={mapa.copa} trofeus={mapa.trofeus} plataforma={mapa.plataforma} fechar={closeModal} />

                                        </div>)))
                            ) : null
                        }
                 
        </main>
    );
}
