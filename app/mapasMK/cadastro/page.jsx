"use client";

//Importações
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TrocarTela from "@/app/components/trocartela/TrocarTela";
import Inputs from "@/app/components/inputs/Inputs";
import styles from './cadastro.module.css'
import Footer from "@/app/components/footer/Footer";
import Label from "@/app/components/label/label";
import Header from "@/app/components/header/Header";

//Criando Páginas
export default function Register() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [erroNome, setErroNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [erroImagem, setErroImagem] = useState("");
    const [descricao, setDescricao] = useState("");
    const [erroDescricao, setErroDescricao] = useState("");
    const [inspiracao, setInspiracao] = useState("");
    const [erroInspiracao, setErroInspiracao] = useState("");
    const [copa, setCopa] = useState("");
    const [erroCopa, setErroCopa] = useState("");
    const [trofeus, setTrofeus] = useState("");
    const [erroTrofeus, setErroTrofeus] = useState("");
    const [plataforma, setPlataforma] = useState("");
    const [erroPlataforma, setErroPlataforma] = useState("");
    const [mapas, setMapas] = useState([]);
  const [sucesso, setSucesso] = useState('')


    //Verificação de imagem
    const urlValida = (imagem) => {
        if (imagem.match(/\.(jpeg|jpg|gif|png|webp)$/) != null) {
            return true;
        } else {
            return false;
        }
    }

    //Function de adicionar um novo mapa
    const Adicionar = async (e) => {
        e.preventDefault();

        //Verificações
        if (!nome) {
            setErroNome('Preencha o campo Nome');
        } else if (nome.length < 3 || nome.length > 20) {
            setErroNome('O tamanho do nome deve ser entre 3 a 20 caracteres')
        } else {
            setErroNome('');
        }

        if (!imagem) {
            setErroImagem('Preencha o campo Imagem')
        } else {
            console.log('Limpou');
            setErroImagem('');
        }

        if (!descricao) {
            setErroDescricao('Preencha o campo Descrição')
        } else if (descricao.length < 10 || descricao.length > 100) {
            setErroDescricao('O tamanho da descrição deve ser entre 10 a 100 caracteres')
        } else {
            setErroDescricao('');
        }

        if (!inspiracao) {
            setErroInspiracao('Preencha o campo Inspiração')
        } else if (inspiracao.length < 10 || inspiracao.length > 100) {
            setErroInspiracao('O tamanho da inspiração deve ser entre 10 a 100 caracter')
        } else {
            setErroInspiracao('');
        }

        if (!copa) {
            setErroCopa('Selecione uma copa')
            console.log('copa', erroCopa);
        }
        else {
            setErroCopa('');
        }

        if (!trofeus) {
            console.log('trofeus', trofeus);
            setErroTrofeus('Preenca a quatidade de troféus')
        } else if (trofeus < 500 || trofeus > 5000) {
            setErroTrofeus('A quantidade de troféus tem que ser entre 500 a 5000')
        } else if (trofeus % 100 !== 0) {
            setErroTrofeus('Quantidade de Troféus Inválida, insira um valor que seja multiplo de 100')
        }
        else {
            setErroTrofeus('');
        }

        if (!plataforma) {
            setErroPlataforma('Preencha o campo Plataforma')
        } else {
            setErroPlataforma('');
        }

        setSucesso(true)
        setTimeout(() => {
          setSucesso(false)
      }, 3000)

        try {
            await axios.post("/api/mapas", { nome, imagem, descricao, inspiracao, copa, trofeus, plataforma });
            setNome("");
            setImagem("");
            setDescricao("");
            setInspiracao("");
            setCopa("");
            setTrofeus("");
            setPlataforma("");
            console.log('copa');
            router.push(`/mapasMK/`);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    //Coletando dados da API
    useEffect(() => {
        async function fetchMapas() {
            try {
                const response = await axios.get("/api/mapas");

                setMapas(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchMapas();
    }, []);

    //Criando HTML
    return (

        <main className={styles.main}>
            <Header />
            <TrocarTela caminho={'/mapasMK'} texto={'Mapas Cadastrados'} />

            <div className={styles.mainContainer}>

                <form onSubmit={Adicionar} className={styles.container}>
                    <Label htmlFor={"nome"} texto={"Nome"} />
                    <Inputs tipo={'text'} valor={nome} oc={(e) => setNome(e.target.value)} />
                    <p className={styles.erro}>{erroNome}</p>

                    <label htmlFor="imagem" className={styles.label}>Imagem</label>
                    <Inputs tipo={'text'} valor={imagem} oc={(e) => setImagem(e.target.value)} />
                    <p className={styles.erro}>{erroImagem}</p>

                    <label htmlFor="descricao" className={styles.label}>Descrição</label>
                    <Inputs tipo={'text'} valor={descricao} oc={(e) => setDescricao(e.target.value)} />
                    <p className={styles.erro}>{erroDescricao}</p>

                    <label htmlFor="inspiracao" className={styles.label}>Inspiração</label>
                    <Inputs tipo={'text'} valor={inspiracao} oc={(e) => setInspiracao(e.target.value)} />
                    <p className={styles.erro}>{erroInspiracao}</p>

                    <label htmlFor="Copa" className={styles.label}>Selecione uma copa</label>
                    <select name="copa" id="copa" value={copa} onChange={(e) => setCopa(e.target.value)} className={styles.select} >
                        <option value="">Selecione....</option>
                        <option value="Copa Cogumelo">Copa Cogumelo</option>
                        <option value="Copa FLor">Copa Flor</option>
                        <option value="Copa Estrela">Copa Estrela</option>
                        <option value="Copa Especial">Copa Especial</option>
                        <option value="Copa Ovo">Copa Ovo</option>
                        <option value="Copa Crossover">Copa Crossover</option>
                        <option value="Copa Casco">Copa Casco</option>
                        <option value="Copa Banana">Copa Banana</option>
                        <option value="Copa Folha">Copa Folha</option>
                        <option value="Copa Relâmpago">Copa Relâmpago</option>
                        <option value="Copa Triforce">Copa Triforce</option>
                        <option value="Copa Sino">Copa Sino</option>
                    </select>
                    <p className={styles.erro}>{erroCopa}</p>

                    <label htmlFor="trofeus" className={styles.label}>Trofeus</label>
                    <Inputs tipo={'number'} valor={trofeus} oc={(e) => setTrofeus(e.target.value)} />
                    <p className={styles.erro}>{erroTrofeus}</p>

                    <label htmlFor="plataforma" className={styles.label}>Plataforma</label>
                    <Inputs tipo={'text'} valor={plataforma} oc={(e) => setPlataforma(e.target.value)} />
                    <p className={styles.erro}>{erroPlataforma}</p>

                    <button type="submit" className={styles.button} >Cadastrar</button>
                    { sucesso ? <p className={styles.sucesso}>Mapa Adicionado Com Sucesso</p> : null}

                </form>

            </div>

            <Footer />

        </main>
    )

}

