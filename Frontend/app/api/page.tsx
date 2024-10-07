"use server";

import { FC } from 'react';

interface PageProps
{
    params: Record<string, string>;
    searchParams: Record<string, string>;
}

const Page: FC<PageProps> = ({ params, searchParams }) =>
{
    return <h1>Api</h1>;
};

export default Page;
