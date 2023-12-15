"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./cadastro/cadastro.module.css";
import TrocarTela from "@/app/components/trocartela/TrocarTela";
import Inputs from "@/app/components/inputs/Inputs";
import Label from "@/app/components/label/label";
import Header from "../components/header/Header";

export default function Register() {
    const [nome, setNome] = useState("");
    const [nomeErro, setNomeErro] = useState("");
    const [email, setEmail] = useState("");
    const [emailErro, setEmailErro] = useState("");
    const [telefone, setTelefone] = useState("");
    const [telefoneErro, setTelefoneErro] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");
    const [contato, setContato] = useState([]);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome) {
            setNomeErro('Preencha o campo Nome');
          } else if (nome.length < 3 || nome.length > 20) {
            setNomeErro('O tamanho do nome deve ser entre 3 a 20 caracteres')
          }else {
            setNomeErro('')
          }
        
          if (!email) {
            setEmailErro('Preencha o campo Email')
          } else if (!isEmailValid(email)) {
            setEmailErro('O email precisa conter "@"')
          }else {
            setEmailErro('')
          }
        
          if (!telefone) {
            setTelefoneErro('Preencha o campo Telefone');
          }else if (isNaN(telefone)) {
            setTelefoneErro('O telefone deve conter apenas números');
          } else if (telefone.length != 11) {
            setTelefoneErro('O telefone deve conter 11 dígitos');
          }else {
            setTelefoneErro('')
          }
        
          if (!mensagem) {
            setMensagemErro('Preencha o campo Mensagem')
          } else if( mensagem.length > 150) {
            setMensagemErro("A mensagem é muito longa")
          }else {
            setMensagemErro('')
          }

        try {
            await axios.post("/api/contato", { nome, email, telefone, mensagem });
            setNome("");
            setEmail("")
            setTelefone("")
            setMensagem("")

            router.push(`/contato/cadastro`);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    function isEmailValid(email) {
        return email.includes('@');
      }
      

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
        <div className={style.container}>
            <Header />

            <div className={style.parallax}>

                <div className={style.container2}>

                    <div >
                        <TrocarTela caminho={"/contato/cadastro"} texto={'Ver Contatos'} />
                    </div>

                    <div className={style.inputsContainer} >
                        <h1 className={style.cadastrar}>Entre em contato!</h1>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor={'nome'} texto={'Nome:'} />
                                <Inputs tipo={'text'} valor={nome} oc={(e) => setNome(e.target.value)} />
                                {nomeErro}
                            </div>
                            <div>
                            <Label htmlFor={'email'} texto={'Email:'} />
                                <Inputs tipo={'text'} valor={email} oc={(e) => setEmail(e.target.value)} />
                                {emailErro}
                            </div>
                            <div>
                            <Label htmlFor={'telefone'} texto={'Telefone:'} />
                                <Inputs tipo={'text'} valor={telefone} oc={(e) => setTelefone(e.target.value)} />
                                {telefoneErro}
                            </div>
                            <div>
                            <Label htmlFor={'mensagem'} texto={'Mensagem:'} />
                            <Inputs tipo={'text'} valor={mensagem} oc={(e) => setMensagem(e.target.value)} />
                            {mensagemErro}
                    </div>

                    <button className={style.button2} type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
            </div >
        </div >
    );
}