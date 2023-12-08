'use client'

//Importações
import axios from "axios"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./mapas.module.css"
import Modal from "../components/modal/Modal";
import BotoesCopas from "../components/botoescopas/BotoesCopas";
import TrocarTela from "../components/trocartela/TrocarTela";
import { noSSR } from "next/dynamic";

//Criando página
export default function Home() {

    //Criando estados para nossas conts
    const [dados, setDados] = useState([]);
    const [mapas, setMapas] = useState([]);
    const [copa, setCopa] = useState('');
    const [filtrados, setFiltrados] = useState([]);
    const [nomesFiltrados, setNomesFiltrados] = useState([])
    const [abrirModal, setAbrirModal] = useState(null);
    const [copaSelecionada, setCopaSelecionada] = useState('');
    const router = useRouter();
    const [search, setSearch] = useState('');


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
        setNomesFiltrados([]);

        console.log(mapas);
        console.log("filtrados", filtrados);
    };
    //filtro por nome 
    const filtrarNome = () => {
        const nomes = dados.filter((mapa) =>
            mapa.nome.toLowerCase().includes(search.toLowerCase())
        );
        setFiltrados([])
        setNomesFiltrados(nomes);
        console.log("nomes filtrados", nomes);
        setSearch("")
    };
    //UseEffect para coletar dados da API
    useEffect(() => {
        async function fetchMaps() {
            try {
                const response = await axios.get("/api/mapas");
                setDados(response.data.listaMapas);
                setMapas(response.data);
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

            <TrocarTela caminho={'/mapasMK/cadastro'} texto={'Cadastrar Novo Mapa'} />
            <input
                placeholder="nome do mapa"
                value={search}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={filtrarNome}>buscar</button>
            <div className={styles.containerCups}>

                <BotoesCopas imagem={'/copas/copacogumelo.png'} oc={"Copa Cogumelo"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copaflor.png'} oc={"Copa Flor"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copaestrela.png'} oc={"Copa Estrela"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copaespecial.png'} oc={"Copa Especial"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copaovo.png'} oc={"Copa Ovo"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copacrossover.png'} oc={"Copa Crossover"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copacasco.png'} oc={"Copa Casco"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copabanana.png'} oc={"Copa Banana"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copafolha.png'} oc={"Copa Folha"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/coparaio.png'} oc={"Copa Relâmpago"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copatriforce.png'} oc={"Copa Triforce"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

                <BotoesCopas imagem={'/copas/copasino.png'} oc={"Copa Sino"} copaSelecionada={copaSelecionada} aplicarFiltro={aplicarFiltro} />

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
                    <h1>{copaSelecionada ? "Copa vazia!" : "Selecione a copa!"}</h1>
                )}
            </div>


            {
                //Modal
                abrirModal ? (
                    dados.map((mapa) => (
                        mapa.id == abrirModal && (
                            <div key={mapa.id}>

                                <Modal nome={mapa.nome} imagem={mapa.imagem} descricao={mapa.descricao} inspiracao={mapa.inspiracao} copa={mapa.copa} trofeus={mapa.trofeus} plataforma={mapa.plataforma} fechar={closeModal} edt={() => update(mapa.id)}  dlt={() => deletar(mapa.id)} />

                            </div>)))
                ) : null
            }

        </main>
    );
}
