import type { Metadata } from "next";
import "./globals.css";
import ThemeProviders from "@/components/Theme/ThemeProvider";
import Header from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "SelWel",
  description: "The Next Generation Trading Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body
      // className={`antialiased`}
      >
        <ThemeProviders>
          <Header />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
