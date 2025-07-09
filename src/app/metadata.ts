import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Gestor de Contraseñas Local | Gestiona tus contraseñas de forma segura',
    template: '%s | Gestor de Contraseñas Local'
  },
  description: 'Gestiona tus contraseñas de forma segura y local. Generador de contraseñas fuertes y almacenamiento seguro.',
  keywords: 'gestor contraseñas, contraseñas seguras, generador contraseñas, seguridad, almacenamiento local',
  authors: [{ name: 'Gestor Local Team' }],
  creator: 'Gestor Local Team',
  publisher: 'Gestor Local',
  alternates: {
    canonical: 'https://gestor.local',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://gestor.local',
    title: 'Gestor de Contraseñas Local | Gestiona tus contraseñas de forma segura',
    description: 'Gestiona tus contraseñas de forma segura y local. Generador de contraseñas fuertes y almacenamiento seguro.',
    siteName: 'Gestor de Contraseñas Local',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gestor de Contraseñas Local',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestor de Contraseñas Local | Gestiona tus contraseñas de forma segura',
    description: 'Gestiona tus contraseñas de forma segura y local. Generador de contraseñas fuertes y almacenamiento seguro.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}
