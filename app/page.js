'use client'
import axios from "axios"
import { useEffect, useState } from "react";
import style from './sobrenos/page.module.css'

export default function Home() {

  const [mapas, setMapas] = useState([]);
  const [dados, setDados] = ([])

  useEffect(() => {
    async function fetchMaps() {
      try {
        const response = await axios.get("/api/usuarios");
        setMapas(response.data.listaMapas);
        setDados(response.data.listaMapas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMaps();
  }, []);

  console.log("Mapas");
  console.log(mapas);

  return (
    <main >
      {mapas ? (
        mapas.map((mapa) => (
          <div key={mapa.id} className={style.div1}>
            <h1>{mapa.id}</h1>
          </div>
        ))
      ) : (
        <h1 className={style.h1}>Esperando Dados</h1>
      )}
    </main>
  )
}
