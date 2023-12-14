'use client'
import axios from "axios"
import styles from "./contato.module.css"
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Contato() {
  const [contatos, setContatos] = useState([]);
  const router = useRouter();

  const deletar = async (id) => {
    const url = `/api/contato/${id}`;
    try {
      await axios.delete(url);
      setContatos(contatos.filter((contato) => contato.id !== id)); // Corrigindo a atualização do estado
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const update = async (id) => {
    router.push(`/contato/${id}`);
  };

  useEffect(() => {
    async function fetchContato() {
      try {
        const response = await axios.get("/api/contato");
        setContatos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchContato();
  }, []);

  console.log("Contatos", contatos);

  return (
    <main>
      <Link href="/contato/cadastro">
        <button>Cadastrar Aluno</button>
      </Link>
      <h1>Contatos feitos</h1>
      {contatos.length ? (
        contatos.map((contato) => (
          <div className={styles.container} key={contato.id}>
            <h1>{contato.nome}</h1>
            <p>
              <strong>Email:</strong>
              {contato.email}
            </p>
            <p>
              <strong>Telefone:</strong>
              {contato.telefone}
            </p>
            <p>
              <strong>Mensagem deixada pelo usuário:</strong>
              {contato.mensagem}
            </p>
            <button onClick={() => deletar(contato.id)}>apagar</button>
            <button onClick={() => update(contato.id)}>editar</button>
          </div>
        ))
      ) : (
        <h1>Esperando Dados</h1>
      )}
    </main>
  );
}