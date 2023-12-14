"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./cadastro.module.css";

import Link from "next/link";
import TrocarTela from "@/app/components/trocartela/TrocarTela";
import Inputs from "@/app/components/inputs/Inputs";
import Label from "@/app/components/label/label";

export default function Register() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [contato, setContato] = useState([]);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/contato", { nome, email, telefone, mensagem });
            setNome("");
            setEmail("")
            setTelefone("")
            setMensagem("")

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
        <div className={style.container}>

            <div className={style.parallax}>

                <div className={style.container2}>

                    <div >
                        <TrocarTela caminho={"/contato"} texto={'Ver Contatos'} />
                    </div>

                    <div className={style.inputsContainer} >
                        <h1 className={style.cadastrar}>Entre em contato!</h1>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor={'nome'} />
                                <label className={style.label} htmlFor="name">Nome:</label>
                                <Inputs tipo={'text'} valor={nome} oc={(e) => setNome(e.target.value)} />
                            </div>
                            <div>
                                <label className={style.label} htmlFor="name">E-mail:</label>
                                <Inputs tipo={'text'} valor={email} oc={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label className={style.label} htmlFor="name">Telefone:</label>
                                <Inputs tipo={'text'} valor={telefone} oc={(e) => setTelefone(e.target.value)} />
                            </div>
                            <div>
                                <label className={style.label} htmlFor="name">Mensagem:</label>
                            <Inputs tipo={'text'} valor={mensagem} oc={(e) => setMensagem(e.target.value)} />
                    </div>

                    <button className={style.button2} type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
            </div >
        </div >
    );
}