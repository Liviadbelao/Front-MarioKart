
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../contato.module.css"
import Image from "next/image";
import TrocarTela from "@/app/components/trocartela/TrocarTela";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";


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

  function maskPhoneNumber(phoneNumber) {
 
    let celularArray = phoneNumber.split("");
    let celularFormatado = "(" + celularArray[0] + celularArray[1] + ")"
        + " " + celularArray[2] + celularArray[3] + celularArray[4]
        + celularArray[5] + celularArray[6] + "-"
        + celularArray[7] + celularArray[8]
        + celularArray[9] + celularArray[10];
    return celularFormatado;
  }
  

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

  return (
    <div className={styles.main} >
      
<Header/>
      <div>
       <TrocarTela caminho={"/contato"} texto={"Entre em contato!"}/>
      </div>

      <div >
        <h1 className={styles.titulo} >Tentativas de contato:</h1>

        {contatos.length ? (
          <div className={styles.containerCard} >
            {contatos.map((contato) => (
              <div className={styles.container} key={contato.id} >
                <div>
               
                  <p>
                    <strong>Nome:</strong> {contato.nome}
                  </p>
                  <p>
                    <strong>Telefone:</strong>{maskPhoneNumber(contato.telefone)}
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
                   className={styles.button2}
                    onClick={() => deletar(contato.id)}
                  >
                   Deletar
                  </button>
            
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Image src={"/pagHome/marioGifCarregar.gif"} width={100} height={100}/>
        )}
      </div>
      <div className={styles.footer}>
      <Footer/>
      </div>
    </div>
  );
}