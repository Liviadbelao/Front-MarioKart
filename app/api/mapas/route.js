import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "mapas";

export async function GET(request) {

  const { searchParams } = new URL(request.url);

  const nome = searchParams.get('nome');
  const trofeus = searchParams.get('trofeus');
  const copa = searchParams.get('copa');

  try {
    if (nome || trofeus || copa) {
      const nomeCondicao = nome == undefined || nome == null ? '' : `nome=${nome}`;
      const trofeuCondicao = trofeus == undefined || trofeus == null ? '' : `&trofeus=${trofeus}`;
      const copaCondicao = copa == undefined || copa == null ? '' : `&copa=${copa}`;

      const response = await axios.get(`${url}?${nomeCondicao}${trofeuCondicao}${copaCondicao}`);

      return NextResponse.json(response.data)

    } else {
      const response = await axios.get(`${url}`);

      return NextResponse.json(response.data);
    }
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function POST(request) {
  const params = await request.json();

  try {
    const response = await axios.post(url, params);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_POST]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

