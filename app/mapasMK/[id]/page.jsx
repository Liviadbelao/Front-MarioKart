"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UpdateMapa({ params }) {
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
 /*    const [descricao, setDescricao] = useState("");
    const [inspiracao, setInspiracao] = useState("");
    const [copa, setCopa] = useState("");
    const [trofeus, setTrofeus] = useState("");
    const [plataforma, setPlataforma] = useState(""); */
    const router = useRouter();
    const { id } = params;
  
    useEffect(() => {
      async function fetchMapaDetails() {
        try {
          const response = await axios.get(`/api/mapas/${id}`);
          const mapa = response.data.mapas;
          console.log("AAAAAAAAAAAAAAAAAAAAA");
          console.log(mapa);
          setNome(mapa.nome);
          setImagem(mapa.imagem);
          /*    setDescricao(mapa.descricao);
          setInspiracao(mapa.inspiracao);
          setCopa(mapa.copa);
          setTrofeus(mapa.trofeus);
          setPlataforma(mapa.plataforma); */
        } catch (error) {
          console.error("Error fetching mapa details:", error);
        }
    }
    
    if (id) {
        fetchMapaDetails();
    }
}, [id]);

console.log("AAAAAAAAAAAAAAAAAAAAA");

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/mapas/${id}`, { nome, imagem });
      router.push(`/mapasMK/`);
    } catch (error) {
      console.error("Error updating mapa:", error);
    }
  };

  
  return (
    <main>

        <Link href="/mapasMK">
            <button >
                Ver cadastrados
            </button>
        </Link>
        {id?( 
                <form onSubmit={handleSubmit}>
            <input type="text" value={nome} placeholder='nome' onChange={(e) => setNome(e.target.value)} required  />
            <input type="text" value={imagem} placeholder='imagem' onChange={(e) => setImagem(e.target.value)} required  />
            <button type="submit">atualizar</button>
        </form>
        ):(<p>Carregando...</p>)}
   
     
    </main>
)

}