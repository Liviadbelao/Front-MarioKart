
import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "usuario";

export async function GET() {
  try {
    const response = await axios.get(url);

   /*  console.log("API")
    console.log(response.data); */

    return NextResponse.json(response.data);
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