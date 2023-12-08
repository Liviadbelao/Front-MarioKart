import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "usuario";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await axios.get(`${url}/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("[ORDER_GET]", error.response?.data || error.message);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();

  try {
    const response = await axios.put(`${url}/${id}`, body);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("[ORDER_PUT]", error.response?.data || error.message);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const response = await axios.delete(`${url}/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("[ORDER_DELETE]", error.response?.data || error.message);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}
