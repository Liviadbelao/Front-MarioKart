"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function AtualizarUsuario({ params }) {
  const [nome, setNome] = useState("");
  const [avatar, setAvatar] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [imagem, setImagem] = useState("");
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function buscarDetalhesUsuario() {
      try {
        const { data } = await axios.get(`/api/usuarios/${id}`);
        const usuario = data.usuario;
        setNome(usuario.nome);
        setIdade(usuario.idade);
        setDescricao(usuario.descricao);
        setTipo(usuario.tipo);
        setImagem(usuario.imagem);
        setAvatar(usuario.avatar);
      } catch (error) {
        console.error("Error fetching usuario details:", error);
      }
    }

    if (id) {
      buscarDetalhesUsuario();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/usuarios/${id}`, { nome, avatar, idade, descricao, tipo, imagem });
      router.push(`/sobrenos/`);
    } catch (error) {
      console.error("Error updating usuario:", error);
    }
  }


  const handleAvatarChange = (event) => {
    const selectedAvatar = event.target.value;
    setAvatar(selectedAvatar);
  };

  return (
    <div className={styles.main}>
      <div className={styles.action}>
        <Link href={`/sobrenos`}>
          <button>Voltar para cadastro</button>
        </Link>
      </div>

      <div>
        <h1>Atualizar Usuario</h1>
        {id ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">nome</label>
              <input
                type="text"
                className={styles.input}
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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

                <option value=''>Selecione...</option>
                <option value="/cadastroSobreNos/abelha_rainha-removebg-preview.png">Abelha Rainha</option>
                <option value="/cadastroSobreNos/baby_pitty-removebg-preview.png">Baby Pitty</option>
                <option value="/cadastroSobreNos/babyprincessbelao-PhotoRoom.png-PhotoRoom.png">Baby Rosalina</option>
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
                <option value="/cadastroSobreNos/prince ghost-PhotoRoom.png-PhotoRoom.png">Boo Ghost</option>
                <option value="/cadastroSobreNos/princesa belao-PhotoRoom.png-PhotoRoom.png">Princess Rosalina</option>
                <option value="/cadastroSobreNos/rainha peach-PhotoRoom.png-PhotoRoom.png">Princess Peach</option>
                <option value="/cadastroSobreNos/princesa ruiva-PhotoRoom.png-PhotoRoom.png">Princess Daisy</option>
                <option value="/cadastroSobreNos/rainha peach-PhotoRoom.png-PhotoRoom.png">Rainha Peach</option>
                <option value="/cadastroSobreNos/ratao-PhotoRoom.png-PhotoRoom.png">Mouser</option>
                <option value="/cadastroSobreNos/sapao-PhotoRoom.png-PhotoRoom.png">Espigão</option>
                <option value="/cadastroSobreNos/suga-PhotoRoom.png-PhotoRoom.png">Birdo</option>
                <option value="/cadastroSobreNos/tartaruga de lacinho-PhotoRoom.png-PhotoRoom.png">Wendy</option>
                <option value="/cadastroSobreNos/teen monkey-PhotoRoom.png-PhotoRoom.png">Diddy kong</option>
                <option value="/cadastroSobreNos/veio maluco-PhotoRoom.png-PhotoRoom.png">Professor E.Gadd</option>



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

            <div className={styles.formGroup}>
              <label htmlFor="idade" className={styles.label}>
                Idade:
              </label>
              <input
                type="number"
                className={styles.input}
                id="idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="descricao">
                descrição
              </label>
              <input
                type="text"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="tipo">
                tipo
              </label>
              <input
                type="text"
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="imagem">
                imagem
              </label>
              <input
                type="text"
                id="imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                required
              />
            </div>

            <button type="submit">Atualizar</button>
          </form>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div >
  );
}
