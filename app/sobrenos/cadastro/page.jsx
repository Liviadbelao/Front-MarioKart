"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [imagem, setImagem] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [avatar, setAvatar] = useState("");

  const adicionar = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/usuarios", { nome, idade, descricao, tipo, imagem, avatar });
      setNome("");
      setIdade("");
      setDescricao("");
      setTipo("");
      setImagem("");
      setAvatar("");
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
            <label htmlFor="imagem"> imagem</label>
            <input
              type="text"
              id="imagem"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="avatar"> selecione seu avatar</label>
            <select
              name="avatar"
              id="avatar"
              onChange={handleAvatarChange}
              value={avatar}
            >
              {/* <option value="caminho/para/imagem1.jpg">Imagem 1</option>
              <option value="caminho/para/imagem2.jpg">Imagem 2</option> */}
              <option value=''>Selecione...</option>
              <option value="/abelha_rainha-removebg-preview.png">Abelha Rainha</option>
              <option value="/baby_pitty-removebg-preview.png">Baby Pitty</option>
              <option value="/cadastroSobreNos/babyprincessbelao-PhotoRoom.png-PhotoRoom.png">Baby Princess</option>
              <option value="/cadastroSobreNos/baby_luid-removebg-preview.png">Baby Luid</option>
              <option value="/cadastroSobreNos/baby_mario-removebg-preview.png">Baby Mario</option>
              <option value="/cadastroSobreNos/baby_princes_brunete-removebg-preview.png">Baby Daisy</option>
              <option value="/cadastroSobreNos/bigode_de_raio-removebg-preview.png">wario</option>
              <option value="/cadastroSobreNos/bixao_bege-removebg-preview.png">Morton</option>
              <option value="/cadastroSobreNos/bixao_rosa-removebg-preview.png">Roy</option>
              <option value="/cadastroSobreNos/brunette-removebg-preview.png">Daisy</option>
              <option value="/cadastroSobreNos/cabeça_de_tartaruga-removebg-preview.png">Koopa Troopa</option>
              <option value="/cadastroSobreNos/cabelao_azul-removebg-preview.png">Ludwig</option>
              <option value="/cadastroSobreNos/castor_chines-removebg-preview.png">Monty Toupeira</option>
              <option value="/cadastroSobreNos/cogu_red-removebg-preview.png">Toad</option>
              <option value="/cadastroSobreNos/dick_vigarista-removebg-preview.png">Waluid</option>
              <option value="/cadastroSobreNos/dino-removebg-preview.png">Yoshi</option>
              <option value="/cadastroSobreNos/dragao_ruivo-removebg-preview.png">Bowser.Jr</option>
              <option value="/cadastroSobreNos/dragaozao-removebg-preview.png">Bowser</option>
              <option value="/cadastroSobreNos/girl_green-removebg-preview.png">Green sprixie</option>
              <option value="/cadastroSobreNos/jogador-removebg-preview.png">chargin'chuck</option>
              <option value="/cadastroSobreNos/king_ghost-removebg-preview.png">King Bob-omb</option>
              <option value="/cadastroSobreNos/luid-removebg-preview.png">Luid</option>
              <option value="/cadastroSobreNos/macacao-removebg-preview.png">Funky kong</option>
              <option value="/cadastroSobreNos/macaco-removebg-preview.png">Donkey kong</option>
              <option value="/cadastroSobreNos/mario-removebg-preview.png">Mario</option>
              <option value="/cadastroSobreNos/mascarado_vermeio-removebg-preview.png">shy guy</option>
              <option value="/cadastroSobreNos/monkey_girl-removebg-preview.png">Dixie kong</option>
              <option value="/cadastroSobreNos/ninja-removebg-preview.png">Ninji</option>
              <option value="/cadastroSobreNos/peninha_azul-removebg-preview.png">larry koopa</option>
              <option value="/cadastroSobreNos/peninha.png">lemmy koppa</option>
              <option value="/cadastroSobreNos/planta carnivora-PhotoRoom.png">Petanha Piranha</option>
              <option value="/cadastroSobreNos/pninha verde-PhotoRoom.png">iggy koopa</option>
              <option value="/cadastroSobreNos/peninha_azul-removebg-preview.png"></option>


              
              {/* Adicione mais opções conforme necessário */}
            </select>
            {avatar && (
              <Image
                src={avatar}
                alt="Avatar"
                width={50}
                height={50}
                style={{ marginLeft: '10px' }}
              />
            )}
          </div>

          <button type="submit">cadastrar</button>
        </form>
      </div>
    </div>
  );
}
