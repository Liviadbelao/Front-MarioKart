'use client'

//Importações
import axios from "axios"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./mapas.module.css"
import Modal from "../components/modal/Modal";

//Criando página
export default function Home() {

    //Criando estados para nossas conts
    const [dados, setDados] = useState([]);
    const [mapas, setMapas] = useState([]);
    const [copa, setCopa] = useState('');
    const [filtrados, setFiltrados] = useState([]);
    const [abrirModal, setAbrirModal] = useState(null);
    const [copaSelecionada, setCopaSelecionada] = useState('');
    const router = useRouter();


    //Const para abertura do modal
    const openModal = (id) => {
        setAbrirModal(id);
    };


    //Const para fechamento do modal
    const closeModal = () => {
        setAbrirModal(null);
    };


    //Funciton de deletar mapa
    function deletarItens(item, set, id) {
        set(item.filter((item) => item.id !== id));
    }

    const deletar = async (id) => {
        const url = `/api/mapas/${id}`;
        try {
            await axios.delete(url);
            deletarItens(dados, setDados, id);
            deletarItens(filtrados, setFiltrados, id);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    //Function para editar um mapa
    const update = async (id) => {
        router.push(`/mapasMK/${id}`);
    };

    //Const para mostrar mapas da copa selecionada
    const aplicarFiltro = (copa) => {
        const mapasFiltrados = dados.filter((item) => item.copa === copa);
        setFiltrados(mapasFiltrados);
        setCopaSelecionada(copa);
    };

    //UseEffect para coletar dados da API
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


    //UseEffect para retornar todos os mapas para filtrar novamente
    useEffect(() => {
        aplicarFiltro(copa);
    }, [copa]);

    return (
        <main className={styles.main}>

            <div className={styles.containerMudar}>
                <Link href="/mapasMK/cadastro">
                    <button>
                        Cadastrar Aluno
                    </button>
                </Link>
            </div>

            <div className={styles.containerCups}>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Cogumelo' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Cogumelo")}>
                        <img className={styles.imagecup} src={'/copas/copacogumelo.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Flor' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Flor")}>
                        <img src={'/copas/copaflor.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Estrela' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Estrela")}>
                        <img src={'/copas/copaestrela.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Especial' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Especial")}>
                        <img src={'/copas/copaespecial.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Ovo' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Ovo")}>
                        <img src={'/copas/copaovo.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Crossover' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Crossover")}>
                        <img src={'/copas/copacrossover.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Casco' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Casco")}>
                        <img src={'/copas/copacasco.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Banana' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Banana")}>
                        <img src={'/copas/copabanana.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Folha' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Folha")}>
                        <img src={'/copas/copafolha.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Relâmpago' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Relâmpago")}>
                        <img src={'/copas/coparaio.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Triforce' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Triforce")}>
                        <img src={'/copas/copatriforce.png'} width={150} height={150} />
                    </button>
                </div>

                <div className={styles.botoesContainer}>
                    <button className={`${styles.botoes} ${copaSelecionada === 'Copa Sino' ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro("Copa Sino")}>
                        <img className={styles.imagecup} src={'/copas/copasino.png'} width={150} height={150} />
                    </button>
                </div>
            </div>
            
            <div className={styles.results}>
                {filtrados.length != 0 ? (
                    filtrados.map((mapa) => (
                        <div key={mapa.id}>
                            <div className={styles.cardContainer}>
                                <div className={styles.titulo}>
                                    <div onClick={() => openModal(mapa.id)}>
                                        <img className={styles.img} src={mapa.imagem} />
                                        <h1 className={styles.mapaname}>{mapa.nome}</h1>
                                    </div>
                                    {/* <button onClick={() => deletar(mapa.id)}> deletar </button>
                                    <button onClick={() => update(mapa.id)}>Atualizar</button> */}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Selecione a copa</h1>
                )}
            </div>
            {
                //modal
                abrirModal ? (
                    dados.map((mapa) => (
                        mapa.id == abrirModal && (
                            <div key={mapa.id}>

                                <Modal nome={mapa.nome} imagem={mapa.imagem} descricao={mapa.descricao} inspiracao={mapa.inspiracao} copa={mapa.copa} trofeus={mapa.trofeus} plataforma={mapa.plataforma} fechar={closeModal} />

                            </div>)))
                ) : null
            }

        </main>
    );
}
