'use client'
import axios from "axios"
import { useEffect, useState } from "react";
import style from './page.module.css'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TbUserPlus } from "react-icons/tb";
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import ModalSobre from "../components/modalSobre/ModalSobre";




export default function SobreNos() {
  const [usuarios, setUsuarios] = useState([]);
  const [dados, setDados] = useState([]);
  const router = useRouter();
const [abriModal,setAbrirModal]= useState(null);

const openModal = (id) => {
  setAbrirModal(id);
};

//fechar modal
const closeModal = () => {
  setAbrirModal(null);
};


  const deletar = async (id) => {
    const url = `/api/usuarios/${id}`;
    try {
      await axios.delete(url);
      setUsuarios(dados.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const update = async (id) => {
    router.push(`/sobrenos/${id}`);
  };



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
/* 
  console.log("Usuarios");
  console.log(usuarios); */

  // const [botaoModal, setBotaoModal] = useState(0)
  return (
    <main className={style.divMain}>
      <div className={style.container}>

        <div>
         
          {dados.length ? (
            <div className={style.all}>
              {usuarios.map((usuario) => (
                <div onClick={() => openModal(usuario.id)} className={style.card}>
                 
                  <div key={usuario.id} className={style.content}>

                    <div className={style.nome}><img className={style.img} src={usuario.avatar} /> <p className={style.p}>{usuario.nome} </p>
                    
                    </div>
                    



                    {/* <p>
                    <strong>ID:</strong> {usuario.id}
                  </p>
                  <p>
                    <strong className={style.p}>Nome:</strong> {usuario.nome}
                  </p>
                  <p>
                    <strong className={style.p}>Idade:</strong> {usuario.idade}
                  </p>
                  <p>
                    <strong className={style.p}>tipo:</strong> {usuario.tipo}
                  </p>
                  <p>
                    <strong className={style.p}>descricao:</strong> {usuario.descricao}
                  </p>
                  <img className={style.img} src={usuario.imagem}/> */}
                  </div>
               
                  <div >
                    <button
                      onClick={() => deletar(usuario.id)}
                      className={style.delete}
                    >
                    <TiUserDelete />
                    </button>
                    <button
                      onClick={() => update(usuario.id)}
                      className={style.edit}
                    >
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
            <button className={style.button}>
            <TbUserPlus />

            </button>
          </Link>
        </div>

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
                                     fechar={closeModal}  />

                            </div>)))
                ) : null
            }


    </main>
  )

}

