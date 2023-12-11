'use client'
import axios from "axios"
import styles from "./contato.module.css"
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Contato() {
    const [contato, setContato] = useState([]);
    const [dados, setDados] = useState([]);
    const router = useRouter();
    


    const deletar = async (id) => {
      const url = `/api/contato/${id}`;
      try {
        await axios.delete(url);
        setDados(dados.filter((student) => student.id !== id));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const update = async (id) => {
      router.push(`/contato/${id}`);
    };
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
             <Link href="/contato/cadastro">
          <button >
            Cadastrar Aluno
          </button>
        </Link>
        <h1>Contatos feitos</h1>
          {contato ? (
            contato.map((contato) => (
              <div className={styles.container} key={contato.id}>
                <h1>{contato.nome}</h1>
                <p><strong>Email:</strong>{contato.email}</p>
                <p><strong>Telefone:</strong>{contato.telefone}</p>
                <p><strong>Mensagem deixada pelo usuario:</strong>{contato.mensagem}</p>
                <button onClick={()=> deletar(contato.id)}>apagar</button>
                <button onClick={()=> update(contato.id)}>editar</button>
              </div>
            ))
          ) : (
            <h1>Esperando Dados</h1>
          )}
        </main>
      )
    }