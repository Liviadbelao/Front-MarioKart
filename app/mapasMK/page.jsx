'use client'
import axios from "axios"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
    const [dados, setDados] = useState([]);
    const [mapas, setMapas] = useState([]);
    const [copa, setCopa] = useState('');
    const [filtrados, setFiltrados] = useState([]);

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
            <button onClick={() => aplicarFiltro("Copa Flor")}>Flor</button>
            <button onClick={() => aplicarFiltro("Copa Casco")}>Casco</button>
            <button onClick={() => aplicarFiltro("Copa Seta")}>Seta</button>
            <button onClick={() => aplicarFiltro("Copa Estrela")}>Estrela</button>
            <button onClick={() => aplicarFiltro("Copa Flor de Cerejeira")}>Flor de Cerejeira</button>
            <button onClick={() => aplicarFiltro("Copa Banana")}>Banana</button>
            <button onClick={() => aplicarFiltro("Copa Folha")}>Folha</button>
            <button onClick={() => aplicarFiltro("Copa Especial")}>Especial</button>
            <button onClick={() => aplicarFiltro("Copa Ovo")}>Ovo</button>
            <button onClick={() => aplicarFiltro("Copa Leve")}>Leve</button>
            <button onClick={() => aplicarFiltro("Copa Flor de Ouro")}>Flor de Ouro</button>
            <button onClick={() => aplicarFiltro("Copa Coroa")}>Coroa</button>
            {filtrados.length != 0 ? (
                filtrados.map((mapa) => (
                    <div key={mapa.id}>
                        <h1>{mapa.nome}</h1>
                        <img src={mapa.imagem} width={200} height={100} />
                    </div>
                ))
            ) : (
                <h1>Selecione a copa</h1>
            )}
        </main>
    );
}
