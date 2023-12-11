"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./cadastro.module.css";

import Link from "next/link";

export default function Register() {
    const [nome, setNome] = useState("");
    const [contato, setContato] = useState([]);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/contato", { nome });
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
        <div className={style.container}>

            <div className={style.parallax}>

                <div className={style.container2}>

                    <div >
                        <Link href="/contato">
                            <button className={style.button}>Voltar para Alunos</button>
                        </Link>
                    </div>

                    <div >
                        <h1 className={style.cadastrar}>Cadastrar Aluno</h1>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className={style.label} htmlFor="name">Nome:</label>

                                <input className={style.input} type="text" id="name" value={nome} onChange={(e) => setNome(e.target.value)} required /></div>
                            <div>
                                <label className={style.label} htmlFor="name">E-mail:</label>

                                <input className={style.input} type="text" id="name" value={nome} onChange={(e) => setNome(e.target.value)} required /></div>
                            <div>
                                <label className={style.label} htmlFor="name">Telefone:</label>

                                <input className={style.input} type="text" id="name" value={nome} onChange={(e) => setNome(e.target.value)} required /></div>
                            <div>
                                <label className={style.label} htmlFor="name">Mensagem:</label>

                                <input className={style.input} type="text" id="name" value={nome} onChange={(e) => setNome(e.target.value)} required /></div>

                            <button className={style.button2} type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}