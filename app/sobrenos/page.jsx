'use client'

//Importações
import axios from "axios"
import { useEffect, useState } from "react";
import style from './page.module.css'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TbUserPlus } from "react-icons/tb";
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import ModalSobre from "../components/modalSobre/ModalSobre";

//Criando página
export default function SobreNos() {
  const [usuarios, setUsuarios] = useState([]);
  const [dados, setDados] = useState([]);
  const router = useRouter();
  const [abriModal, setAbrirModal] = useState(null);

  //Function de abrir modal
  const openModal = (id) => {
    setAbrirModal(id);
  };

  //Function fechar modal
  const closeModal = () => {
    setAbrirModal(null);
  };

  //Function de deletar pessoa
  const deletar = async (id) => {

    const url = `/api/usuarios/${id}`;

    try {
      await axios.delete(url);
      setUsuarios(dados.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  //Function de atualizar uma pessoa
  const update = async (id) => {
    router.push(`/sobrenos/${id}`);
  };

  //Coletando dados da API
  useEffect(() => {

    async function fetchUsers() {

      try {
        const response = await axios.get("/api/usuarios");
        setUsuarios(response.data.usuarios);
        setDados(response.data.usuarios)
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    }

    fetchUsers();
  }, [usuarios]);

  //Criando HTML
  return (

    <main className={style.divMain}>



      <div className={style.container}>

        <div>

          {dados.length ? (
            <div className={style.all}>
              {usuarios.map((usuario) => (
                <div onClick={() => openModal(usuario.id)} className={style.card}>

                  <div key={usuario.id} className={style.content}>

                    <div className={style.nome}>
                      <img className={style.img} src={usuario.avatar} /><p className={style.p}>{usuario.nome} </p>
                    </div>

                  </div>

                  <div >
                    <button onClick={() => deletar(usuario.id)}className={style.delete}>
                      <TiUserDelete />
                    </button>

                    <button onClick={() => update(usuario.id)} className={style.edit}>
                      <FaUserEdit />
                    </button>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <p>{dados.message ? dados.message : "Carregando..."}</p>

          )}

          <Link href="/sobrenos/cadastro" className={style.link} >
            <button className={style.button}><TbUserPlus /></button>
          </Link>
        </div>

   
      </div>
      <div className={style.cardLado}>
        <h1 className={style.h1So}>Conheça nossa Equipe</h1>
   <p>Conheça nosso site ,formado por um grupo de seis entusiastas do desenvolvimento que criaram uma plataforma única. 
    Ao se cadastrar em nosso site, você não só tem acesso exclusivo, mas também se torna parte ativa da nossa comunidade.
     Receba atualizações regulares, colabore em projetos emocionantes e faça do aprendizado uma jornada coletiva.
     Junte-se a nós n, onde cada cadastro é uma porta para a expansão do conhecimento e conexões valiosas.</p>
        </div>

   

      {
        //Modal
        abriModal ? (
          usuarios.map((usuarios) => (
            usuarios.id == abriModal && (
              <div key={usuarios.id}>

                <ModalSobre nome={usuarios.nome}
                  avatar={usuarios.avatar}
                  idade={usuarios.idade}
                  descricao={usuarios.descricao}
                  tipo={usuarios.tipo}
                  imagem={usuarios.imagem}
                  fechar={closeModal} />

              </div>)))
        ) : null
      }

    </main>
  )

}

