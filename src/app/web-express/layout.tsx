import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseño Web Profesional desde 499€ · Entrega en 7 días | Aether Labs',
  description:
    'Tu web profesional lista en 7 días desde 499€. Diseñada con IA, adaptada a móvil y dada de alta en Google. Para autónomos y pequeñas empresas. Sin complicaciones.',
  alternates: { canonical: 'https://aetherlabs.es/web-express' },
  keywords: [
    'diseño web barato',
    'web profesional barata',
    'crear web empresa barata',
    'presupuesto diseño web',
    'web en 7 días',
    'diseño web con inteligencia artificial',
    'agencia diseño web pequeña empresa',
    'web para autónomos barata',
    'landing page barata',
    'hacer web en una semana',
    'web 499 euros',
  ],
  openGraph: {
    title: 'Tu web profesional en 7 días · 499€ | Aether Labs',
    description:
      'Web profesional con IA. Entrega en 7 días. Para autónomos y pequeñas empresas. Desde 499€.',
    url: 'https://aetherlabs.es/web-express',
    siteName: 'Aether Labs',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tu web profesional en 7 días · 499€ | Aether Labs',
    description:
      'Web profesional con IA. Entrega en 7 días. Desde 499€.',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Express — Diseño web profesional en 7 días',
  description:
    'Servicio de diseño web profesional con IA, entrega en 7 días desde 499€. Incluye diseño personalizado, hasta 5 páginas, responsive, SEO y formulario de contacto.',
  provider: {
    '@type': 'Organization',
    name: 'Aether Labs',
    url: 'https://aetherlabs.es',
  },
  areaServed: { '@type': 'Country', name: 'España' },
  offers: {
    '@type': 'Offer',
    price: '499',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: 'https://aetherlabs.es/web-express',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta una página web profesional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nuestra Web Express parte de 499€ con entrega en 7 días, diseñada con IA, responsive, optimizada para Google y con formulario de contacto. Para necesidades más complejas (ecommerce, integraciones avanzadas) damos presupuesto cerrado tras una llamada de 20 minutos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye exactamente la web de 499€?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diseño personalizado (no plantilla genérica), hasta 5 páginas (Home, Servicios, Sobre nosotros, Contacto, una extra), responsive móvil, velocidad optimizada, alta en Google Search Console y Analytics, formulario de contacto, entrega en 7 días y 1 mes de soporte incluido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es posible hacer una web en 7 días?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Usamos IA en cada paso del proceso: copywriting con Claude, diseño y desarrollo con Antigravity y Claude Code, assets con generadores de imagen. Lo que antes tardaba 2 meses ahora tarda 1 semana sin sacrificar calidad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Quién escribe los textos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nosotros. Generamos borradores con IA basados en tu brief inicial, los revisamos manualmente y los optimizamos para SEO. Tú solo validas el tono y el mensaje final.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El dominio y el hosting están incluidos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El dominio (~12€/año) y el hosting (~5-15€/mes según plan) los pagas tú directamente para que sean 100% tuyos desde el día 1. Te guiamos en la compra y configuración.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo editar la web después yo solo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Te entregamos acceso completo al panel de edición y una sesión de formación grabada para que puedas hacer cambios básicos sin depender de nadie.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si quiero un ecommerce o más páginas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El pack de 499€ cubre webs de presentación con hasta 5 páginas. Para ecommerce, blogs avanzados o integraciones específicas damos presupuesto aparte tras una llamada de 20 minutos. Sin sorpresas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para quién es esta web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para autónomos, pequeñas empresas, restaurantes, clínicas, despachos y cualquier negocio que necesite presencia digital profesional sin pagar 3.000€ ni esperar 3 meses.',
      },
    },
  ],
};

export default function WebExpressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
