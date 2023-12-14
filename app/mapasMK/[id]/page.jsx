"use client";

//Importações
import axios from "axios";
import ButtonAmarelo from "@/app/components/buttonAmarelo/buttonAmarelo";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Inputs from "@/app/components/inputs/Inputs";
import Footer from "@/app/components/footer/Footer";
import styles from "../mapas.module.css"
import TrocarTela from "@/app/components/trocartela/TrocarTela";
import Label from "@/app/components/label/label";


export default function UpdateMapa({ params }) {

    //Criando estado de variáveis
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

    const router = useRouter();
    const { id } = params;

    //Trazendo as informações do ID de volta
    useEffect(() => {

        async function fetchMapaDetails() {

            try {
                const response = await axios.get(`/api/mapas/${id}`);
                const mapa = response.data.mapas;
                console.log(mapa);
                setNome(mapa.nome);
                setImagem(mapa.imagem);
                setDescricao(mapa.descricao);
                setInspiracao(mapa.inspiracao);
                setCopa(mapa.copa);
                setTrofeus(mapa.trofeus);
                setPlataforma(mapa.plataforma);
                console.log(plataforma, trofeus);
            } catch (error) {
                console.error("Error fetching mapa details:", error);
            }

        }

        if (id) {
            fetchMapaDetails();
        }

    }, [id]);


    //Function de verificação de imagem
    const urlValida = (imagem) => {

        if (imagem.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            return true;
        } else {
            return false;
        }

    }
    const handleSubmit = async (e) => {
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
            console.log('Preencha o campo imagem')
            setErroImagem('Preencha o campo Imagem')
        }else {
            console.log('Limpou');
            setErroImagem('');
        }

        if (!descricao) {
            setErroDescricao('Preencha o campo Descrição')
        } else if (descricao.length < 10 || descricao.length > 700) {
            setErroDescricao('O tamanho da descrição deve ser entre 10 a 700 caracteres')
        } else {
            setErroDescricao('');
        }

        if (!inspiracao) {
            setErroInspiracao('Preencha o campo Inspiração')
        } else if (inspiracao.length < 10 || inspiracao.length > 700) {
            setErroInspiracao('O tamanho da inspiração deve ser entre 10 a 700 caracter')
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
            setErroTrofeus('Preenca a quatidade de troféus')
        } else if (trofeus < 500 || trofeus > 5000) {
            setErroTrofeus('Quantidade de Troféus inválida')
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

        try {
            await axios.put(`/api/mapas/${id}`, { nome, imagem, descricao, inspiracao, copa, trofeus, plataforma });
            router.push(`/mapasMK/`);
        } catch (error) {
            console.error("Error updating mapa:", error.response.data); 
        }

    };

  
  return (
    <main className={styles.main}>
        
      
           
             <h1>Cadastrar Usuário</h1>
 
      

            <Link href="/mapasMK">
                <button >
                    Ver cadastrados
                </button>
            </Link>

            {id ? (
                <form onSubmit={handleSubmit} className={styles.container}>
              <Label htmlFor={"nome"} texto={"Nome"}/>
              <Inputs tipo={'text'} valor={nome}  oc={(e) => setNome(e.target.value)} />
                <p>{erroNome}</p>

                <Label htmlFor={"imagem"} texto={"Imagem"}/>
                <Inputs tipo={'text'} valor={imagem}  oc={(e) => setImagem(e.target.value)} />
                <p>{erroImagem}</p>

                <Label htmlFor={"descricao"} texto={"Descrição"}/>
                <Inputs tipo={'text'} valor={descricao}  oc={(e) => setDescricao(e.target.value)} />
                <p>{erroDescricao}</p>

                <Label htmlFor={"inspiracao"} texto={"Inspiraçâo"}/>
                <Inputs tipo={'text'} valor={inspiracao}  oc={(e) => setInspiracao(e.target.value)} />
                <p>{erroInspiracao}</p>

                <Label htmlFor={"copa"} texto={"Selecione uma copa"}/>
                <select name="copa" id="copa" value={copa} onChange={(e) => setCopa(e.target.value)} className={styles.select}>
                    <option value="">Selecione</option>
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
                <p>{erroCopa}</p>

                <Label htmlFor={"trofeus"} texto={"Troféus"}/>
                <Inputs tipo="number" valor={trofeus} oc={(e) => setTrofeus(e.target.value)}  />
                <p>{erroTrofeus}</p>

                <Label htmlFor={"plataforma"} texto={"Plataforma"}/>
                <Inputs tipo="text" valor={plataforma} oc={(e) => setPlataforma(e.target.value)}  />
                <p>{erroPlataforma}</p>
                <ButtonAmarelo type={"submit"} texto={"Atualizar"} /> 

        

        </form>
        ):(<p>Carregando...</p>)}
   
     <Footer/>
    </main>
)

        }