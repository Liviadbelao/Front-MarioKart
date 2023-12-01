'use client'
import axios from "axios"
import { useEffect, useState } from "react";
import style from './page.module.css'


export default function SobreNos() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/api/usuarios");
        setUsuarios(response.data.usuarios);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchUsers();
  }, []);

  console.log("Usuarios");
  console.log(usuarios);


  return (
    <main className={style.divMain}>
      <div className={style.container}>
        {usuarios ? (
          usuarios.map((usuario) => (

            <div >

              <div key={usuario.id} className={style.content} >


                <div className={style.nome}><img className={style.img} src={usuario.avatar}/> <p className={style.p}>{usuario.nome} </p>
                
                </div>

                {/* <p className={style.p}>{usuario.nome} </p>
            <p className={style.p}>{usuario.idade} </p>
            <p  className={style.p}>{usuario.tipo} </p>
            <p  className={style.p}>{usuario.descricao} </p>
            <img className={style.img} src={usuario.imagem}/> 
         */}

              </div>
              </div>))

              )  : (
              <h1>Esperando Dados</h1>
          )}
            </div>
    </main>
  )
}