'use client'
import axios from "axios"
import { useEffect, useState } from "react";


export default function Contato() {
    const [contato, setContato] = useState([]);

  useEffect(() => {
    async function fetchContato() {
      try {
        const response = await axios.get("/api/contato");
        setContato(response.data.contato);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchContato();
  }, []);

  console.log("Contato");
  console.log(contato);

    return (
        <main >
          {contato ? (
            contato.map((contato) => (
              <div key={contato.id}>
                <h1>{contato.id}</h1>
              </div>
            ))
          ) : (
            <h1>Esperando Dados</h1>
          )}
        </main>
      )
    }




