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
    const [nomeInput, setNomeInput] = useState('');
    const [copaInput, setCopaInput] = useState('');
    const [trofeusInput, setTrofeusInput] = useState('');
    const [abrirModal, setAbrirModal] = useState(null);
    const [copaSelecionada, setCopaSelecionada] = useState('');
    const router = useRouter();
    const [exibirDados, setExibirDados] = useState(false);
    const [optionList, setOptionList] = useState([])


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
        setCopaInput(copa)
        setExibirDados(true);
        setCopaSelecionada(copa)
    };

    //UseEffect para coletar dados da API
    useEffect(() => {
        async function fetchMaps() {
            try {
                let queryParams = '';
                if (nomeInput) {
                    queryParams = `nome=${nomeInput}`;
                }
                if (copaInput) {
                    queryParams = `copa=${copaInput}&`;
                }
                if (trofeusInput) {
                    queryParams = `trofeus=${trofeusInput}&`;
                }
                const response = await axios.get(`/api/mapas?${queryParams}`);

                setDados(response.data.listaMapas);
                setMapas(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchMaps();
    }, [nomeInput, copaInput, trofeusInput]);

    useEffect(() => {
        async function fetchMaps() {
            try {
                const response = await axios.get(`/api/mapas`);

                setOptionList(response.data.listaMapas);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchMaps();
    }, []);


    return (
        <main className={styles.main}>
         
            <select name="nome" id="nome" value={optionList} onChange={(e) => setNomeInput(e.target.value)}>
                {optionList.map((mapa) => (
                    <option value={mapa.nome} key={mapa.id}>{mapa.nome}</option>
                ))}
            </select>

            <TrocarTela caminho={'/mapasMK/cadastro'} texto={'Cadastrar Novo Mapa'} />
            {/* <input
                placeholder="nome do mapa"
                value={nomeInput}
                type="text"
                onChange={(e) => setNomeInput(e.target.value)}
            />
            <button onClick={setNome}>Teste</button> */}
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
                {
                    dados.map((mapa) => (
                        <div key={mapa.id}>
                            <div className={styles.cardContainer}>
                                <div className={styles.titulo}>
                                    <div onClick={() => openModal(mapa.id)}>
                                        <img className={styles.img} src={mapa.imagem} />
                                        <h1 className={styles.mapaname}>{mapa.nome}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>


            {
                //Modal
                abrirModal ? (
                    dados.map((mapa) => (
                        mapa.id == abrirModal && (
                            <div key={mapa.id}>

                                <Modal nome={mapa.nome} imagem={mapa.imagem} descricao={mapa.descricao} inspiracao={mapa.inspiracao} copa={mapa.copa} trofeus={mapa.trofeus} plataforma={mapa.plataforma} fechar={closeModal} edt={() => update(mapa.id)} dlt={() => deletar(mapa.id)} />

                            </div>)))
                ) : null
            }

        </main>
    );
}
