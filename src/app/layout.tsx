import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "../app/context/ThemeContext";
import { PasswordsProvider } from "../app/context/PasswordsContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gestor de Contraseñas",
  description: "Gestor de contraseñas local",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="ocultar-scroll">
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
        <PasswordsProvider>
          {children}
        </PasswordsProvider>
        <Toaster position='top-center' />
        <Footer />
      </body>
    </html>
  );
}
