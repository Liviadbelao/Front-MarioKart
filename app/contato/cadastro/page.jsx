"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function Register() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState([]);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/contato", { nome});
      setNome("");
      
      router.push(`/contato/`);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    async function fetchContato() {
      try {
        const response = await axios.get("/api/contato");
        setContato(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchContato();
  }, []);
  return (
    <div >
     

      <div >
        <Link href="/contato">
          <button >
            Voltar para Alunos
          </button>
        </Link>
      </div>

      <div >
        <h1>Cadastrar Aluno</h1>

        <form onSubmit={handleSubmit}>
          <div >
            <label  htmlFor="name">
              Nome:
            </label>
            <input
              
              type="text"
              id="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

  
          

          <button
            type="submit"
    
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}