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
  const [erroNome, setErroNome] = useState("");
  const [erroIdade, setErroIdade] = useState("");
  const [erroDescricao, setErroDescricao] = useState("");
  const [erroImagem, setErroImagem] = useState("");
  const router = useRouter();
  const { id } = params;
  let erros = [];

  const urlValida = (imagem) => {
    if (imagem.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}


  const handlesubmit = async (e) => {
    e.preventDefault();

    
    if (nome == '') {
      setErroNome('Preencha o campo Nome');
  } else if (nome.length < 3 || nome.length >20) {
      setErroNome('O tamanho do nome deve ser entre 3 a 20 caracteres')
  }else {
      setErroNome('');
  }

  
 if(idade == '') {
  setErroIdade('Preencha o campo idade')
 }else if(idade < 13) {
     setErroIdade('O usuário deve ser maior de 13 anos.')
 } else {
     setErroIdade('');
 }

 if(descricao == '') {
  setErroDescricao('Preencha o campo Descrição')
 }else if(descricao.length < 10 || descricao.length > 100) {
     setErroDescricao('O tamanho da descrição deve ser entre 10 a 100 caracteres')
 } else {
     setErroDescricao('');
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

 


try {
  await axios.post("/api/usuarios", { nome, avatar, idade, descricao, tipo, imagem  });
  setNome("");
  setAvatar("");
  setIdade("");
  setDescricao("");
  setTipo("");
  setImagem("");
 
} catch (error) {
  console.error("Error submitting data:", error);
}
  }
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

  const handleTypeUser = (e) => {
    const selectedTypeUser = e.target.value;
    setTipo(selectedTypeUser);
  };

  return (
    <div className={styles.main}>
      <div >
        <Link href={`/sobrenos`}>
          <button className={styles.btn_hibrido}>Voltar para cadastro</button>
        </Link>
      </div>

      <div className={styles.containerEd}>
        <h1>Atualizar Usuario</h1>
        {id ? (
          <form onSubmit={handlesubmit} className={styles.mainContainer}>
            <div>
              <label htmlFor="nome" className={styles.label}>nome</label>
              <input
                type="text"
                className={styles.input}
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                
              />
                <p>{erroNome}</p>
            </div>
            <div>
              <label htmlFor="avatar" className={styles.label}> selecione seu avatar</label>
              <select
                name="avatar"
                id="avatar"
                onChange={handleAvatarChange}
                value={avatar}
                className={styles.select}

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
              <label  htmlFor="idade" className={styles.label}>
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
                 <p>{erroIdade}</p>
            </div>

            <div>
              <label htmlFor="descricao"  className={styles.label}>
                descrição
              </label>
              <input
                type="text"
                id="descricao"
                className={styles.input}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
              <p>{erroDescricao}</p>
            </div>
            <div>
              <label htmlFor="tipo"  className={styles.label}>
                tipo
              </label>
              <select  type="text" id="tipo" value={tipo} onChange={handleTypeUser} className={styles.select}>
              <option value="Aluno"> Selecione... </option>
              <option value="Aluno"> Aluno </option>
              <option value="Instrutor"> Instrutor </option>
              <option value="Vistante"> Visitante </option>
            </select>
            </div>
            <div>
              <label htmlFor="imagem"  className={styles.label}>
                imagem
              </label>
              <input
                type="text"
                className={styles.input}
                id="imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                required
              />

<p>{erroImagem}</p>
            </div>

            <button type="submit" className={styles.button}>Atualizar</button>
          </form>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div >
  );
}
