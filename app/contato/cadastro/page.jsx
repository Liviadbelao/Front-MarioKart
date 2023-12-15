



"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


import Link from "next/link";


export default function Page() {
  const [contatos, setContatos] = useState([]);
  const [dados, setDados] = useState([]);

  const router = useRouter();


  //Function de deletar pessoa
  const deletar = async (id) => {
    const url = `/api/contato/${id}`;
    try {
      await axios.delete(url);
      setContatos(contatos.filter((contato) => contato.id !== id));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  useEffect(() => {
    async function fetchContatos() {
      try {
        const response = await axios.get("/api/contato");
        setContatos(response.data);
        setDados(response.data.contatos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchContatos();
  }, []);
console.log(contatos);
  return (
    <div >
      

      <div>
        <Link href="/contato">
          <button >
            Cadastrar Aluno
          </button>
        </Link>
      </div>

      <div >
        <h1 >Tentativas de contato:</h1>

        {contatos.length ? (
          <div >
            {contatos.map((contato) => (
              <div key={contato.id} >
                <div>
               
                  <p>
                    <strong>Nome:</strong> {contato.nome}
                  </p>
                  <p>
                    <strong>Telefone:</strong> {contato.telefone}
                  </p>
                  <p>
                    <strong>Emai:</strong> {contato.email}
                  </p>
                  <p>
                    <strong>Mensagem:</strong> {contato.mensagem}
                  </p>
                </div>

                <div >
                  <button
                   
                    onClick={() => deletar(contato.id)}
                  >
                   Deletar
                  </button>
            
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p> "Carregando..."</p>
        )}
      </div>
    </div>
  );
}