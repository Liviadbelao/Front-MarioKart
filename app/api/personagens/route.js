
import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "personagens";

export async function GET() {
  try {
    const response = await axios.get(url);
    //console.log(response.data);



    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

