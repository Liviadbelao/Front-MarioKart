/* 'use client'
import axios from "axios"
import { useEffect, useState } from "react";

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
    <main >
      {usuarios ? (
        usuarios.map((usuario) => (
          <div key={usuario.id}>
            <h1>{usuario.id}</h1>
          </div>
        ))
      ) : (
        <h1>Esperando Dados</h1>
      )}
    </main>
  )
} */