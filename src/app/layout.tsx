import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SALVIA — Outbound B2B como socio',
  description: 'Sistema de Automatización de Leads y Ventas con Inteligencia Artificial. Encontramos a tu comprador, escribimos, contactamos y cualificamos. Tú solo cierras.',
  openGraph: {
    title: 'SALVIA — Outbound B2B como socio',
    description: 'Pipeline predecible sin SDRs, sin listas compradas, sin plantillas robóticas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
