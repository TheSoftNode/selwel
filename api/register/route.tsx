import { NextResponse } from "next/server";
import ApiProxy from "../proxy";
import { DJANGO_API_ENDPOINT } from "@/config/defaults";

const DJANGO_API_USERS_URL = `${DJANGO_API_ENDPOINT}/users/`
console.log(DJANGO_API_USERS_URL, DJANGO_API_ENDPOINT)

export async function GET(request: Request)
{
    const { data, status } = await ApiProxy.get(DJANGO_API_USERS_URL, true)
    return NextResponse.json(data, { status: status })
}


export async function POST(request: Request)
{
    const requestData = await request.json()
    const { data, status } = await ApiProxy.post(DJANGO_API_USERS_URL, requestData, true)
    return NextResponse.json(data, { status: status })
}   