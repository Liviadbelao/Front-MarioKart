"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



import Link from "next/link";

export default function UpdateStudent({ params }) {
    const [nome, setNome] = useState("");

    const router = useRouter();
    const { id } = params;

    useEffect(() => {
        async function fetchcontatoDetails() {
            try {
                const response = await axios.get(`/api/contato/${id}`);
                const contato = response.data.contato;
                setNome(contato.nome);

            } catch (error) {
                console.error("Error fetching contato details:", error);
            }
        }

        if (id) {
            fetchcontatoDetails();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`/api/contato/${id}`, { nome });
            router.push(`/contato/`);
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    return (
        <div >


            <div >
                <Link href={`/contato`}>
                    <button >
                        Voltar para Alunos
                    </button>
                </Link>
            </div>

            <div >
                <h1 >Atualizar Estudante</h1>

                {id ? (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" >
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
                            Atualizar
                        </button>
                    </form>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </div>
    );
}