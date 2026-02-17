import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PasswordsProvider } from "../app/context/PasswordsContext";
import { Toaster } from "react-hot-toast";
import { Providers } from "./provider";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gestor de Contraseñas",
  description: "Gestor de contraseñas local seguro y rápido para guardar tus contraseñas",
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
    <html lang="es" suppressHydrationWarning>
      <body >
        <section className="ocultar-scroll bg-bg-light dark:bg-bg-dark text-gray-900 dark:text-gray-100">
          <Providers>
            <PasswordsProvider>
              <Navbar />
              {children}
              <Footer />
            </PasswordsProvider>
            <Toaster position='top-center' />
          </Providers>
        </section>

      </body>
    </html>
  );
}
