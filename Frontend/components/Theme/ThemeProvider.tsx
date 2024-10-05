"use client";

import React, { FC } from "react";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

const ThemeProviders: FC<Props> = ({ children }) =>
{
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
