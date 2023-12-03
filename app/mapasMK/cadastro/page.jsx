"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import TrocarTela from "@/app/components/trocartela/TrocarTela";

export default function Register() {
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState();
    const [mapas, setMapas] = useState([]);

    const Adicionar = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/mapas", { nome, imagem });
            setNome("");
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
                <button type="submit">Cadastrar</button>
            </form>
         
        </main>
    )



}