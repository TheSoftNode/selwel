import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts';
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProviders from "@/components/Theme/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProviders>
          <ToastContainer
            theme="light"
            position='top-center'
            autoClose={4000}
            closeOnClick={true}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            toastClassName=".toast-message"
          />
          <Header />
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
