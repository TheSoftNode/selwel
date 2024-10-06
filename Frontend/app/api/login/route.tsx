"use server";
import { DJANGO_API_ENDPOINT } from '@/config/defaults';
import { setRefreshToken, setToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

const DJANGO_API_LOGIN_URL = `${DJANGO_API_ENDPOINT}/token/pair`;

interface RequestData {
  email: string;
  password: string;
}

interface ResponseData {
  access: string;
  refresh: string;
  email: string;
  [key: string]: any; // Allow additional properties in the response
}

export async function POST(request: Request): Promise<NextResponse> {
  const requestData: RequestData = await request.json();
  const jsonData = JSON.stringify(requestData);
  
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  };

  const response = await fetch(DJANGO_API_LOGIN_URL, requestOptions);
  const responseData: ResponseData = await response.json();

  if (response.ok) {
    console.log('logged in');
    const { email, access, refresh } = responseData;
    setToken(access);
    setRefreshToken(refresh);
    return NextResponse.json({ loggedIn: true, email }, { status: 200 });
  }

  return NextResponse.json({ loggedIn: false, ...responseData }, { status: 400 });
}
