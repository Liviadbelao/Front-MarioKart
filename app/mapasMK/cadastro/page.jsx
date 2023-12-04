"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import TrocarTela from "@/app/components/trocartela/TrocarTela";

export default function Register() {
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [descricao, setDescricao] = useState("");
    const [inspiracao, setInspiracao] = useState("");
    const [copa, setCopa] = useState("");
    const [trofeus, setTrofeus] = useState("");
    const [plataforma, setPlataforma] = useState("");
    const [mapas, setMapas] = useState([]);

    const Adicionar = async (e) => {
        e.preventDefault();

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
        <main>
            <TrocarTela caminho={'/mapasMK'} texto={'Mapas Cadastrados'} />

            <form onSubmit={Adicionar}>
                <input type="text" value={nome} placeholder='nome' onChange={(e) => setNome(e.target.value)} required  />
                <input type="text" value={imagem} placeholder='imagem' onChange={(e) => setImagem(e.target.value)} required  />
                <input type="text" value={descricao} placeholder='Descrição do Mapa' onChange={(e) => setDescricao(e.target.value)} required  />
                <input type="text" value={inspiracao} placeholder='Inspiração' onChange={(e) => setInspiracao(e.target.value)} required  />
                <input type="text" value={copa} placeholder='Copa' onChange={(e) => setCopa(e.target.value)} required  />
                <input type="text" value={trofeus} placeholder='Copa' onChange={(e) => setTrofeus(e.target.value)} required  />
                <input type="text" value={plataforma} placeholder='Copa' onChange={(e) => setPlataforma(e.target.value)} required  />
                <button type="submit">Cadastrar</button>
            </form>
         
        </main>
    )



}