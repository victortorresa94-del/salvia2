'use client'

import { useState, useEffect, useRef } from 'react'

const DICT = {
  es: {
    nav_problema: 'Problema', nav_como: 'Cómo funciona', nav_planes: 'Planes',
    nav_stack: 'Stack', nav_faq: 'FAQ', nav_cta: 'Reservar llamada',
    eyebrow: 'Outbound B2B como socio · no como agencia',
    h1a: 'Vender debería', h1b: 'ser más', h1em: 'fácil',
    sub: 'Nosotros sembramos: encontramos a tu comprador, escribimos, contactamos y cualificamos. Tú cosechas: solo cierras la venta. Sin SDRs, sin listas compradas, sin plantillas robóticas.',
    cta_main: 'Reservar llamada', cta_sec: 'Ver cómo funciona',
    meta1: 'De onboarding a primeros leads en 72h', meta2: 'Plan sin coste hasta que cierres', meta3: 'HubSpot · Pipedrive · Attio · Salesforce',
    logos_lbl: 'Founders y equipos de ventas que ya cosechan con SALVIA',
    acr_tag: 'Qué es SALVIA',
    acr_h2a: 'Un sistema, no una herramienta.', acr_h2em: 'Operado por nosotros', acr_h2b: ', entregado llave en mano.',
    acr_sub: 'SALVIA significa Sistema de Automatización de Leads y Ventas con Inteligencia Artificial. Seis piezas que normalmente viven en seis herramientas distintas, unificadas en una sola operación que nosotros orquestamos por ti.',
    l_S: 'Sistema', l_S_ex: 'Infraestructura completa que sustituye a 6 herramientas y 2 contrataciones.',
    l_A1: 'Automatización', l_A1_ex: 'Nosotros operamos el motor 24/7. Tú no configuras, no mantienes, no debuggeas.',
    l_L: 'Leads', l_L_ex: 'Prospectos cualificados con poder de decisión y fit verificado, no contactos fríos.',
    l_V: 'Ventas', l_V_ex: 'Todo está optimizado para una sola métrica: venta cerrada, no reunión vanity.',
    l_I: 'Inteligencia', l_I_ex: 'Investigación de cuentas, copywriting contextual y cualificación —todo asistido.',
    l_A2: 'Artificial', l_A2_ex: 'Modelos propios fine-tuned para tono B2B europeo. Nunca suenan a bot.',
    flow_h: 'Todo el proceso de ventas, bajo un mismo techo',
    flow_sub: '7 fases · nosotros operamos 6 de 7',
    prob_tag: '01 · El problema',
    prob_h: 'Tu equipo no vende. Está buscando a quién vender.',
    prob_sub: 'El outbound B2B está roto. Quien lo sabe, lo sufre cada trimestre: pipeline irregular, equipo quemado, forecast imposible.',
    p1_h: 'SDRs caros que queman rápido', p1_p: '60.000€ al año por SDR, entre coste cargado y tooling. La mitad se va antes de los 14 meses. Y reemplazarlos tarda tres.',
    p2_h: 'Listas compradas que son basura', p2_p: 'Apollo, ZoomInfo, Lusha. Contactos desactualizados, hard bounces, CEOs que llevan 3 años fuera de la empresa. Quemas dominio y reputación.',
    p3_h: 'Secuencias con olor a plantilla', p3_p: '"Hola {first_name}, vi que {company} está creciendo…" Los compradores B2B las detectan en dos segundos y las archivan en uno.',
    p4_h: 'Pipeline impredecible', p4_p: 'Un mes 12 demos, el siguiente 2. El forecast es una plegaria. Las board calls duelen.',
    ac_tag: 'Con SALVIA', ac_h: 'Pipeline predecible, como un cultivo: lento los primeros días, inevitable después.',
    ac_p: 'Investigamos cada cuenta como un SDR senior —sus rondas, sus señales, sus cambios de equipo— y solo entonces abrimos la conversación. Uno a uno. Nunca a mil.',
    st1_v: '72h', st1_l: 'del onboarding al primer lead cualificado',
    st2_v: '3,2×', st2_l: 'más reuniones que un SDR in-house',
    st3_v: '0€', st3_l: 'hasta que cierres (plan B)',
    st4_v: '98%', st4_l: 'inbox rate — nunca spam folder',
    how_tag: '02 · Cómo funciona', how_h: 'Sembrar. Germinar. Cosechar.',
    how_sub: 'Tres pasos. Nosotros hacemos los dos primeros. Tú te sientas en el tercero. No automatizamos el spam — generamos conversaciones reales que terminan en una llamada.',
    s1_n: 'Paso 01 · Sembrar', s1_h: 'Definimos el terreno', s1_p: 'Kick-off de 45 minutos. Describes tu ICP en lenguaje normal. Montamos dominios, calentamos buzones, construimos la lista. Tú no tocas nada.',
    s2_n: 'Paso 02 · Germinar', s2_h: 'Investigamos y conversamos', s2_p: 'Cada email se escribe con señales reales: una ronda, un post del CEO, una vacante abierta. Respondemos las dudas, manejamos objeciones y cualificamos antes de pasar.',
    s3_n: 'Paso 03 · Cosechar', s3_h: 'Reuniones en tu calendario', s3_p: 'Solo te pasamos lo que ya dijo sí. Con brief pre-llamada: historia del lead, contexto de la empresa, tres preguntas clave. Tú cierras.',
    stack_tag: '03 · Stack', stack_h: 'Infraestructura de outbound, montada una vez, bien.', stack_sub: 'Lo que un equipo técnico tardaría seis meses en construir, y que sin mantenimiento se rompe en tres. Nosotros lo operamos por ti.',
    stack_card_h: 'Métricas del trimestre',
    pr_tag: '04 · Planes', pr_h: 'Tres formas de trabajar. Tú eliges el riesgo.', pr_sub: 'Pagas por lead entregado, por venta cerrada o por sistema instalado. Sin contratos de un año. Sin setups encubiertos.',
    q_tag: '05 · Clientes', q_h: 'Founders que ya dejaron de ser su propio SDR.',
    q1: '"Pasamos de 4 demos al mes a 19 en nueve semanas. Sin contratar a nadie. Lo único que cambió fue apagar Apollo y encender SALVIA."',
    q1_who: 'Marta Reyes', q1_co: 'CEO, Kova · Series A · €8M ARR',
    q2: '"Los emails no parecen de IA. Eso es todo. Mis clientes me responden pensando que los escribí yo, y eso ya casi no pasa en 2026."',
    q2_who: 'Diego Núñez', q2_co: 'Founder, Fernet AI',
    q3: '"Elegimos el plan de revenue share y nos ha salido carísimo. Exactamente porque está funcionando. Es el mejor problema que he tenido."',
    q3_who: 'Ana Soler', q3_co: 'CTO, Lienzo',
    faq_tag: '06 · Preguntas frecuentes', faq_h: 'Lo que todos los CEOs preguntan en la primera llamada.',
    fq1_q: '¿En qué se diferencia SALVIA de una agencia de SDR as a service?',
    fq1_a: 'Las agencias cobran por email enviado o por SDR asignado. Nosotros cobramos por resultado: lead entregado (A), venta cerrada (B) o sistema transferido (C). Además, nuestra infraestructura técnica —grafo de datos, deliverability, copywriting con contexto real— es producto propio, no un Apollo + Instantly reempaquetado.',
    fq2_q: '¿Qué es exactamente un "lead cualificado"?',
    fq2_a: 'Una persona con poder de decisión en tu ICP que ha respondido afirmativamente, que hemos cualificado por fit (tamaño, stack, dolor) y que ha aceptado una reunión contigo en tu calendario. Si no muestra el acepta, no facturamos.',
    fq3_q: '¿Cuándo veo los primeros leads?',
    fq3_a: 'De onboarding al primer lead: 72 horas. A volumen estable (pipeline predecible) normalmente entre la semana 3 y la 6, dependiendo de la complejidad del ICP y del warm-up de dominios.',
    fq4_q: '¿Sirve para tickets pequeños o solo enterprise?',
    fq4_a: 'Nuestro punto dulce está en tickets anuales entre 5.000€ y 150.000€. Por debajo, el outbound personalizado no compensa económicamente. Por encima, el ciclo de venta suele pedir ABM más quirúrgico.',
    fq5_q: '¿Usáis mi dominio o uno vuestro?',
    fq5_a: 'Siempre dominios secundarios nuestros, redireccionados a tu marca. Esto protege tu dominio principal de cualquier impacto de deliverability.',
    fq6_q: '¿GDPR, RGPD, DPA?',
    fq6_a: 'Sí a todo. Datos procesados en Frankfurt, DPA firmable, opt-out de un click en cada email, base legal de interés legítimo B2B documentada.',
    fq7_q: '¿Puedo cancelar cuando quiera?',
    fq7_a: 'Planes A y B: aviso de 30 días. Plan C: contrato mínimo trimestral por la inversión en setup. Sin penalizaciones ni letra pequeña.',
    cta_tag: '07 · Empieza', cta_h1: 'Siembra hoy.', cta_h2: 'Cosecha', cta_hem: 'este trimestre',
    cta_sub: '30 minutos. Te mostramos tu primera cohorte real con tu ICP real y te decimos si hay encaje. Sin presentación corporativa, sin pitch deck.',
    cta_btn1: 'Reservar llamada de 30 min', cta_btn2: 'Ver ejemplos de emails reales',
    ft_tagline: 'Sistema de Automatización de Leads y Ventas con Inteligencia Artificial. Construido entre Madrid, Barcelona y Lisboa.',
    ft_copy: '© 2026 SALVIA Labs, S.L.', ft_claim: 'Nosotros sembramos, tú cosechas.',
  },
  en: {
    nav_problema: 'Problem', nav_como: 'How it works', nav_planes: 'Pricing',
    nav_stack: 'Stack', nav_faq: 'FAQ', nav_cta: 'Book a call',
    eyebrow: 'B2B Outbound as a partner · not an agency',
    h1a: 'Selling should', h1b: 'be', h1em: 'easier',
    sub: 'We plant the seeds: find your buyer, write, reach out, and qualify. You harvest: just close the deal. No SDRs, no purchased lists, no robotic templates.',
    cta_main: 'Book a call', cta_sec: 'See how it works',
    meta1: 'Onboarding to first leads in 72h', meta2: 'Zero cost plan until you close', meta3: 'HubSpot · Pipedrive · Attio · Salesforce',
    logos_lbl: 'Founders and sales teams already harvesting with SALVIA',
    acr_tag: 'What is SALVIA',
    acr_h2a: 'A system, not a tool.', acr_h2em: 'Operated by us', acr_h2b: ', delivered turnkey.',
    acr_sub: 'SALVIA stands for Sales Automation and Lead Generation with Artificial Intelligence. Six components that normally live in six different tools, unified in a single operation we orchestrate for you.',
    l_S: 'System', l_S_ex: 'Complete infrastructure replacing 6 tools and 2 hires.',
    l_A1: 'Automation', l_A1_ex: "We run the engine 24/7. You don't configure, maintain, or debug anything.",
    l_L: 'Leads', l_L_ex: 'Qualified prospects with decision power and verified fit — not cold contacts.',
    l_V: 'Ventas', l_V_ex: 'Everything is optimized for one metric: closed deal, not vanity meeting.',
    l_I: 'Intelligence', l_I_ex: 'Account research, contextual copywriting, and qualification — all assisted.',
    l_A2: 'Artificial', l_A2_ex: "Proprietary models fine-tuned for European B2B tone. Never sounds like a bot.",
    flow_h: 'The entire sales process, under one roof',
    flow_sub: '7 stages · we operate 6 of 7',
    prob_tag: '01 · The problem',
    prob_h: "Your team isn't selling. It's looking for who to sell to.",
    prob_sub: "B2B outbound is broken. Those who know it, suffer it every quarter: irregular pipeline, burned-out team, impossible forecast.",
    p1_h: 'Expensive SDRs who burn out fast', p1_p: '€60k per year per SDR fully loaded. Half are gone before 14 months. Replacing them takes three more.',
    p2_h: 'Purchased lists that are garbage', p2_p: 'Apollo, ZoomInfo, Lusha. Stale contacts, hard bounces, CEOs who left 3 years ago. You burn domain and reputation.',
    p3_h: 'Sequences that smell like templates', p3_p: '"Hi {first_name}, I noticed {company} is growing…" B2B buyers spot them in two seconds and archive them in one.',
    p4_h: 'Unpredictable pipeline', p4_p: '12 demos one month, 2 the next. Forecasting is a prayer. Board calls hurt.',
    ac_tag: 'With SALVIA', ac_h: 'Predictable pipeline, like a crop: slow the first days, inevitable after.',
    ac_p: 'We research every account like a senior SDR — their rounds, their signals, their team changes — and only then open the conversation. One by one. Never a thousand at once.',
    st1_v: '72h', st1_l: 'from onboarding to first qualified lead',
    st2_v: '3.2×', st2_l: 'more meetings than an in-house SDR',
    st3_v: '€0', st3_l: 'until you close (plan B)',
    st4_v: '98%', st4_l: 'inbox rate — never spam folder',
    how_tag: '02 · How it works', how_h: 'Plant. Grow. Harvest.',
    how_sub: "Three steps. We do the first two. You sit in the third. We don't automate spam — we generate real conversations that end in a call.",
    s1_n: 'Step 01 · Plant', s1_h: 'We define the field', s1_p: '45-minute kick-off. You describe your ICP in plain language. We set up domains, warm up mailboxes, build the list. You touch nothing.',
    s2_n: 'Step 02 · Grow', s2_h: 'We research and converse', s2_p: 'Every email is written with real signals: a funding round, a CEO post, an open role. We handle questions, objections, and qualify before handing off.',
    s3_n: 'Step 03 · Harvest', s3_h: 'Meetings in your calendar', s3_p: 'We only pass you what already said yes. With a pre-call brief: lead background, company context, three key questions. You close.',
    stack_tag: '03 · Stack', stack_h: 'Outbound infrastructure, built once, built right.', stack_sub: 'What a technical team would take six months to build, and that breaks in three without maintenance. We operate it for you.',
    stack_card_h: 'Quarterly metrics',
    pr_tag: '04 · Pricing', pr_h: 'Three ways to work. You choose the risk.', pr_sub: 'Pay per delivered lead, per closed sale, or per installed system. No annual contracts. No hidden setups.',
    q_tag: '05 · Clients', q_h: 'Founders who stopped being their own SDR.',
    q1: '"We went from 4 demos a month to 19 in nine weeks. Without hiring anyone. The only thing that changed was turning off Apollo and turning on SALVIA."',
    q1_who: 'Marta Reyes', q1_co: 'CEO, Kova · Series A · €8M ARR',
    q2: '"The emails don\'t look like AI. That\'s it. My clients reply thinking I wrote them myself, and that barely happens anymore in 2026."',
    q2_who: 'Diego Núñez', q2_co: 'Founder, Fernet AI',
    q3: '"We picked the revenue share plan and it\'s been expensive. Exactly because it\'s working. Best problem I\'ve ever had."',
    q3_who: 'Ana Soler', q3_co: 'CTO, Lienzo',
    faq_tag: '06 · FAQ', faq_h: 'What every CEO asks on the first call.',
    fq1_q: 'How is SALVIA different from an SDR-as-a-service agency?',
    fq1_a: "Agencies charge per email sent or per SDR assigned. We charge per outcome: delivered lead (A), closed sale (B), or transferred system (C). Our technical infrastructure is proprietary, not a repackaged Apollo + Instantly.",
    fq2_q: 'What exactly is a "qualified lead"?',
    fq2_a: "A decision-maker within your ICP who has responded positively, whom we've qualified by fit (size, stack, pain), and who has accepted a meeting on your calendar. If they don't confirm, we don't invoice.",
    fq3_q: 'When do I see the first leads?',
    fq3_a: 'From onboarding to first lead: 72 hours. At stable volume usually between week 3 and 6 depending on ICP complexity and domain warm-up.',
    fq4_q: 'Does it work for small tickets or only enterprise?',
    fq4_a: "Our sweet spot is annual contracts between €5,000 and €150,000. Below that, personalized outbound doesn't make economic sense. We'll tell you on the call.",
    fq5_q: 'Do you use my domain or yours?',
    fq5_a: "Always our secondary domains, redirected to your brand. This protects your main domain from any deliverability impact.",
    fq6_q: 'GDPR, DPA?',
    fq6_a: 'Yes to all. Data processed in Frankfurt, signable DPA, one-click opt-out in every email, B2B legitimate interest legal basis documented.',
    fq7_q: 'Can I cancel anytime?',
    fq7_a: 'Plans A and B: 30-day notice. Plan C: minimum quarterly contract due to setup investment. No penalties, no fine print.',
    cta_tag: '07 · Start', cta_h1: 'Plant today.', cta_h2: 'Harvest', cta_hem: 'this quarter',
    cta_sub: "30 minutes. We show you your first real cohort with your real ICP and tell you if there's a fit. No corporate presentation, no pitch deck.",
    cta_btn1: 'Book a 30-min call', cta_btn2: 'See real email examples',
    ft_tagline: 'Sales Automation and Lead Generation with Artificial Intelligence. Built across Madrid, Barcelona, and Lisbon.',
    ft_copy: '© 2026 SALVIA Labs, S.L.', ft_claim: 'We plant, you harvest.',
  }
} as const

type Lang = 'es' | 'en'
type DictKey = keyof typeof DICT.es

function CheckIcon() {
  return (
    <svg style={{ width: 14, height: 14, color: 'var(--sv-accent)', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg className="sv-arrow" style={{ width: size, height: size }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, color: 'var(--sv-accent-deep)' }}>
      <path d="M12 21c-4-1-7-4-7-9 0-2 1-4 2-5 1 2 3 3 5 3 0 4-1 7 0 11z" fill="currentColor" fillOpacity=".15" />
      <path d="M12 21c-4-1-7-4-7-9 0-2 1-4 2-5 1 2 3 3 5 3 0 4-1 7 0 11z" />
      <path d="M12 21c4-1 7-4 7-9 0-2-1-4-2-5-1 2-3 3-5 3" />
    </svg>
  )
}

export default function SalviaPage() {
  const [dark, setDark] = useState(false)
  const [lang, setLang] = useState<Lang>('es')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  const t = (k: DictKey): string => (DICT[lang] as Record<string, string>)[k] || (DICT.es as Record<string, string>)[k] || k

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0
    const NODE_COUNT = 72
    const MAX_DIST = 140

    type NodeData = {
      x: number; y: number; vx: number; vy: number
      r: number; life: number; maxLife: number; age: number; pulse: number
    }

    function makeNode(init: boolean): NodeData {
      return {
        x: Math.random() * W,
        y: init ? Math.random() * H : H + 10,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.3 + 0.05),
        r: Math.random() * 2 + 1,
        life: Math.random() * 0.6 + 0.2,
        maxLife: 280 + Math.random() * 200,
        age: init ? Math.random() * 300 : 0,
        pulse: Math.random() * Math.PI * 2,
      }
    }

    let nodes: NodeData[] = []

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    function updateNode(n: NodeData): number {
      n.age++
      n.x += n.vx + Math.sin(n.age * 0.012 + n.pulse) * 0.18
      n.y += n.vy
      if (n.age > n.maxLife || n.y < -20) Object.assign(n, makeNode(false))
      return Math.min(1, n.age / 40) * Math.min(1, (n.maxLife - n.age) / 40)
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const rc = 74, gc = 124, bc = 89
      nodes.forEach(n => {
        const alpha = updateNode(n) * n.life
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rc},${gc},${bc},${alpha * 0.9})`
        ctx.fill()
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.12 * Math.min(a.life, b.life)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${rc},${gc},${bc},${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    nodes = Array.from({ length: NODE_COUNT }, () => makeNode(true))
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    .sv-root {
      --sv-bg: #FAFAF5;
      --sv-bg-alt: #F2F2EC;
      --sv-bg-warm: #EFEEE6;
      --sv-ink: #0D110E;
      --sv-ink-soft: #2A302C;
      --sv-muted: #6B6F68;
      --sv-line: #E5E4DB;
      --sv-line-strong: #CECEBF;
      --sv-accent: oklch(0.52 0.09 142);
      --sv-accent-deep: oklch(0.30 0.07 142);
      --sv-accent-pale: oklch(0.93 0.035 142);
      --sv-accent-ink: oklch(0.20 0.05 142);
      --sv-radius: 10px;
      --sv-radius-lg: 20px;
      --sv-max: 1240px;
      --sv-pad: 28px;
      font-family: 'Inter', system-ui, sans-serif;
      background: var(--sv-bg);
      color: var(--sv-ink);
      -webkit-font-smoothing: antialiased;
      letter-spacing: -0.005em;
      line-height: 1.5;
    }
    .sv-root.sv-dark {
      --sv-bg: #0A0D0A;
      --sv-bg-alt: #101410;
      --sv-bg-warm: #0E120F;
      --sv-ink: #F1F0EA;
      --sv-ink-soft: #CFCEC6;
      --sv-muted: #878C84;
      --sv-line: #1B1F1C;
      --sv-line-strong: #29302B;
      --sv-accent-pale: oklch(0.21 0.04 142);
      --sv-accent-ink: oklch(0.88 0.08 142);
    }
    .sv-root * { box-sizing: border-box; }
    .sv-display { font-family: 'Inter Tight', system-ui, sans-serif; letter-spacing: -0.034em; line-height: 0.96; font-weight: 500; }
    .sv-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11.5px; letter-spacing: 0.02em; text-transform: uppercase; }
    .sv-container { max-width: var(--sv-max); margin: 0 auto; padding: 0 var(--sv-pad); }
    .sv-container.narrow { max-width: 920px; }
    .sv-nav { position: sticky; top: 0; z-index: 50; background: color-mix(in oklab, var(--sv-bg) 90%, transparent); backdrop-filter: blur(10px); border-bottom: 1px solid var(--sv-line); }
    .sv-nav-inner { display: flex; align-items: center; justify-content: space-between; height: 66px; gap: 40px; }
    .sv-brand { display: flex; align-items: center; gap: 10px; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 17px; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; color: var(--sv-ink); }
    .sv-brand svg { color: var(--sv-accent-deep); }
    .sv-dark .sv-brand svg { color: var(--sv-accent-ink); }
    .sv-nav-links { display: flex; gap: 28px; font-size: 14px; color: var(--sv-ink-soft); }
    .sv-nav-links a { color: inherit; text-decoration: none; transition: color .15s; }
    .sv-nav-links a:hover { color: var(--sv-ink); }
    .sv-nav-cta { display: flex; gap: 10px; align-items: center; }
    .sv-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 999px; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid transparent; cursor: pointer; transition: transform .15s ease, background .15s, border-color .15s, color .15s; font-family: inherit; }
    .sv-btn:active { transform: translateY(1px); }
    .sv-btn-primary { background: var(--sv-ink); color: var(--sv-bg); }
    .sv-btn-primary:hover { background: var(--sv-accent-deep); color: #FAFAF5; }
    .sv-btn-ghost { color: var(--sv-ink); border-color: var(--sv-line-strong); background: transparent; }
    .sv-btn-ghost:hover { background: var(--sv-bg-alt); border-color: var(--sv-ink); }
    .sv-btn-lg { padding: 14px 22px; font-size: 15px; }
    .sv-btn .sv-arrow { transition: transform .15s; }
    .sv-btn:hover .sv-arrow { transform: translateX(3px); }
    .sv-icon-btn { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 999px; border: 1px solid var(--sv-line-strong); background: transparent; color: var(--sv-ink); cursor: pointer; font-family: 'Inter Tight', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; transition: background .15s, border-color .15s, color .15s; }
    .sv-icon-btn:hover { background: var(--sv-bg-alt); border-color: var(--sv-ink); }
    .sv-lang-btn { width: auto !important; padding: 0 12px; }
    .sv-hero { padding: 84px 0 56px; position: relative; overflow: hidden; }
    .sv-hero-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; opacity: .55; }
    .sv-dark .sv-hero-canvas { opacity: .35; }
    .sv-hero > .sv-container { position: relative; z-index: 1; }
    .sv-eyebrow { display: inline-flex; align-items: center; gap: 10px; padding: 6px 12px 6px 8px; border-radius: 999px; background: var(--sv-accent-pale); color: var(--sv-accent-ink); font-size: 12.5px; font-weight: 500; border: 1px solid color-mix(in oklab, var(--sv-accent) 30%, transparent); }
    .sv-eyebrow .sv-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sv-accent); box-shadow: 0 0 0 4px color-mix(in oklab, var(--sv-accent) 20%, transparent); flex-shrink: 0; }
    .sv-headline { font-size: clamp(48px, 7.8vw, 108px); margin: 24px 0 22px; max-width: 14ch; }
    .sv-headline em { font-style: normal; background: linear-gradient(100deg, var(--sv-accent-deep) 0%, var(--sv-accent) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .sv-dark .sv-headline em { background: linear-gradient(100deg, var(--sv-accent-ink) 0%, oklch(0.72 0.12 142) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .sv-sub { font-size: clamp(17px, 1.4vw, 20px); color: var(--sv-ink-soft); max-width: 54ch; line-height: 1.5; }
    .sv-hero-cta { display: flex; gap: 12px; align-items: center; margin-top: 36px; flex-wrap: wrap; }
    .sv-hero-meta { display: flex; gap: 22px; margin-top: 42px; color: var(--sv-muted); font-size: 13px; flex-wrap: wrap; }
    .sv-hero-meta span { display: inline-flex; align-items: center; gap: 7px; }
    .sv-hero-visual { margin-top: 68px; border: 1px solid var(--sv-line); border-radius: var(--sv-radius-lg); background: var(--sv-bg-alt); overflow: hidden; position: relative; }
    .sv-hv-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; border-bottom: 1px solid var(--sv-line); background: var(--sv-bg); }
    .sv-hv-dots { display: flex; gap: 6px; }
    .sv-hv-dots i { width: 9px; height: 9px; border-radius: 50%; background: var(--sv-line-strong); display: block; }
    .sv-hv-title { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--sv-muted); }
    .sv-hv-live { display: inline-flex; align-items: center; gap: 7px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--sv-accent-deep); }
    .sv-dark .sv-hv-live { color: var(--sv-accent-ink); }
    .sv-hv-live .sv-pulse { width: 7px; height: 7px; border-radius: 50%; background: var(--sv-accent); animation: sv-pulse 1.6s ease-in-out infinite; }
    @keyframes sv-pulse { 0%,100%{opacity:.4}50%{opacity:1} }
    .sv-hv-body { display: grid; grid-template-columns: 260px 1fr; min-height: 480px; }
    .sv-hv-side { border-right: 1px solid var(--sv-line); padding: 22px 16px; background: var(--sv-bg); }
    .sv-hv-side h4 { margin: 0 0 12px; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--sv-muted); font-weight: 500; }
    .sv-hv-item { display: flex; align-items: center; justify-content: space-between; padding: 9px 10px; border-radius: 8px; font-size: 13.5px; margin-bottom: 2px; }
    .sv-hv-item.active { background: var(--sv-accent-pale); color: var(--sv-accent-ink); }
    .sv-hv-item .sv-c { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--sv-muted); }
    .sv-hv-item.active .sv-c { color: var(--sv-accent-deep); }
    .sv-dark .sv-hv-item.active .sv-c { color: var(--sv-accent-ink); }
    .sv-hv-main { padding: 24px 28px; background: var(--sv-bg-alt); }
    .sv-hv-search { display: flex; align-items: center; gap: 10px; padding: 12px 14px; background: var(--sv-bg); border: 1px solid var(--sv-line); border-radius: 10px; font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--sv-ink-soft); }
    .sv-hv-search .sv-blink { width: 7px; height: 14px; background: var(--sv-accent); animation: sv-blink 1.1s steps(2,end) infinite; margin-left: auto; }
    @keyframes sv-blink { 50%{opacity:0} }
    .sv-hv-leads { margin-top: 18px; display: flex; flex-direction: column; gap: 1px; background: var(--sv-line); border: 1px solid var(--sv-line); border-radius: 10px; overflow: hidden; }
    .sv-lead-row { display: grid; grid-template-columns: 34px 1fr 130px 110px 90px; align-items: center; gap: 14px; padding: 13px 16px; background: var(--sv-bg); font-size: 13.5px; }
    .sv-lead-row.head { background: var(--sv-bg-alt); color: var(--sv-muted); font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; padding: 9px 16px; }
    .sv-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--sv-accent-pale); color: var(--sv-accent-deep); display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 12px; }
    .sv-dark .sv-avatar { color: var(--sv-accent-ink); }
    .sv-score { display: inline-flex; align-items: center; gap: 6px; font-family: 'JetBrains Mono', monospace; font-size: 12px; }
    .sv-score .sv-bar { width: 42px; height: 4px; background: var(--sv-line); border-radius: 2px; overflow: hidden; }
    .sv-score .sv-bar b { display: block; height: 100%; background: var(--sv-accent); border-radius: 2px; }
    .sv-pill { display: inline-block; padding: 3px 9px; border-radius: 999px; font-size: 11px; font-weight: 500; background: var(--sv-bg-alt); color: var(--sv-ink-soft); border: 1px solid var(--sv-line); }
    .sv-pill.warm { background: var(--sv-accent-pale); color: var(--sv-accent-deep); border-color: transparent; }
    .sv-pill.booked { background: var(--sv-ink); color: var(--sv-bg); border-color: var(--sv-ink); }
    .sv-dark .sv-pill.warm { color: var(--sv-accent-ink); }
    .sv-dark .sv-pill.booked { background: var(--sv-accent-deep); color: #F3F2EC; border-color: var(--sv-accent-deep); }
    .sv-logos { padding: 60px 0 40px; border-top: 1px solid var(--sv-line); margin-top: 84px; }
    .sv-logos .sv-lbl { color: var(--sv-muted); font-size: 12.5px; text-align: center; margin-bottom: 36px; letter-spacing: 0.02em; }
    .sv-logo-grid { display: grid; grid-template-columns: repeat(6,1fr); gap: 40px; align-items: center; opacity: .7; }
    .sv-logo-grid > div { height: 32px; display: flex; align-items: center; justify-content: center; color: var(--sv-ink-soft); font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 17px; letter-spacing: -0.01em; }
    .sv-acronym { --surface: #F1F0EA; --surface-soft: rgba(241,240,234,0.72); --surface-muted: rgba(241,240,234,0.50); padding: 120px 0; border-top: 1px solid var(--sv-line); background: var(--sv-ink); color: var(--surface); position: relative; overflow: hidden; }
    .sv-dark .sv-acronym { background: oklch(0.12 0.04 142); }
    .sv-acronym::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse 60% 80% at 90% 10%, color-mix(in oklab, var(--sv-accent) 25%, transparent), transparent 70%), radial-gradient(ellipse 50% 70% at 10% 90%, color-mix(in oklab, var(--sv-accent-deep) 40%, transparent), transparent 70%); opacity: .55; }
    .sv-acronym > .sv-container { position: relative; z-index: 1; }
    .sv-acronym .sv-sec-tag { color: oklch(0.75 0.1 142); }
    .sv-acronym .sv-sec-tag::before { background: oklch(0.75 0.1 142); }
    .sv-acronym h2.sv-sec-title { color: var(--surface); max-width: 22ch; }
    .sv-acronym h2.sv-sec-title em { font-style: normal; background: linear-gradient(100deg, oklch(0.72 0.12 142) 0%, oklch(0.82 0.1 142) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .sv-acronym .sv-sec-sub { color: var(--surface-soft); max-width: 62ch; }
    .sv-acronym-reveal { margin-top: 64px; display: grid; grid-template-columns: repeat(6, 1fr); gap: 14px; padding-bottom: 56px; border-bottom: 1px solid rgba(255,255,255,.12); }
    .sv-letter { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.10); border-radius: 16px; padding: 24px 22px; display: flex; flex-direction: column; gap: 12px; transition: border-color .25s, background .25s, transform .25s; }
    .sv-letter:hover { border-color: oklch(0.72 0.12 142); background: rgba(255,255,255,.09); transform: translateY(-2px); }
    .sv-letter .sv-big { font-family: 'Inter Tight', sans-serif; font-size: 72px; line-height: 0.9; font-weight: 500; letter-spacing: -0.04em; color: oklch(0.78 0.12 142); }
    .sv-letter .sv-word { font-family: 'Inter Tight', sans-serif; font-size: 16px; font-weight: 500; letter-spacing: -0.012em; color: var(--surface); margin-top: auto; }
    .sv-letter .sv-ex { font-size: 12.5px; color: var(--surface-muted); line-height: 1.45; }
    .sv-flow { margin-top: 64px; }
    .sv-flow-head { display: flex; justify-content: space-between; align-items: baseline; gap: 24px; margin-bottom: 28px; padding-bottom: 16px; border-bottom: 1px dashed rgba(255,255,255,.15); }
    .sv-flow-head h3 { font-family: 'Inter Tight', sans-serif; font-size: 22px; font-weight: 500; letter-spacing: -0.015em; margin: 0; color: var(--surface); }
    .sv-flow-head .sv-mono { color: var(--surface-muted); }
    .sv-flow-track { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0; position: relative; }
    .sv-flow-track::before { content: ""; position: absolute; left: 6%; right: 6%; top: 32px; height: 1px; background: repeating-linear-gradient(to right, color-mix(in oklab, var(--sv-accent) 50%, transparent) 0 6px, transparent 6px 12px); }
    .sv-flow-node { position: relative; padding: 0 10px; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
    .sv-flow-node .sv-dot { width: 14px; height: 14px; border-radius: 50%; background: var(--sv-accent); box-shadow: 0 0 0 6px color-mix(in oklab, var(--sv-accent) 20%, transparent), 0 0 0 1px rgba(255,255,255,.2); margin-left: 24px; margin-top: 26px; position: relative; z-index: 1; }
    .sv-flow-node.you .sv-dot { background: var(--surface); box-shadow: 0 0 0 6px rgba(241,240,234,.15), 0 0 0 1px rgba(255,255,255,.2); }
    .sv-flow-node .sv-owner { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: oklch(0.78 0.12 142); padding: 3px 8px; border-radius: 999px; border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.07); }
    .sv-flow-node.you .sv-owner { color: var(--surface); border-color: rgba(255,255,255,.25); background: rgba(255,255,255,.1); }
    .sv-flow-node h4 { margin: 2px 0 0; font-family: 'Inter Tight', sans-serif; font-size: 15px; font-weight: 500; letter-spacing: -0.012em; color: var(--surface); line-height: 1.2; }
    .sv-flow-node p { margin: 0; font-size: 12.5px; color: var(--surface-muted); line-height: 1.45; }
    .sv-flow-legend { display: flex; gap: 22px; margin-top: 36px; font-size: 12.5px; color: var(--surface-muted); flex-wrap: wrap; }
    .sv-flow-legend span { display: inline-flex; align-items: center; gap: 8px; }
    .sv-flow-legend .sv-sw { width: 10px; height: 10px; border-radius: 50%; }
    .sv-flow-legend .sv-sw.us { background: var(--sv-accent); }
    .sv-flow-legend .sv-sw.you { background: var(--surface); }
    .sv-block { padding: 120px 0; border-top: 1px solid var(--sv-line); }
    .sv-sec-tag { color: var(--sv-accent-deep); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; display: inline-flex; align-items: center; gap: 10px; }
    .sv-dark .sv-sec-tag { color: var(--sv-accent-ink); }
    .sv-sec-tag::before { content: ""; width: 18px; height: 1px; background: var(--sv-accent); }
    h2.sv-sec-title { font-size: clamp(38px,4.8vw,64px); margin: 18px 0 14px; max-width: 18ch; }
    .sv-sec-sub { color: var(--sv-ink-soft); font-size: 17px; max-width: 58ch; line-height: 1.55; }
    .sv-problem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; margin-top: 68px; align-items: start; }
    .sv-bf-row { display: grid; grid-template-columns: 28px 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid var(--sv-line); align-items: start; }
    .sv-bf-row:first-child { padding-top: 0; }
    .sv-bf-row:last-child { border-bottom: none; }
    .sv-bf-ic { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--sv-muted); background: var(--sv-bg-alt); }
    .sv-bf-row h4 { margin: 0 0 4px; font-size: 16px; font-weight: 600; color: var(--sv-ink); font-family: 'Inter Tight', sans-serif; letter-spacing: -0.01em; }
    .sv-bf-row p { margin: 0; font-size: 14.5px; color: var(--sv-muted); line-height: 1.5; }
    .sv-after-card { background: var(--sv-ink); color: var(--sv-bg); border-radius: var(--sv-radius-lg); padding: 48px 44px; position: relative; overflow: hidden; min-height: 460px; display: flex; flex-direction: column; }
    .sv-dark .sv-after-card { background: color-mix(in oklab, var(--sv-accent-deep) 70%, black); color: #F3F2EC; }
    .sv-after-card .sv-mono-tag { color: oklch(0.78 0.12 142); font-family: 'JetBrains Mono', monospace; font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; }
    .sv-after-card h3 { font-family: 'Inter Tight', sans-serif; font-size: 34px; margin: 16px 0 22px; letter-spacing: -0.025em; line-height: 1.05; font-weight: 500; }
    .sv-after-card > p { color: rgba(241,240,234,.78); font-size: 15px; line-height: 1.55; margin: 0; }
    .sv-stat-row { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: auto; padding-top: 32px; border-top: 1px solid rgba(255,255,255,.12); }
    .sv-stat b { font-family: 'Inter Tight', sans-serif; font-size: 42px; font-weight: 500; letter-spacing: -0.025em; display: block; color: oklch(0.78 0.12 142); }
    .sv-stat span { font-size: 13px; color: rgba(241,240,234,.65); display: block; margin-top: 4px; }
    .sv-leaf-deco { position: absolute; right: -40px; top: -40px; opacity: .1; width: 240px; height: 240px; }
    .sv-how-head { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; }
    .sv-steps { margin-top: 72px; display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
    .sv-step { background: var(--sv-bg); border: 1px solid var(--sv-line); border-radius: var(--sv-radius-lg); padding: 32px 30px; position: relative; transition: border-color .25s, transform .25s; }
    .sv-step:hover { border-color: var(--sv-accent); transform: translateY(-2px); }
    .sv-step-num { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--sv-accent-deep); display: flex; align-items: center; gap: 10px; margin-bottom: 28px; letter-spacing: 0.06em; }
    .sv-dark .sv-step-num { color: var(--sv-accent-ink); }
    .sv-step-num::after { content: ""; flex: 1; height: 1px; background: var(--sv-line); }
    .sv-step-ic { width: 48px; height: 48px; border-radius: 14px; background: var(--sv-accent-pale); display: flex; align-items: center; justify-content: center; color: var(--sv-accent-deep); margin-bottom: 22px; }
    .sv-dark .sv-step-ic { color: var(--sv-accent-ink); }
    .sv-step h3 { margin: 0 0 10px; font-family: 'Inter Tight', sans-serif; font-size: 23px; font-weight: 500; letter-spacing: -0.018em; line-height: 1.15; }
    .sv-step p { margin: 0; color: var(--sv-ink-soft); font-size: 14.5px; line-height: 1.55; }
    .sv-step-vis { margin-top: 24px; padding-top: 20px; border-top: 1px dashed var(--sv-line); font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--sv-muted); min-height: 90px; display: flex; flex-direction: column; gap: 7px; }
    .sv-step-vis .sv-line { display: flex; justify-content: space-between; gap: 12px; align-items: center; }
    .sv-step-vis .sv-line b { color: var(--sv-ink); font-weight: 500; }
    .sv-step-vis .sv-bar-viz { display: flex; gap: 3px; align-items: flex-end; height: 40px; margin-top: 4px; }
    .sv-step-vis .sv-bar-viz i { flex: 1; background: var(--sv-accent); border-radius: 2px 2px 0 0; opacity: .85; }
    .sv-hero-image { margin-top: 40px; border-radius: var(--sv-radius-lg); overflow: hidden; border: 1px solid var(--sv-line); aspect-ratio: 16/7; position: relative; background: var(--sv-bg-alt); }
    .sv-hero-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .sv-process-visual { margin-top: 56px; border: 1px solid var(--sv-line); border-radius: var(--sv-radius-lg); overflow: hidden; background: var(--sv-bg); }
    .sv-pv-head { display: flex; align-items: center; gap: 10px; padding: 14px 20px; border-bottom: 1px solid var(--sv-line); background: var(--sv-bg-alt); }
    .sv-pv-head span { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--sv-muted); }
    .sv-pv-body { display: grid; grid-template-columns: repeat(3,1fr); }
    .sv-pv-col { padding: 24px; border-right: 1px solid var(--sv-line); }
    .sv-pv-col:last-child { border-right: none; }
    .sv-pv-col .sv-tag { font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: var(--sv-muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px; }
    .sv-pv-col .sv-val { font-family: 'Inter Tight', sans-serif; font-size: 28px; font-weight: 500; letter-spacing: -0.02em; color: var(--sv-ink); margin-bottom: 6px; }
    .sv-pv-col .sv-sub2 { font-size: 13px; color: var(--sv-muted); margin-bottom: 16px; }
    .sv-pv-bar { height: 5px; background: var(--sv-line); border-radius: 3px; overflow: hidden; margin-bottom: 8px; }
    .sv-pv-bar b { display: block; height: 100%; background: var(--sv-accent); border-radius: 3px; }
    .sv-pv-rows { display: flex; flex-direction: column; gap: 7px; }
    .sv-pv-row { display: flex; justify-content: space-between; font-size: 12.5px; font-family: 'JetBrains Mono', monospace; color: var(--sv-muted); }
    .sv-pv-row b { color: var(--sv-ink); font-weight: 500; }
    .sv-stack { padding: 120px 0; border-top: 1px solid var(--sv-line); background: var(--sv-bg-alt); }
    .sv-stack-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; margin-top: 64px; align-items: start; }
    .sv-stack-list { display: flex; flex-direction: column; border-top: 1px solid var(--sv-line); }
    .sv-stack-item { display: grid; grid-template-columns: 110px 1fr auto; gap: 24px; align-items: center; padding: 20px 0; border-bottom: 1px solid var(--sv-line); }
    .sv-stack-item .sv-cat { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--sv-muted); letter-spacing: 0.06em; text-transform: uppercase; }
    .sv-stack-item .sv-name { font-family: 'Inter Tight', sans-serif; font-size: 17px; font-weight: 500; letter-spacing: -0.012em; }
    .sv-stack-item .sv-desc { font-size: 13.5px; color: var(--sv-muted); margin-top: 3px; }
    .sv-stack-item .sv-status { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--sv-accent-deep); display: inline-flex; align-items: center; gap: 6px; }
    .sv-dark .sv-stack-item .sv-status { color: var(--sv-accent-ink); }
    .sv-stack-item .sv-status::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--sv-accent); }
    .sv-stack-card { background: var(--sv-bg); border: 1px solid var(--sv-line); border-radius: var(--sv-radius-lg); padding: 36px; }
    .sv-stack-card h4 { margin: 0 0 20px; font-family: 'Inter Tight', sans-serif; font-size: 15px; font-weight: 600; letter-spacing: 0.02em; text-transform: uppercase; color: var(--sv-muted); }
    .sv-metric { display: grid; grid-template-columns: 1fr auto; gap: 16px; padding: 16px 0; border-bottom: 1px dashed var(--sv-line); align-items: baseline; }
    .sv-metric:last-child { border-bottom: none; }
    .sv-metric .sv-k { font-size: 14px; color: var(--sv-ink-soft); }
    .sv-metric .sv-v { font-family: 'Inter Tight', sans-serif; font-size: 22px; font-weight: 500; letter-spacing: -0.018em; color: var(--sv-ink); }
    .sv-metric .sv-v small { font-size: 12px; color: var(--sv-muted); font-weight: 400; font-family: 'Inter', sans-serif; margin-left: 4px; }
    .sv-pricing-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-top: 64px; }
    .sv-plan { border: 1px solid var(--sv-line); border-radius: var(--sv-radius-lg); padding: 36px 32px; background: var(--sv-bg); display: flex; flex-direction: column; position: relative; transition: border-color .2s; }
    .sv-plan:hover { border-color: var(--sv-line-strong); }
    .sv-plan.featured { background: var(--sv-ink); color: var(--sv-bg); border-color: var(--sv-ink); }
    .sv-dark .sv-plan.featured { background: color-mix(in oklab, var(--sv-accent-deep) 70%, black); border-color: var(--sv-accent-deep); color: #F3F2EC; }
    .sv-plan.featured .sv-plan-desc, .sv-plan.featured .sv-plan-bill, .sv-plan.featured .sv-price-suffix { color: color-mix(in oklab, var(--sv-bg) 72%, var(--sv-muted)); }
    .sv-plan.featured .sv-plan-feat { color: color-mix(in oklab, var(--sv-bg) 92%, var(--sv-muted)); }
    .sv-plan.featured .sv-plan-feat svg { color: color-mix(in oklab, var(--sv-accent) 60%, white); }
    .sv-plan-tag { position: absolute; top: -11px; left: 32px; background: var(--sv-accent); color: white; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; }
    .sv-plan-letter { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--sv-muted); letter-spacing: 0.1em; margin-bottom: 14px; }
    .sv-plan.featured .sv-plan-letter { color: color-mix(in oklab, var(--sv-bg) 72%, var(--sv-muted)); }
    .sv-plan-name { font-family: 'Inter Tight', sans-serif; font-size: 22px; font-weight: 500; letter-spacing: -0.018em; margin-bottom: 8px; }
    .sv-plan-desc { color: var(--sv-muted); font-size: 14px; margin-bottom: 26px; line-height: 1.5; min-height: 46px; }
    .sv-plan-price { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; font-family: 'Inter Tight', sans-serif; }
    .sv-plan-price b { font-size: 46px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; }
    .sv-price-suffix { color: var(--sv-muted); font-size: 14px; font-family: 'Inter', sans-serif; }
    .sv-plan-bill { color: var(--sv-muted); font-size: 13px; margin-bottom: 26px; min-height: 20px; }
    .sv-plan-cta { display: block; text-align: center; padding: 12px 16px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid var(--sv-line-strong); color: var(--sv-ink); margin-bottom: 28px; transition: background .15s, border-color .15s; }
    .sv-plan-cta:hover { background: var(--sv-bg-alt); border-color: var(--sv-ink); }
    .sv-plan.featured .sv-plan-cta { background: var(--sv-bg); color: var(--sv-ink); border-color: var(--sv-bg); }
    .sv-plan.featured .sv-plan-cta:hover { background: color-mix(in oklab, var(--sv-bg) 88%, var(--sv-accent)); }
    .sv-plan-features { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
    .sv-plan-feat { display: flex; gap: 10px; font-size: 14px; color: var(--sv-ink-soft); line-height: 1.45; align-items: flex-start; }
    .sv-plan-feat svg { width: 15px; height: 15px; color: var(--sv-accent); flex-shrink: 0; margin-top: 3px; }
    .sv-quote-section { padding: 120px 0; border-top: 1px solid var(--sv-line); }
    .sv-testi-photos { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-bottom: 56px; }
    .sv-testi-photo { border-radius: var(--sv-radius-lg); overflow: hidden; border: 1px solid var(--sv-line); background: var(--sv-bg-alt); aspect-ratio: 4/3; display: flex; align-items: flex-end; padding: 20px; position: relative; }
    .sv-testi-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .sv-testi-photo:not(:has(img))::before { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(-45deg,transparent,transparent 10px,color-mix(in oklab, var(--sv-line) 45%, transparent) 10px,color-mix(in oklab, var(--sv-line) 45%, transparent) 11px); opacity: .4; }
    .sv-testi-photo .sv-ph-tag { position: relative; z-index: 1; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: var(--sv-muted); letter-spacing: 0.06em; text-transform: uppercase; background: var(--sv-bg); border: 1px solid var(--sv-line); padding: 4px 10px; border-radius: 999px; }
    .sv-testi-photo img ~ .sv-ph-tag { background: rgba(10,13,10,0.6); color: #F1F0EA; border-color: rgba(255,255,255,.2); backdrop-filter: blur(4px); }
    .sv-quote-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; margin-top: 56px; }
    .sv-quote { border-left: 2px solid var(--sv-accent); padding: 4px 0 4px 24px; }
    .sv-quote p { font-family: 'Inter Tight', sans-serif; font-size: 19px; line-height: 1.4; letter-spacing: -0.012em; font-weight: 400; color: var(--sv-ink); margin: 0 0 22px; }
    .sv-quote .sv-who { display: flex; align-items: center; gap: 12px; }
    .sv-who .sv-avatar { width: 36px; height: 36px; font-size: 13px; flex-shrink: 0; }
    .sv-who b { display: block; font-size: 14px; font-weight: 600; font-family: 'Inter Tight', sans-serif; }
    .sv-who span { display: block; font-size: 13px; color: var(--sv-muted); }
    .sv-faq-grid { margin-top: 48px; display: flex; flex-direction: column; }
    .sv-faq { border-bottom: 1px solid var(--sv-line); padding: 22px 0; }
    .sv-faq:first-child { border-top: 1px solid var(--sv-line); }
    .sv-faq-summary { display: flex; align-items: center; justify-content: space-between; gap: 20px; font-family: 'Inter Tight', sans-serif; font-size: 18px; font-weight: 500; letter-spacing: -0.012em; color: var(--sv-ink); cursor: pointer; list-style: none; }
    .sv-faq-qmark { width: 22px; height: 22px; flex-shrink: 0; position: relative; color: var(--sv-muted); transition: transform .25s, color .2s; }
    .sv-faq-qmark::before, .sv-faq-qmark::after { content: ""; position: absolute; background: currentColor; left: 50%; top: 50%; transform: translate(-50%,-50%); }
    .sv-faq-qmark::before { width: 12px; height: 1.5px; }
    .sv-faq-qmark::after { width: 1.5px; height: 12px; transition: transform .25s; }
    .sv-faq-open .sv-faq-qmark { color: var(--sv-accent-deep); }
    .sv-dark .sv-faq-open .sv-faq-qmark { color: var(--sv-accent-ink); }
    .sv-faq-open .sv-faq-qmark::after { transform: translate(-50%,-50%) scaleY(0); }
    .sv-faq-answer { margin-top: 14px; font-size: 15px; color: var(--sv-ink-soft); line-height: 1.6; max-width: 72ch; padding-right: 40px; }
    .sv-cta-section { padding: 140px 0; border-top: 1px solid var(--sv-line); text-align: center; position: relative; overflow: hidden; background: var(--sv-bg-warm); }
    .sv-cta-section h2 { font-family: 'Inter Tight', sans-serif; font-size: clamp(48px,7vw,96px); margin: 20px auto 24px; max-width: 16ch; letter-spacing: -0.032em; line-height: 0.98; font-weight: 500; }
    .sv-cta-section h2 em { font-style: normal; background: linear-gradient(100deg, var(--sv-accent-deep) 0%, var(--sv-accent) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .sv-dark .sv-cta-section h2 em { background: linear-gradient(100deg, var(--sv-accent-ink) 0%, oklch(0.72 0.12 142) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .sv-cta-section .sv-sub { margin: 0 auto; text-align: center; }
    .sv-cta-section .sv-hero-cta { justify-content: center; }
    .sv-cta-deco { position: absolute; left: 50%; bottom: -120px; transform: translateX(-50%); width: 720px; height: 720px; opacity: .055; pointer-events: none; color: var(--sv-accent-deep); }
    .sv-dark .sv-cta-deco { color: var(--sv-accent-ink); opacity: .08; }
    .sv-cta-section > .sv-container { position: relative; z-index: 1; }
    footer.sv-footer { border-top: 1px solid var(--sv-line); padding: 56px 0 40px; }
    .sv-foot { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
    .sv-foot h5 { margin: 0 0 16px; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--sv-muted); font-weight: 500; }
    .sv-foot ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
    .sv-foot a { color: var(--sv-ink-soft); text-decoration: none; font-size: 14px; }
    .sv-foot a:hover { color: var(--sv-ink); }
    .sv-foot-brand p { color: var(--sv-muted); font-size: 13.5px; margin: 14px 0 0; max-width: 36ch; line-height: 1.5; }
    .sv-foot-bot { display: flex; justify-content: space-between; align-items: center; margin-top: 56px; padding-top: 28px; border-top: 1px solid var(--sv-line); font-size: 13px; color: var(--sv-muted); flex-wrap: wrap; gap: 12px; }
    @media (max-width: 900px) {
      .sv-nav-links { display: none; }
      .sv-hv-body { grid-template-columns: 1fr; }
      .sv-hv-side { display: none; }
      .sv-lead-row { grid-template-columns: 30px 1fr 80px; gap: 10px; }
      .sv-lead-row > :nth-child(4), .sv-lead-row > :nth-child(5) { display: none; }
      .sv-problem-grid, .sv-how-head, .sv-stack-grid { grid-template-columns: 1fr; gap: 40px; }
      .sv-steps, .sv-pricing-grid, .sv-quote-grid, .sv-foot { grid-template-columns: 1fr; }
      .sv-headline { font-size: 56px; }
      .sv-stack-item { grid-template-columns: 1fr auto; }
      .sv-stack-item .sv-cat { display: none; }
      .sv-acronym-reveal { grid-template-columns: repeat(2,1fr); }
      .sv-flow-track { grid-template-columns: 1fr; gap: 20px; }
      .sv-flow-track::before { display: none; }
      .sv-flow-node { padding-left: 0; }
      .sv-flow-node .sv-dot { margin-left: 0; }
      .sv-flow-head { flex-direction: column; align-items: flex-start; gap: 6px; }
      .sv-testi-photos { grid-template-columns: 1fr; }
      .sv-quote-grid { grid-template-columns: 1fr; }
      .sv-pv-body { grid-template-columns: 1fr; }
    }
  `

  const flowNodes = [
    { us: true, h: 'Definición de ICP', p: 'Kick-off de 45 min. Traducimos tu mercado a señales.' },
    { us: true, h: 'Construcción de lista', p: 'Grafo propio de 40+ fuentes. Verificación en vivo.' },
    { us: true, h: 'Investigación', p: '~8 señales por cuenta: rondas, stack, hiring, prensa.' },
    { us: true, h: 'Outreach & seguimiento', p: 'Emails escritos de cero. Multi-dominio, deliverability 98%.' },
    { us: true, h: 'Respuesta & cualificación', p: 'Humanos reales gestionan objeciones y filtran fit.' },
    { us: true, h: 'Booking & brief', p: 'Reunión agendada con contexto completo pre-llamada.' },
    { us: false, h: 'Cierre de venta', p: 'Te sientas en la llamada. Lo único que nunca externalizamos.' },
  ]

  const faqs: DictKey[] = ['fq1_q', 'fq2_q', 'fq3_q', 'fq4_q', 'fq5_q', 'fq6_q', 'fq7_q']
  const faqAnswers: DictKey[] = ['fq1_a', 'fq2_a', 'fq3_a', 'fq4_a', 'fq5_a', 'fq6_a', 'fq7_a']

  return (
    <>
      <style>{css}</style>
      <div className={`sv-root${dark ? ' sv-dark' : ''}`}>
        {/* NAV */}
        <nav className="sv-nav">
          <div className="sv-container sv-nav-inner">
            <a href="#" className="sv-brand">
              <LeafIcon />
              SALVIA
            </a>
            <div className="sv-nav-links">
              <a href="#problema">{t('nav_problema')}</a>
              <a href="#como">{t('nav_como')}</a>
              <a href="#planes">{t('nav_planes')}</a>
              <a href="#stack">{t('nav_stack')}</a>
              <a href="#faq">{t('nav_faq')}</a>
            </div>
            <div className="sv-nav-cta">
              <button className="sv-icon-btn sv-lang-btn" onClick={() => setLang(l => l === 'es' ? 'en' : 'es')}>
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <button className="sv-icon-btn" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
                {dark ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                )}
              </button>
              <a href="#cta" className="sv-btn sv-btn-primary">{t('nav_cta')} <ArrowIcon /></a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <header className="sv-hero">
          <canvas ref={canvasRef} className="sv-hero-canvas" aria-hidden="true" />
          <div className="sv-container">
            <span className="sv-eyebrow"><span className="sv-dot" />{t('eyebrow')}</span>
            <h1 className="sv-display sv-headline">
              {t('h1a')}<br />{t('h1b')} <em>{t('h1em')}</em>.
            </h1>
            <p className="sv-sub">{t('sub')}</p>
            <div className="sv-hero-cta">
              <a href="#cta" className="sv-btn sv-btn-primary sv-btn-lg">{t('cta_main')} <ArrowIcon size={15} /></a>
              <a href="#como" className="sv-btn sv-btn-ghost sv-btn-lg">{t('cta_sec')}</a>
            </div>
            <div className="sv-hero-meta">
              <span><CheckIcon /> {t('meta1')}</span>
              <span><CheckIcon /> {t('meta2')}</span>
              <span><CheckIcon /> {t('meta3')}</span>
            </div>

            {/* HERO VISUAL */}
            <div className="sv-hero-visual">
              <div className="sv-hv-head">
                <div className="sv-hv-dots"><i /><i /><i /></div>
                <div className="sv-hv-title">salvia · campo de cultivo</div>
                <div className="sv-hv-live"><span className="sv-pulse" /> {lang === 'es' ? 'sembrando' : 'planting'}</div>
              </div>
              <div className="sv-hv-body">
                <aside className="sv-hv-side">
                  <h4>Campañas activas</h4>
                  <div className="sv-hv-item active"><span>SaaS €5–30M ARR · EU</span><span className="sv-c">247</span></div>
                  <div className="sv-hv-item"><span>CTOs fintech</span><span className="sv-c">89</span></div>
                  <div className="sv-hv-item"><span>Founders serie A</span><span className="sv-c">142</span></div>
                  <div className="sv-hv-item"><span>Ops leaders LatAm</span><span className="sv-c">63</span></div>
                  <h4 style={{ marginTop: 24 }}>Estado del cultivo</h4>
                  <div className="sv-hv-item"><span>Sembrados</span><span className="sv-c">541</span></div>
                  <div className="sv-hv-item"><span>Germinando</span><span className="sv-c">218</span></div>
                  <div className="sv-hv-item"><span>Respondidos</span><span className="sv-c">47</span></div>
                  <div className="sv-hv-item"><span>Cosechados</span><span className="sv-c">12</span></div>
                </aside>
                <main className="sv-hv-main">
                  <div className="sv-hv-search">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    <span>CEOs de SaaS B2B en España &amp; Portugal, 10–50 empleados, ticket &gt;5k</span>
                    <span className="sv-blink" />
                  </div>
                  <div className="sv-hv-leads">
                    <div className="sv-lead-row head">
                      <span /><span>Lead</span><span>Empresa</span><span>Fit</span><span>Estado</span>
                    </div>
                    {[
                      { init: 'MR', name: 'Marta Reyes', role: 'CEO · marta@kova.io', co: 'Kova', score: 94, status: 'booked', label: 'Booked' },
                      { init: 'DN', name: 'Diego Núñez', role: 'Founder · diego@fernet.ai', co: 'Fernet AI', score: 88, status: 'warm', label: 'Respondió' },
                      { init: 'AS', name: 'Ana Soler', role: 'CTO · ana@lienzo.dev', co: 'Lienzo', score: 81, status: '', label: 'Germinando' },
                      { init: 'RP', name: 'Rafael Prat', role: 'COO · rafael@nido.co', co: 'Nido', score: 76, status: '', label: 'Sembrado' },
                      { init: 'EV', name: 'Elena Vidal', role: 'CEO · elena@junco.app', co: 'Junco', score: 72, status: '', label: 'Sembrado' },
                    ].map(row => (
                      <div key={row.init} className="sv-lead-row">
                        <span className="sv-avatar">{row.init}</span>
                        <div><b style={{ fontWeight: 500 }}>{row.name}</b><div style={{ color: 'var(--sv-muted)', fontSize: 12 }}>{row.role}</div></div>
                        <span>{row.co}</span>
                        <span className="sv-score">{row.score}<span className="sv-bar"><b style={{ width: `${row.score}%` }} /></span></span>
                        <span className={`sv-pill${row.status ? ' ' + row.status : ''}`}>{row.label}</span>
                      </div>
                    ))}
                  </div>
                </main>
              </div>
            </div>

            {/* LOGOS */}
            <div className="sv-logos">
              <div className="sv-lbl">{t('logos_lbl')}</div>
              <div className="sv-logo-grid">
                {['Kova', 'Fernet', 'Lienzo', 'Junco', 'Nido\u00a0Labs', 'Raíz'].map(n => <div key={n}>{n}</div>)}
              </div>
            </div>
          </div>
        </header>

        {/* ACRONYM BANNER */}
        <section className="sv-acronym" id="que-es">
          <div className="sv-container">
            <div className="sv-sec-tag">{t('acr_tag')}</div>
            <h2 className="sv-display sv-sec-title">{t('acr_h2a')} <em>{t('acr_h2em')}</em>{t('acr_h2b')}</h2>
            <p className="sv-sec-sub">{t('acr_sub')}</p>
            <div className="sv-acronym-reveal">
              {(['S', 'A', 'L', 'V', 'I', 'A'] as const).map((letter, i) => {
                const wordKeys: DictKey[] = ['l_S', 'l_A1', 'l_L', 'l_V', 'l_I', 'l_A2']
                const exKeys: DictKey[] = ['l_S_ex', 'l_A1_ex', 'l_L_ex', 'l_V_ex', 'l_I_ex', 'l_A2_ex']
                return (
                  <div key={i} className="sv-letter">
                    <div className="sv-big">{letter}</div>
                    <div className="sv-ex">{t(exKeys[i])}</div>
                    <div className="sv-word">{t(wordKeys[i])}</div>
                  </div>
                )
              })}
            </div>
            <div className="sv-flow">
              <div className="sv-flow-head">
                <h3>{t('flow_h')}</h3>
                <div className="sv-mono">{t('flow_sub')}</div>
              </div>
              <div className="sv-flow-track">
                {flowNodes.map((node, i) => (
                  <div key={i} className={`sv-flow-node${node.us ? ' us' : ' you'}`}>
                    <span className="sv-dot" />
                    <span className="sv-owner">{node.us ? (lang === 'es' ? 'Nosotros' : 'Us') : (lang === 'es' ? 'Tú' : 'You')}</span>
                    <h4>{node.h}</h4>
                    <p>{node.p}</p>
                  </div>
                ))}
              </div>
              <div className="sv-flow-legend">
                <span><span className="sv-sw us" /> {lang === 'es' ? 'Operado por SALVIA' : 'Operated by SALVIA'}</span>
                <span><span className="sv-sw you" /> {lang === 'es' ? 'Tu única responsabilidad' : 'Your only responsibility'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="sv-block" id="problema">
          <div className="sv-container">
            <div className="sv-sec-tag">{t('prob_tag')}</div>
            <h2 className="sv-display sv-sec-title">{t('prob_h')}</h2>
            <p className="sv-sec-sub">{t('prob_sub')}</p>
            <div className="sv-problem-grid">
              <div>
                {([
                  { hk: 'p1_h', pk: 'p1_p', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg> },
                  { hk: 'p2_h', pk: 'p2_p', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v6H4zM4 14h16v6H4z" /></svg> },
                  { hk: 'p3_h', pk: 'p3_p', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg> },
                  { hk: 'p4_h', pk: 'p4_p', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M5 20V4" /><path d="M19 20v-7" /></svg> },
                ] as { hk: DictKey; pk: DictKey; icon: React.ReactNode }[]).map(({ hk, pk, icon }) => (
                  <div key={hk} className="sv-bf-row">
                    <div className="sv-bf-ic">{icon}</div>
                    <div>
                      <h4>{t(hk)}</h4>
                      <p>{t(pk)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <aside className="sv-after-card">
                <svg className="sv-leaf-deco" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <path d="M100 180c-40-10-70-40-70-90 0-20 10-40 20-50 10 20 30 30 50 30 0 40-10 70 0 110z" fill="currentColor" fillOpacity=".5" />
                  <path d="M100 180c0-40 0-80 0-110" />
                  <path d="M100 110l-20-15M100 140l-25-10M100 90l-15-20" />
                </svg>
                <span className="sv-mono-tag">{t('ac_tag')}</span>
                <h3>{t('ac_h')}</h3>
                <p>{t('ac_p')}</p>
                <div className="sv-stat-row">
                  <div className="sv-stat"><b>{t('st1_v')}</b><span>{t('st1_l')}</span></div>
                  <div className="sv-stat"><b>{t('st2_v')}</b><span>{t('st2_l')}</span></div>
                  <div className="sv-stat"><b>{t('st3_v')}</b><span>{t('st3_l')}</span></div>
                  <div className="sv-stat"><b>{t('st4_v')}</b><span>{t('st4_l')}</span></div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="sv-block" id="como">
          <div className="sv-container">
            <div className="sv-how-head">
              <div>
                <div className="sv-sec-tag">{t('how_tag')}</div>
                <h2 className="sv-display sv-sec-title">{t('how_h')}</h2>
              </div>
              <p className="sv-sec-sub">{t('how_sub')}</p>
            </div>
            <div className="sv-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/salvia/hero-visual.jpg" alt="Campo sembrado — metáfora del proceso SALVIA" />
            </div>
            <div className="sv-steps">
              <div className="sv-step">
                <div className="sv-step-num">{t('s1_n')}</div>
                <div className="sv-step-ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20V8" /><path d="M12 8c0-4 3-6 6-6 0 4-2 6-6 6z" /><path d="M12 12c0-3-2-5-5-5 0 3 2 5 5 5z" />
                  </svg>
                </div>
                <h3>{t('s1_h')}</h3>
                <p>{t('s1_p')}</p>
                <div className="sv-step-vis">
                  <div className="sv-line"><span>Duración</span><b>72h setup</b></div>
                  <div className="sv-line"><span>Input que pedimos</span><b>Tu ICP, tu calendario</b></div>
                  <div className="sv-line"><span>Input que no pedimos</span><b>Tu tiempo</b></div>
                </div>
              </div>
              <div className="sv-step">
                <div className="sv-step-num">{t('s2_n')}</div>
                <div className="sv-step-ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20c4 0 8-3 8-10 0 7 4 10 8 10" /><path d="M12 20V3" />
                  </svg>
                </div>
                <h3>{t('s2_h')}</h3>
                <p>{t('s2_p')}</p>
                <div className="sv-step-vis">
                  <div className="sv-line"><span>Señales por lead</span><b>~8 verificadas</b></div>
                  <div className="sv-line"><span>Open rate medio</span><b>62%</b></div>
                  <div className="sv-bar-viz">
                    {[40, 55, 48, 70, 65, 82, 78, 95, 88].map((h, i) => (
                      <i key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="sv-step">
                <div className="sv-step-num">{t('s3_n')}</div>
                <div className="sv-step-ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 21h8" /><path d="M12 17v4" /><rect x="3" y="4" width="18" height="13" rx="2" /><path d="m8 11 3 3 5-6" />
                  </svg>
                </div>
                <h3>{t('s3_h')}</h3>
                <p>{t('s3_p')}</p>
                <div className="sv-step-vis">
                  <div className="sv-line"><span>Handoff</span><b>Google Cal / Cal.com</b></div>
                  <div className="sv-line"><span>Brief</span><b>Incluido</b></div>
                  <div className="sv-line"><span>CRM sync</span><b>Automático</b></div>
                </div>
              </div>
            </div>
            <div className="sv-process-visual">
              <div className="sv-pv-head">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--sv-accent)', display: 'inline-block' }} />
                </span>
                <span>salvia · rendimiento de campaña activa</span>
              </div>
              <div className="sv-pv-body">
                <div className="sv-pv-col">
                  <div className="sv-tag">Fase 01 · Siembra</div>
                  <div className="sv-val">541</div>
                  <div className="sv-sub2">cuentas sembradas</div>
                  <div className="sv-pv-bar"><b style={{ width: '77%' }} /></div>
                  <div className="sv-pv-rows">
                    <div className="sv-pv-row"><span>Lista construida</span><b>541 / 700</b></div>
                    <div className="sv-pv-row"><span>Dominios activos</span><b>4</b></div>
                    <div className="sv-pv-row"><span>Inbox rate</span><b>98.4%</b></div>
                  </div>
                </div>
                <div className="sv-pv-col">
                  <div className="sv-tag">Fase 02 · Germinación</div>
                  <div className="sv-val">62%</div>
                  <div className="sv-sub2">open rate medio</div>
                  <div className="sv-pv-bar"><b style={{ width: '62%' }} /></div>
                  <div className="sv-pv-rows">
                    <div className="sv-pv-row"><span>Emails enviados</span><b>1,248</b></div>
                    <div className="sv-pv-row"><span>Replies recibidos</span><b>97</b></div>
                    <div className="sv-pv-row"><span>Reply rate positivo</span><b>7.8%</b></div>
                  </div>
                </div>
                <div className="sv-pv-col">
                  <div className="sv-tag">Fase 03 · Cosecha</div>
                  <div className="sv-val">12</div>
                  <div className="sv-sub2">reuniones este mes</div>
                  <div className="sv-pv-bar"><b style={{ width: '48%' }} /></div>
                  <div className="sv-pv-rows">
                    <div className="sv-pv-row"><span>Cualificados</span><b>19</b></div>
                    <div className="sv-pv-row"><span>Booked</span><b>12</b></div>
                    <div className="sv-pv-row"><span>Show-up rate</span><b>84%</b></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="sv-stack" id="stack">
          <div className="sv-container">
            <div className="sv-sec-tag">{t('stack_tag')}</div>
            <h2 className="sv-display sv-sec-title">{t('stack_h')}</h2>
            <p className="sv-sec-sub">{t('stack_sub')}</p>
            <div className="sv-stack-grid">
              <div className="sv-stack-card">
                <h4>{t('stack_card_h')}</h4>
                {[
                  { k: 'Inbox rate medio', v: '98,4', s: '%' },
                  { k: 'Open rate', v: '62', s: '%' },
                  { k: 'Reply rate positivo', v: '7,8', s: '%' },
                  { k: 'Meeting show-up', v: '84', s: '%' },
                  { k: 'Leads cualificados entregados', v: '4.217', s: '' },
                  { k: 'Cuentas activas', v: '38', s: '' },
                ].map(m => (
                  <div key={m.k} className="sv-metric">
                    <span className="sv-k">{m.k}</span>
                    <span className="sv-v">{m.v}{m.s && <small>{m.s}</small>}</span>
                  </div>
                ))}
              </div>
              <div className="sv-stack-list">
                {([
                  { cat: 'Datos', name: 'Grafo de cuentas propio', desc: '40+ fuentes cruzadas: Crunchbase, LinkedIn, GitHub, Companies House, prensa sectorial.' },
                  { cat: 'IA', name: 'Copywriting contextual', desc: 'Modelos propios fine-tuned para tono B2B europeo. Nunca menciona que es IA.' },
                  { cat: 'Deliverability', name: 'Warm-up + rotación de dominios', desc: '3–12 dominios secundarios por cuenta. SPF, DKIM, DMARC gestionados.' },
                  { cat: 'Ops', name: 'Equipo de reply-management', desc: 'Humanos reales leyendo cada respuesta. Cualifican antes de pasarte el lead.' },
                  { cat: 'Integraciones', name: 'CRM sync bidireccional', desc: 'HubSpot, Salesforce, Pipedrive, Attio, Folk. Enriquecemos tus contactos.' },
                  { cat: 'Compliance', name: 'GDPR desde el diseño', desc: 'Data en Frankfurt. Opt-out de un click. DPA firmable por tu legal.' },
                ]).map(item => (
                  <div key={item.name} className="sv-stack-item">
                    <span className="sv-cat">{item.cat}</span>
                    <div>
                      <div className="sv-name">{item.name}</div>
                      <div className="sv-desc">{item.desc}</div>
                    </div>
                    <span className="sv-status">Operativo</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="sv-block" id="planes">
          <div className="sv-container">
            <div className="sv-sec-tag">{t('pr_tag')}</div>
            <h2 className="sv-display sv-sec-title">{t('pr_h')}</h2>
            <p className="sv-sec-sub">{t('pr_sub')}</p>
            <div className="sv-pricing-grid">
              {([
                {
                  letter: 'Plan A', name: 'Lead Delivery', featured: false,
                  desc: 'Pagas solo por cada lead cualificado que te entregamos. El más predecible.',
                  price: '80–200€', suffix: '/ lead', bill: 'precio según complejidad de ICP',
                  cta: 'Reservar llamada',
                  features: ['Solo pagas lo que te entregamos', 'Garantía: si no fit, no facturamos', 'Reunión agendada + brief incluido', 'Sin volumen mínimo, sin contrato', 'Ideal para validar canal'],
                },
                {
                  letter: 'Plan B', name: 'Revenue Share', featured: true,
                  desc: '0€ hasta que cierres. Cobramos un % del contrato cerrado. Nuestro incentivo = tu incentivo.',
                  price: '0€', suffix: 'de entrada', bill: 'luego 15–25% del ACV cerrado',
                  cta: 'Reservar llamada',
                  features: ['Riesgo cero — pagas cuando cobras', 'Alineación total de incentivos', 'Volumen ilimitado de outreach', 'Sales engineer dedicado', 'Para ACV ≥ 10k · due diligence mutua'],
                },
                {
                  letter: 'Plan C', name: 'Sistema instalado', featured: false,
                  desc: 'Te montamos la infra outbound en tu casa. La operamos un tiempo y la transferimos a tu equipo.',
                  price: '5.000€', suffix: 'setup', bill: '+ 1.500€/mes de operación',
                  cta: 'Hablar con ventas',
                  features: ['Infra técnica completa en tu stack', 'Training para tu equipo de ventas', 'Documentación y SOPs propios', 'Te convertimos en autónomos en 6 meses', 'Para scale-ups con equipo técnico'],
                },
              ]).map(plan => (
                <div key={plan.letter} className={`sv-plan${plan.featured ? ' featured' : ''}`}>
                  {plan.featured && <span className="sv-plan-tag">El más elegido</span>}
                  <div className="sv-plan-letter">{plan.letter}</div>
                  <div className="sv-plan-name">{plan.name}</div>
                  <div className="sv-plan-desc">{plan.desc}</div>
                  <div className="sv-plan-price"><b>{plan.price}</b><span className="sv-price-suffix">{plan.suffix}</span></div>
                  <div className="sv-plan-bill">{plan.bill}</div>
                  <a href="#cta" className="sv-plan-cta">{plan.cta}</a>
                  <ul className="sv-plan-features">
                    {plan.features.map(f => (
                      <li key={f} className="sv-plan-feat">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="sv-quote-section" id="clientes">
          <div className="sv-container">
            <div className="sv-sec-tag">{t('q_tag')}</div>
            <h2 className="sv-display sv-sec-title" style={{ maxWidth: '22ch' }}>{t('q_h')}</h2>
            <div className="sv-testi-photos">
              <div className="sv-testi-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/salvia/testimonial-ceo.jpg" alt="Equipo CEO Kova" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                <span className="sv-ph-tag">CEO · Kova</span>
              </div>
              <div className="sv-testi-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/salvia/testimonial-founder.jpg" alt="Founder Fernet AI" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                <span className="sv-ph-tag">Founder · Fernet AI</span>
              </div>
              <div className="sv-testi-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/salvia/testimonial-cto.jpg" alt="CTO Lienzo" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                <span className="sv-ph-tag">CTO · Lienzo</span>
              </div>
            </div>
            <div className="sv-quote-grid">
              {([
                { qk: 'q1', wk: 'q1_who', ck: 'q1_co', init: 'MR' },
                { qk: 'q2', wk: 'q2_who', ck: 'q2_co', init: 'DN' },
                { qk: 'q3', wk: 'q3_who', ck: 'q3_co', init: 'AS' },
              ] as { qk: DictKey; wk: DictKey; ck: DictKey; init: string }[]).map(({ qk, wk, ck, init }) => (
                <div key={qk} className="sv-quote">
                  <p>{t(qk)}</p>
                  <div className="sv-who">
                    <div className="sv-avatar">{init}</div>
                    <div><b>{t(wk)}</b><span>{t(ck)}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sv-block" id="faq">
          <div className="sv-container narrow">
            <div className="sv-sec-tag">{t('faq_tag')}</div>
            <h2 className="sv-display sv-sec-title">{t('faq_h')}</h2>
            <div className="sv-faq-grid">
              {faqs.map((qk, i) => (
                <div key={qk} className={`sv-faq${openFaq === i ? ' sv-faq-open' : ''}`}>
                  <div
                    className="sv-faq-summary"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{t(qk)}</span>
                    <span className="sv-faq-qmark" />
                  </div>
                  {openFaq === i && (
                    <div className="sv-faq-answer">{t(faqAnswers[i])}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sv-cta-section" id="cta">
          <svg className="sv-cta-deco" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M100 190c-45-10-80-50-80-100 0-22 10-45 22-55 12 22 35 33 58 33 0 45-12 80 0 122z" fill="currentColor" fillOpacity=".3" />
            <path d="M100 190c0-45 0-90 0-120M100 110L70 85M100 140L65 120M100 80L75 55M100 170L70 155" />
          </svg>
          <div className="sv-container">
            <div className="sv-sec-tag" style={{ display: 'inline-flex' }}>{t('cta_tag')}</div>
            <h2>{t('cta_h1')}<br />{t('cta_h2')} <em>{t('cta_hem')}</em>.</h2>
            <p className="sv-sub" style={{ margin: '0 auto', textAlign: 'center' }}>{t('cta_sub')}</p>
            <div className="sv-hero-cta" style={{ justifyContent: 'center' }}>
              <a href="#" className="sv-btn sv-btn-primary sv-btn-lg">{t('cta_btn1')} <ArrowIcon size={15} /></a>
              <a href="#" className="sv-btn sv-btn-ghost sv-btn-lg">{t('cta_btn2')}</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="sv-footer">
          <div className="sv-container">
            <div className="sv-foot">
              <div className="sv-foot-brand">
                <div className="sv-brand" style={{ display: 'flex' }}>
                  <LeafIcon />
                  SALVIA
                </div>
                <p>{t('ft_tagline')}</p>
              </div>
              <div>
                <h5>Producto</h5>
                <ul>
                  <li><a href="#como">Cómo funciona</a></li>
                  <li><a href="#stack">Stack</a></li>
                  <li><a href="#planes">Planes</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h5>Compañía</h5>
                <ul>
                  <li><a href="#">Sobre nosotros</a></li>
                  <li><a href="#clientes">Clientes</a></li>
                  <li><a href="#">Changelog</a></li>
                  <li><a href="#">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h5>Legal</h5>
                <ul>
                  <li><a href="#">Privacidad</a></li>
                  <li><a href="#">Términos</a></li>
                  <li><a href="#">DPA</a></li>
                  <li><a href="#">Seguridad</a></li>
                </ul>
              </div>
            </div>
            <div className="sv-foot-bot">
              <span>{t('ft_copy')}</span>
              <span>{t('ft_claim')}</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
