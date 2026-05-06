'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  X,
  ChevronDown,
  ArrowRight,
  Zap,
  Smartphone,
  Search,
  FileText,
  Globe,
  ShieldCheck,
  Briefcase,
  Utensils,
  Stethoscope,
  Store,
  Calendar,
  Sparkles,
  Lock,
} from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const ACCENT = '#0891B2';

export default function WebExpressPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      q: '¿Cuánto cuesta una página web profesional?',
      a: 'Nuestra Web Express parte de 499€ con entrega en 7 días, diseñada con IA, responsive, optimizada para Google y con formulario de contacto. Para necesidades más complejas (ecommerce, integraciones avanzadas) damos presupuesto cerrado tras una llamada de 20 minutos.',
    },
    {
      q: '¿Qué incluye exactamente la web de 499€?',
      a: 'Diseño personalizado (no plantilla genérica), hasta 5 páginas (Home, Servicios, Sobre nosotros, Contacto, una extra), responsive móvil, velocidad optimizada, alta en Google Search Console y Analytics, formulario de contacto, entrega en 7 días y 1 mes de soporte incluido.',
    },
    {
      q: '¿Es realmente posible hacer una web en 7 días?',
      a: 'Sí. Usamos IA en cada paso del proceso: copywriting con Claude, diseño y desarrollo con Antigravity y Claude Code, assets visuales con generadores de imagen. Lo que antes tardaba 2 meses ahora tarda 1 semana sin sacrificar calidad.',
    },
    {
      q: '¿Quién escribe los textos de la web?',
      a: 'Nosotros. Generamos borradores con IA basados en tu brief inicial, los revisamos manualmente y los optimizamos para SEO. Tú solo validas el tono y el mensaje final. No tienes que mandar textos hechos.',
    },
    {
      q: '¿Están incluidos el dominio y el hosting?',
      a: 'No. El dominio (~12€/año) y el hosting (~5-15€/mes según plan) los pagas tú directamente para que sean 100% tuyos desde el día 1. Te guiamos en la compra y configuración para que no te equivoques.',
    },
    {
      q: '¿Puedo editar la web después yo solo?',
      a: 'Sí. Te entregamos acceso completo al panel de edición y una sesión de formación grabada para que puedas hacer cambios básicos (textos, imágenes, precios) sin depender de nadie.',
    },
    {
      q: '¿Qué pasa si quiero un ecommerce o más páginas?',
      a: 'El pack de 499€ cubre webs de presentación con hasta 5 páginas. Para ecommerce, blogs con muchas categorías o integraciones específicas damos presupuesto aparte tras una llamada de 20 minutos. Sin sorpresas.',
    },
    {
      q: '¿Y si no me gusta el resultado?',
      a: 'Antes de desarrollar te presentamos una propuesta visual (paleta, tipografía, mood) para validar dirección. Durante el desarrollo tienes acceso en tiempo real. Y al final hay una ronda de revisión de 3 días para ajustes incluida en el precio.',
    },
  ];

  const includes = [
    { icon: <Sparkles size={20} style={{ color: ACCENT }} />, text: 'Diseño 100% personalizado, no plantilla genérica' },
    { icon: <FileText size={20} style={{ color: ACCENT }} />, text: 'Hasta 5 páginas (Home, Servicios, Nosotros, Contacto + 1)' },
    { icon: <Smartphone size={20} style={{ color: ACCENT }} />, text: 'Adaptada a móvil, tablet y escritorio' },
    { icon: <Zap size={20} style={{ color: ACCENT }} />, text: 'Velocidad optimizada (carga en menos de 2 seg)' },
    { icon: <Search size={20} style={{ color: ACCENT }} />, text: 'Alta en Google Search Console y Analytics' },
    { icon: <FileText size={20} style={{ color: ACCENT }} />, text: 'Copy escrito por nosotros con IA y revisión humana' },
    { icon: <Globe size={20} style={{ color: ACCENT }} />, text: 'Formulario de contacto conectado a tu email' },
    { icon: <ShieldCheck size={20} style={{ color: ACCENT }} />, text: '1 mes de soporte técnico incluido' },
  ];

  const notIncluded = [
    'Tienda online con catálogo de productos (presupuesto aparte)',
    'Dominio (~12€/año) y hosting (~5-15€/mes), los pagas tú',
    'Reservas online o sistemas de booking complejos',
    'Apps móviles nativas',
  ];

  const process = [
    { day: 'DÍA 1', title: 'Brief y dirección visual', desc: 'Rellenas un brief de 20 preguntas. Te enviamos 2 propuestas visuales (paleta, tipografía, mood) y eliges una.' },
    { day: 'DÍA 2-3', title: 'Estructura y copy', desc: 'Diseñamos la estructura de cada página y escribimos el copy con IA + revisión humana. Tú validas tono y mensaje.' },
    { day: 'DÍA 4-5', title: 'Diseño y desarrollo', desc: 'Construimos la web completa. Tienes acceso en tiempo real para ver avances y dar feedback en cualquier momento.' },
    { day: 'DÍA 6', title: 'Revisión y ajustes', desc: 'Una ronda de revisión completa: textos, imágenes, detalles. Aplicamos los cambios que pidas.' },
    { day: 'DÍA 7', title: 'Lanzamiento', desc: 'Configuramos dominio, hosting, Analytics y Search Console. Te damos las llaves y una sesión de formación grabada.' },
  ];

  const sectors = [
    { icon: <Briefcase size={22} style={{ color: ACCENT }} />, title: 'Autónomos y freelance', desc: 'Una web profesional que te separe del resto y te traiga clientes nuevos sin invertir miles de euros.' },
    { icon: <Utensils size={22} style={{ color: ACCENT }} />, title: 'Restaurantes y bares', desc: 'Carta, horarios, reservas por contacto, ubicación. Todo claro para que el cliente no llame antes de venir.' },
    { icon: <Stethoscope size={22} style={{ color: ACCENT }} />, title: 'Clínicas y consultas', desc: 'Especialidades, precios, equipo, formulario de contacto. Web seria que genere confianza desde el primer clic.' },
    { icon: <Store size={22} style={{ color: ACCENT }} />, title: 'Tiendas locales', desc: 'Catálogo de presentación, ubicación, productos destacados. Sin pasar a ecommerce si no lo necesitas todavía.' },
  ];

  return (
    <main style={{ minHeight: '100vh' }}>
      <ScrollAnimations />
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section
        className="v5-section"
        style={{ paddingTop: 160, paddingBottom: 100, backgroundColor: '#080808', color: '#F5F5F0' }}
      >
        <div className="v5-container" style={{ textAlign: 'center' }}>
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color: ACCENT,
              display: 'block',
              marginBottom: 24,
            }}
          >
            WEB EXPRESS · 499€
          </span>
          <h1
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-advercase)',
              fontSize: 'clamp(40px, 7vw, 88px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#F5F5F0',
              maxWidth: 900,
              margin: '0 auto 32px',
            }}
          >
            Tu web profesional en 7 días. Desde 499€.
          </h1>
          <p
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 19,
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(245,245,240,0.6)',
              maxWidth: 640,
              margin: '0 auto 40px',
            }}
          >
            Diseñada con IA. Sin esperas. Sin complicaciones.
            Para autónomos y pequeñas empresas que necesitan estar online ya.
          </p>
          <div className="flex justify-center gap-4 flex-wrap v5-reveal">
            <Link
              href="/contacto?service=web-express"
              style={{
                padding: '16px 32px',
                backgroundColor: '#F5F5F0',
                color: '#080808',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Solicita tu web gratis <ArrowRight style={{ display: 'inline', width: 16, height: 16, marginLeft: 4, verticalAlign: 'middle' }} />
            </Link>
            <a
              href="https://wa.me/34627281459?text=Hola,%20me%20interesa%20la%20Web%20Express%20de%20499€"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: '#F5F5F0',
                border: '1px solid rgba(245,245,240,0.2)',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Habla con nosotros
            </a>
          </div>

          {/* Pequeña fila de pruebas */}
          <div
            className="v5-reveal"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 32,
              marginTop: 56,
              flexWrap: 'wrap',
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: 'rgba(245,245,240,0.35)',
            }}
          >
            <span>✓ Entrega en 7 días</span>
            <span>✓ Sin permanencia</span>
            <span>✓ Soporte 1 mes</span>
            <span>✓ 100% tuya</span>
          </div>
        </div>
      </section>

      {/* ===================== QUÉ INCLUYE ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#FFFFFF', color: '#111111' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: ACCENT,
                display: 'block',
                marginBottom: 16,
              }}
            >
              QUÉ INCLUYE TU WEB
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#111111',
                maxWidth: 720,
              }}
            >
              Todo lo que entra en los 499€.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="v5-reveal">
              <h3
                style={{
                  fontFamily: 'var(--v5-font-advercase)',
                  fontSize: 22,
                  fontWeight: 400,
                  color: '#111111',
                  marginBottom: 24,
                }}
              >
                Lo que sí incluye
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{
                      padding: '14px 0',
                      borderBottom: i < includes.length - 1 ? '1px solid #E8E8E5' : 'none',
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 15,
                        fontWeight: 300,
                        lineHeight: 1.5,
                        color: '#333333',
                      }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="v5-reveal" style={{ transitionDelay: '80ms' }}>
              <h3
                style={{
                  fontFamily: 'var(--v5-font-advercase)',
                  fontSize: 22,
                  fontWeight: 400,
                  color: '#111111',
                  marginBottom: 24,
                }}
              >
                Lo que NO incluye
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
                {notIncluded.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{
                      padding: '14px 0',
                      borderBottom: i < notIncluded.length - 1 ? '1px solid #E8E8E5' : 'none',
                    }}
                  >
                    <X size={18} style={{ color: '#CCCCCC', flexShrink: 0, marginTop: 2 }} />
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 15,
                        fontWeight: 300,
                        lineHeight: 1.5,
                        color: '#888888',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  padding: 20,
                  backgroundColor: '#F8F8F5',
                  border: '1px solid #E8E8E5',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#555555',
                }}
              >
                <strong style={{ color: '#111111' }}>¿Necesitas algo de esto?</strong> Te damos presupuesto aparte tras una llamada de 20 min. Sin sorpresas, sin letra pequeña.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CÓMO FUNCIONA ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#080808', color: '#F5F5F0' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: ACCENT,
                display: 'block',
                marginBottom: 16,
              }}
            >
              CÓMO FUNCIONA
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#F5F5F0',
                maxWidth: 720,
              }}
            >
              7 días. Día por día.
            </h2>
          </div>

          <div style={{ maxWidth: 800 }}>
            {process.map((step, i) => (
              <div
                key={i}
                className="v5-reveal flex gap-8"
                style={{
                  padding: '28px 0',
                  borderBottom: i < process.length - 1 ? '1px solid rgba(245,245,240,0.08)' : 'none',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--v5-font-mono)',
                    fontSize: 12,
                    fontWeight: 600,
                    color: ACCENT,
                    letterSpacing: '0.1em',
                    minWidth: 90,
                    paddingTop: 4,
                  }}
                >
                  {step.day}
                </span>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-advercase)',
                      fontSize: 22,
                      fontWeight: 400,
                      color: '#F5F5F0',
                      marginBottom: 8,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: 'rgba(245,245,240,0.55)',
                      maxWidth: 600,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PARA QUIÉN ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#F8F8F5', color: '#111111' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: ACCENT,
                display: 'block',
                marginBottom: 16,
              }}
            >
              PARA QUIÉN ES
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#111111',
                maxWidth: 720,
              }}
            >
              Pensada para negocios reales.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  padding: 28,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E8E5',
                  borderRadius: 12,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <div style={{ marginBottom: 16 }}>{s.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--v5-font-advercase)',
                    fontSize: 18,
                    fontWeight: 400,
                    color: '#111111',
                    marginBottom: 10,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#666666',
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== POR QUÉ NOSOTROS ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#080808', color: '#F5F5F0' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: ACCENT,
                display: 'block',
                marginBottom: 16,
              }}
            >
              POR QUÉ TAN RÁPIDO Y TAN BARATO
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#F5F5F0',
                maxWidth: 720,
                marginBottom: 24,
              }}
            >
              Porque usamos IA en serio.
            </h2>
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(245,245,240,0.6)',
                maxWidth: 700,
              }}
            >
              No somos una agencia tradicional con 6 personas cobrando una hora cada una.
              Somos un equipo pequeño que domina las herramientas de IA: Claude para copy,
              Antigravity y Claude Code para desarrollo, generadores de imagen para los visuales.
              Lo que antes tardaba 6 semanas, ahora tarda 7 días. Y lo trasladamos al precio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '7 días', label: 'Entrega garantizada' },
              { value: '499€', label: 'Precio cerrado, sin sorpresas' },
              { value: '100%', label: 'Tuya: dominio, código, accesos' },
            ].map((stat, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  textAlign: 'center',
                  padding: '40px 24px',
                  border: '1px solid rgba(245,245,240,0.08)',
                  borderRadius: 12,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--v5-font-advercase)',
                    fontSize: 44,
                    fontWeight: 400,
                    color: ACCENT,
                    marginBottom: 8,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--v5-font-body)',
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'rgba(245,245,240,0.5)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TIENE SENTIDO / NO TIENE SENTIDO ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#FFFFFF', color: '#111111' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: ACCENT,
                display: 'block',
                marginBottom: 16,
              }}
            >
              ANTES DE EMPEZAR
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#111111',
                maxWidth: 720,
              }}
            >
              Para que no perdamos el tiempo.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="v5-reveal">
              <h3
                style={{
                  fontFamily: 'var(--v5-font-advercase)',
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#111111',
                  marginBottom: 20,
                }}
              >
                Tiene sentido si...
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Necesitas una web profesional sin gastar 3.000€.',
                  'Quieres lanzar ya, no en 3 meses.',
                  'Eres autónomo, pyme, restaurante, clínica o despacho.',
                  'Tu web actual tiene más de 3 años o no tienes web.',
                  'Quieres aparecer en Google y recibir contactos por web.',
                  'Valoras la velocidad y la claridad por encima del "diseño artístico".',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3"
                    style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #E8E8E5',
                    }}
                  >
                    <Check size={18} style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }} />
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 15,
                        fontWeight: 300,
                        lineHeight: 1.6,
                        color: '#444444',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="v5-reveal" style={{ transitionDelay: '80ms' }}>
              <h3
                style={{
                  fontFamily: 'var(--v5-font-advercase)',
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#111111',
                  marginBottom: 20,
                }}
              >
                NO tiene sentido si...
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Buscas una web de 100€ en Fiverr. No es nuestro juego.',
                  'Necesitas un ecommerce con 500 productos y stock real.',
                  'Quieres una app móvil nativa o sistema de reservas complejo.',
                  'No tienes claro qué vendes ni a quién. Primero estrategia.',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3"
                    style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #E8E8E5',
                    }}
                  >
                    <X size={18} style={{ color: '#CCCCCC', flexShrink: 0, marginTop: 2 }} />
                    <span
                      style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontSize: 15,
                        fontWeight: 300,
                        lineHeight: 1.6,
                        color: '#888888',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="v5-section" style={{ backgroundColor: '#F8F8F5', color: '#111111' }}>
        <div className="v5-container">
          <div className="v5-reveal" style={{ marginBottom: 56 }}>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: ACCENT,
                display: 'block',
                marginBottom: 16,
              }}
            >
              PREGUNTAS FRECUENTES
            </span>
            <h2
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#111111',
                maxWidth: 720,
              }}
            >
              Lo que nos preguntan siempre.
            </h2>
          </div>

          <div style={{ maxWidth: 800 }}>
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="v5-reveal"
                style={{
                  borderBottom: '1px solid #E8E8E5',
                  transitionDelay: `${i * 30}ms`,
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full"
                  style={{
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: 17,
                      fontWeight: 500,
                      color: '#111111',
                      paddingRight: 16,
                    }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: '#999999',
                      flexShrink: 0,
                      transition: 'transform 200ms',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? 400 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 300ms ease',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#555555',
                      paddingBottom: 24,
                      maxWidth: 700,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section
        className="v5-section"
        style={{
          backgroundColor: '#080808',
          color: '#F5F5F0',
          textAlign: 'center',
        }}
      >
        <div className="v5-container">
          <span
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color: ACCENT,
              display: 'block',
              marginBottom: 24,
            }}
          >
            EMPIEZA HOY
          </span>
          <h2
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-advercase)',
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#F5F5F0',
              maxWidth: 800,
              margin: '0 auto 24px',
            }}
          >
            En 7 días puedes tener web. O seguir igual.
          </h2>
          <p
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(245,245,240,0.55)',
              maxWidth: 560,
              margin: '0 auto 40px',
            }}
          >
            Cuéntanos qué necesitas en 2 minutos.
            Te respondemos en menos de 24 horas con propuesta y plazo cerrado.
          </p>
          <div className="flex justify-center gap-4 flex-wrap v5-reveal">
            <Link
              href="/contacto?service=web-express"
              style={{
                padding: '16px 32px',
                backgroundColor: '#F5F5F0',
                color: '#080808',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Solicita tu web gratis <ArrowRight style={{ display: 'inline', width: 16, height: 16, marginLeft: 4, verticalAlign: 'middle' }} />
            </Link>
            <a
              href="https://wa.me/34627281459?text=Hola,%20me%20interesa%20la%20Web%20Express%20de%20499€"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: '#F5F5F0',
                border: '1px solid rgba(245,245,240,0.2)',
                fontFamily: 'var(--v5-font-body)',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              WhatsApp directo
            </a>
          </div>

          <p
            className="v5-reveal"
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              color: 'rgba(245,245,240,0.3)',
              marginTop: 32,
              textTransform: 'uppercase' as const,
            }}
          >
            Primera conversación: sin coste · Sin compromiso
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
