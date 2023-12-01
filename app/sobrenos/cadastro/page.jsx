"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [imagem, setImagem] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const[abrirModal,setAbrirModal] = useState(null);
 
  const openModal = (id) => {
    setAbrirModal(id);
};

const closeModal = () => {
    setAbrirModal(null);
};


  const adicionar = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/usuarios", { nome, idade, descricao, tipo, imagem,  });
      setNome("");
      setIdade("");
      setDescricao("");
      setTipo("");
      setImagem("");
      
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        const resposta = await axios.get("/api/usuarios");
        setUsuarios(resposta.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    buscarUsuarios();
  }, []);

  const handleAvatarChange = (e) => {
    const selectedAvatar = e.target.value;
    setAvatar(selectedAvatar);
  };

  return (
    <div>
      <div>
        <Link href="/sobrenos">
          <button>voltar para usuarios</button>
        </Link>
      </div>

      <div>
        <h1>cadastrar usuario</h1>
        <form onSubmit={adicionar}>
          <div>
            <label htmlFor="name"> nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="idade"> idade</label>
            <input
              type="number"
              id="idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="descricao"> descrição</label>
            <input
              type="text"
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="tipo"> tipo</label>
            <input
              type="text"
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="modal">selecione seu avatar</label>
            <button onClick={()=>openModal(usuarios.id)}></button>

          </div>
          <div>
            <label htmlFor="imagem"> imagem</label>
            <input
              type="text"
              id="imagem"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
              required
            />
          </div>

       

          <button type="submit">cadastrar</button>
        </form>
      </div>
    </div>
  );
}
