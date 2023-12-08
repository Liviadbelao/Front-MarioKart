"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import TrocarTela from "@/app/components/trocartela/TrocarTela";
import Inputs from "@/app/components/inputs/Inputs";
import styles from './cadastro.module.css'
export default function Register() {
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
    let erros = [];

    const urlValida = (imagem) => {
        if (imagem.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            return true;
        } else {
            return false;
        }
    }

    const Adicionar = async (e) => {
        e.preventDefault();

        if (nome == '') {
            setErroNome('Preencha o campo Nome');
        } else if (nome.length < 3 || nome.length >20) {
            setErroNome('O tamanho do nome deve ser entre 3 a 20 caracteres')
        }else {
            setErroNome('');
        }

        if(!imagem) {
            console.log('Preencha o campo imagem')
            setErroImagem('Preencha o campo Imagem')
        } else if (!urlValida(imagem)) {
            console.log('A imagem precisa ser valida')
            setErroImagem('A imagem precisa ter um formato válido: .jpeg/.jpg/.gif/.png')
        } else {
            console.log('Limpou');
            setErroImagem('');
        }
        if(descricao == '') {
         setErroDescricao('Preencha o campo Descrição')
        }else if(descricao.length < 10 || descricao.length > 100) {
            setErroDescricao('O tamanho da descrição deve ser entre 10 a 100 caracteres')
        } else {
            setErroDescricao('');
        }
        if(inspiracao == '') {
            setErroInspiracao('Preencha o campo Inspiração')
        } else if(inspiracao.length < 10 ||inspiracao.length > 100) {
            setErroInspiracao('O tamanho da inspiração deve ser entre 10 a 100 caracter')
        } else {
            setErroInspiracao('');
        }
        if(!copa) {
            setErroCopa('Selecione uma copa')
            console.log('copa', erroCopa);
        }
        else {
            setErroCopa('');
        }
        if(trofeus == '') {
            setErroTrofeus('Preenca a quatidade de troféus')
        } else if(trofeus < 500 || trofeus > 5000) {
            setErroTrofeus('Quantidade de Troféus inválida')
        }else if(trofeus %100 !== 0) {
            setErroTrofeus('Quantidade de Troféus Inválida, insira um valor que seja multiplo de 100')
        }
         else {
            setErroTrofeus('');
        }
        if(plataforma == '') {
            setErroPlataforma('Preencha o campo Plataforma')
        } else {
            setErroPlataforma('');
        }

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
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

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

    return (
        <main className={styles.main}>
            <TrocarTela caminho={'/mapasMK'} texto={'Mapas Cadastrados'} />
<div className={styles.mainContainer}>
            <form onSubmit={Adicionar} className={styles.container}>
                <Inputs tipo={'text'} valor={nome} pl={'nome'} oc={(e) => setNome(e.target.value)} />
                <p>{erroNome}</p>
                <Inputs tipo={'text'} valor={imagem} pl={'Imagem'} oc={(e) => setImagem(e.target.value)} />
                <p>{erroImagem}</p>
                <Inputs tipo={'text'} valor={descricao} pl={'Descrição'} oc={(e) => setDescricao(e.target.value)} />
                <p>{erroDescricao}</p>
                <Inputs tipo={'text'} valor={inspiracao} pl={'Inspiração'} oc={(e) => setInspiracao(e.target.value)} />
                <p>{erroInspiracao}</p>
                <select name="copa" id="copa" value={copa} onChange={(e) => setCopa(e.target.value)}>
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
                <input type="number" value={trofeus} placeholder='Troféus' onChange={(e) => setTrofeus(e.target.value)}  />
                <p>{erroTrofeus}</p>
                <input type="text" value={plataforma} placeholder='Plataforma' onChange={(e) => setPlataforma(e.target.value)}  />
                <p>{erroPlataforma}</p>
                <button type="submit">Cadastrar</button>
            </form>
            </div>
        </main>
    )

}

