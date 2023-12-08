"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Inputs from "@/app/components/inputs/Inputs";

export default function UpdateMapa({ params }) {
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
  
    useEffect(() => {
      async function fetchMapaDetails() {
        try {
          const response = await axios.get(`/api/mapas/${id}`);
          const mapa = response.data.mapas;
          console.log("AAAAAAAAAAAAAAAAAAAAA");
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

console.log("AAAAAAAAAAAAAAAAAAAAA");

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/mapas/${id}`, { nome, imagem, descricao, inspiracao, copa, trofeus, plataforma });
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
            <button type="submit">atualizar</button>
        </form>
        ):(<p>Carregando...</p>)}
   
     
    </main>
)

}