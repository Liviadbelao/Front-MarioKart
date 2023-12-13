"use client";

//Importações
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Inputs from "@/app/components/inputs/Inputs";
import styles from "./cadastro.module.css"
import TrocarTela from "@/app/components/trocartela/TrocarTela";

//Criação da página
export default function Cadastro() {

  //Criando estados
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [idade, setIdade] = useState("");
  const [erroIdade, setErroIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erroDescricao, setErroDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [imagem, setImagem] = useState("");
  const [erroImagem, setErroImagem] = useState("");
  const [erroAvatar, setErroAvatar] = useState("");
  const [erroTipo, setErroTipo] = useState("");
  const [avatar, setAvatar] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  //Imagem válida
  const urlValida = (imagem) => {
    if (imagem.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      return true;
    } else {
      return false;
    }
  }

  //Criando nova pessoa
  const adicionar = async (e) => {
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

    if (!idade) {
      setErroIdade('Preencha o campo idade')
    } else if (idade < 13 ) {
      setErroIdade('O usuário deve ser maior de 13 anos.')
    } else if (idade > 110 ) {
      setErroIdade('O usuário deve conter uma idade que não seja da época da rainha Elizabeth')
    } else {
      setErroIdade('');
    }

    if (!avatar) {
      setErroAvatar('Preencha o campo do seu avatar')
  
    } else {
      setErroAvatar('');
    }

    if (!tipo) {
      setErroTipo('Preencha o campo ')
  
    } else {
      setErroTipo('');
    }

    try {
      await axios.post("/api/usuarios", { nome, avatar, idade, descricao, tipo, imagem });
      setNome("");
      setAvatar("");
      setIdade("");
      setDescricao("");
      setTipo("");
      setImagem("");

    } catch (error) {
      console.error("Error submitting data:", error);
    }

  };

  //Coletando dados da API
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

  //Select avatar
  const handleAvatarChange = (e) => {
    const selectedAvatar = e.target.value;
    setAvatar(selectedAvatar);
  };

  //Select tipo
  const handleTypeUser = (e) => {
    const selectedTypeUser = e.target.value;
    setTipo(selectedTypeUser);
  };

  //Criando HTML
  return (
    <div className={styles.main}>
      
      <div>
        <TrocarTela caminho={'/sobrenos'} texto={'Usuários Cadastrados'}/>
      </div>

      <div className={styles.container}>
        <h1>Cadastrar Usuário</h1>
        <form onSubmit={adicionar} className={styles.mainContainer}>

          <div>
            <label htmlFor="name" className={styles.label}> Nome </label>
            <Inputs tipo={'text'} valor={nome} oc={(e) => setNome(e.target.value)} />
            <p>{erroNome}</p>
          </div>

          <div>
            <label htmlFor="avatar" className={styles.label}> Selecione seu avatar</label>
            <select name="avatar" id="avatar" onChange={handleAvatarChange} value={avatar} className={styles.select}>
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

            <p>{erroAvatar}</p>
          </div>

          <div>
            <label htmlFor="idade" className={styles.label}> Idade</label>
            <Inputs tipo={'number'} valor={idade} oc={(e) => setIdade(e.target.value)} />
            <p>{erroIdade}</p>
          </div>

          <div>
            <label htmlFor="descricao" className={styles.label}> Descrição</label>
            <Inputs tipo={"text"} valor={descricao} oc={(e) => setDescricao(e.target.value)} />
            <p> {erroDescricao}</p>
          </div>

          <div>
            <label htmlFor="tipo" className={styles.label}> Selecione seu tipo de usuário</label>
            <select type="text" id="tipo" value={tipo} onChange={handleTypeUser} className={styles.select}>
              <option value=""> Selecione... </option>
              <option value="Aluno"> Aluno </option>
              <option value="Instrutor"> Instrutor </option>
              <option value="Vistante"> Visitante </option>
            </select>

            <p>{erroTipo}</p>
          </div>

          <div>
            <label htmlFor="imagem" className={styles.label}> Imagem</label>
            <Inputs tipo={"text"} valor={imagem} oc={(e) => setImagem(e.target.value)} />
            <p>{erroImagem}</p>
          </div>

          <button type="submit" className={styles.button}>cadastrar</button>
          
        </form>

      </div>

    </div>

  );
}
