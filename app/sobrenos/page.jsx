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
      {usuarios ? (
        usuarios.map((usuario) => (
        <div className={style.container}>
          <div key={usuario.id} className={style.content} >
         
            <h1 className={style.h1}>{usuario.nome} </h1>
            <h1 className={style.h1}>{usuario.idade} </h1>
            <h1  className={style.h1}>{usuario.descricao} </h1>
            <h1  className={style.h1}>{usuario.tipo} </h1>
          </div>
          </div>
        ))
      ) : (
        <h1>Esperando Dados</h1>
      )}
    </main>
  )
}