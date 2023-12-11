"use client";

//Importações
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Inputs from "@/app/components/inputs/Inputs";
import Footer from "@/app/components/footer/Footer";

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
        } else if (!urlValida(imagem)) {
            console.log('A imagem precisa ser valida')
            setErroImagem('A imagem precisa ter um formato válido: .jpeg/.jpg/.gif/.png')
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
            console.error("Error updating mapa:", error);
        }

    };

//Criand HTMl
    return (
        <main>

            <Link href="/mapasMK">
                <button >
                    Ver cadastrados
                </button>
            </Link>

            {id ? (
                <form onSubmit={handleSubmit}>

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

                    <Inputs tipo={'number'} valor={trofeus} pl={'Troféus'} oc={(e) => setTrofeus(e.target.value)} />
                    <p>{erroTrofeus}</p>

                    <Inputs tipo={'text'} valor={plataforma} pl={'Plataforma'} oc={(e) => setPlataforma(e.target.value)} />
                    <p>{erroPlataforma}</p>
                    
                    <button type="submit">atualizar</button>
                </form>
            ) : (<p>Carregando...</p>)}

            <Footer />
        </main>
    )

}