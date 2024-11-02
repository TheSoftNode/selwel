"use server";

import { DJANGO_API_ENDPOINT } from '@/config/defaults';
import { setRefreshToken, setToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

const DJANGO_API_LOGIN_URL = `${DJANGO_API_ENDPOINT}/users/login`;

interface RequestData
{
  email: string;
  password: string;
}

interface ResponseData
{
  token: string;
  refreshToken: string;
  email?: string;
  error?: string;
  code?: number;
}

export async function POST(request: Request): Promise<NextResponse>
{
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
  console.log(responseData)

  if (response.ok)
  {
    console.log('logged in');
    const { email, token, refreshToken } = responseData;
    setToken(token);
    setRefreshToken(refreshToken);
    return NextResponse.json({ loggedIn: true, email }, { status: 200 });
  }

  const { error, code } = responseData;
  console.error(`Login Error: ${error} (Code: ${code})`);
  return NextResponse.json({ loggedIn: false, error, code }, { status: code || 400 });
  // return NextResponse.json({ loggedIn: false, ...responseData }, { status: code || 400 });
}
