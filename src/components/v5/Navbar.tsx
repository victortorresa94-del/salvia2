'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MessageSquare, Code2, Bot, Sparkles, Megaphone, GraduationCap, Wrench } from 'lucide-react';

const labsMenu = [
  { icon: MessageSquare, label: 'Claude Lab', tag: 'Implementación y formación', href: '/claude-lab' },
  { icon: Code2, label: 'Software Lab', tag: 'Software a medida', href: '/software-lab' },
  { icon: Bot, label: 'Agents Lab', tag: 'Automatización autónoma', href: '/agents-lab', hot: true },
  { icon: Sparkles, label: 'Gen AI Lab', tag: 'Imágenes, vídeo y creatividades', href: '/gen-ai-lab' },
  { icon: Megaphone, label: 'Marketing Lab', tag: 'Captación y campañas', href: '/marketing-lab' },
  { icon: GraduationCap, label: 'Learn Lab', tag: 'Formación práctica para equipos', href: '/learn-lab' },
  { icon: Wrench, label: 'Open Lab', tag: 'Chatbots, webs y dashboards', href: '/open-lab' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [labsOpen, setLabsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLabsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const otherLinks = [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Experimentos', href: '/experimentos' },
    { label: 'Archivo', href: '/blog' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          transition: 'background 400ms ease, border-color 400ms ease',
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: 'none',
          boxShadow: 'none',
        }}
      >
        <div className="v5-container w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline group">
            <Image
              src="/aether-logo-white.png"
              alt="Aether Labs"
              height={23}
              width={90}
              style={{
                objectFit: 'contain',
                transition: 'filter 400ms ease',
                filter: scrolled ? 'invert(1)' : 'none',
              }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {/* Labs dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setLabsOpen(true)}
              onMouseLeave={() => setLabsOpen(false)}
            >
              <button
                onClick={() => setLabsOpen(!labsOpen)}
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: scrolled ? '#555555' : 'rgba(255,255,255,0.6)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = scrolled ? '#111111' : '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = scrolled ? '#555555' : 'rgba(255,255,255,0.6)';
                }}
              >
                Labs
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: labsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Slim dropdown */}
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: '50%',
                  transform: labsOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
                  width: '260px',
                  background: '#FFFFFF',
                  border: '1px solid #E8E8E5',
                  borderRadius: '10px',
                  opacity: labsOpen ? 1 : 0,
                  visibility: labsOpen ? 'visible' : 'hidden',
                  transition: 'all 220ms cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                  padding: '6px',
                }}
              >
                {/* Labs list */}
                {labsMenu.map((lab) => {
                  const Icon = lab.icon;
                  return (
                    <Link
                      key={lab.href}
                      href={lab.href}
                      onClick={() => setLabsOpen(false)}
                      style={{ textDecoration: 'none', display: 'block' }}
                    >
                      <div
                        className="dropdown-lab-item"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '8px 10px',
                          borderRadius: '7px',
                          transition: 'background 150ms ease',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <Icon size={14} color="rgba(0,0,0,0.35)" />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontSize: '13px',
                            lineHeight: 1.2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}>
                            <span>
                              <span style={{
                                fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                                fontWeight: 400,
                                fontStyle: 'normal',
                                color: '#111111',
                                letterSpacing: '-0.01em',
                              }}>
                                {lab.label.replace(' Lab', '')}
                              </span>
                              <span style={{
                                fontFamily: 'var(--v5-font-body)',
                                fontWeight: 300,
                                color: 'rgba(0,0,0,0.35)',
                              }}>
                                {' Lab'}
                              </span>
                            </span>
                            {'hot' in lab && lab.hot && (
                              <span style={{
                                fontFamily: 'var(--v5-font-mono)',
                                fontSize: '7px',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                background: 'rgba(0,0,0,0.08)',
                                color: 'rgba(0,0,0,0.5)',
                                padding: '2px 4px',
                                borderRadius: '3px',
                              }}>Hot</span>
                            )}
                          </div>
                          <div style={{
                            fontFamily: 'var(--v5-font-mono)',
                            fontSize: '10px',
                            color: '#999',
                            lineHeight: 1.3,
                            marginTop: '1px',
                          }}>{lab.tag}</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}

                {/* Divider + Web Express (oferta comercial) */}
                <div style={{
                  height: '1px',
                  background: '#E8E8E5',
                  margin: '4px 10px 6px',
                }} />
                <Link
                  href="/web-express"
                  onClick={() => setLabsOpen(false)}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div
                    className="dropdown-lab-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '7px',
                      transition: 'background 150ms ease',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontSize: '13px', lineHeight: 1.2 }}>
                      <span style={{
                        fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                        fontWeight: 400,
                        fontStyle: 'normal',
                        color: '#111111',
                        letterSpacing: '-0.01em',
                      }}>
                        Web
                      </span>
                      <span style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontWeight: 300,
                        color: 'rgba(0,0,0,0.35)',
                      }}>
                        {' Express'}
                      </span>
                    </span>
                    <span style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '9px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      background: '#111111',
                      color: '#FFFFFF',
                      padding: '3px 6px',
                      borderRadius: '3px',
                      fontWeight: 600,
                    }}>
                      499€
                    </span>
                  </div>
                </Link>

                {/* Divider + AI Team Lab */}
                <div style={{
                  height: '1px',
                  background: '#E8E8E5',
                  margin: '4px 10px 6px',
                }} />
                <Link
                  href="/systems-lab/sesion-de-claridad"
                  onClick={() => setLabsOpen(false)}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div
                    className="dropdown-lab-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '7px',
                      transition: 'background 150ms ease',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontSize: '13px', lineHeight: 1.2 }}>
                      <span style={{
                        fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                        fontWeight: 400,
                        fontStyle: 'normal',
                        color: '#111111',
                        letterSpacing: '-0.01em',
                      }}>
                        AI Team
                      </span>
                      <span style={{
                        fontFamily: 'var(--v5-font-body)',
                        fontWeight: 300,
                        color: 'rgba(0,0,0,0.35)',
                      }}>
                        {' Lab'}
                      </span>
                    </span>
                    <span style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '10px',
                      color: '#999',
                    }}>
                      Auditoría gratuita →
                    </span>
                  </div>
                </Link>
                <div style={{ height: '2px' }} />
              </div>
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  color: scrolled ? '#555555' : 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? '#111111' : '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? '#555555' : 'rgba(255,255,255,0.6)';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-5">
            <Link
              href="/contacto"
              className="hidden lg:inline-flex items-center no-underline v5-btn-primary"
              style={{
                background: scrolled ? '#111111' : '#FFFFFF',
                color: scrolled ? '#FFFFFF' : '#111111',
                borderRadius: '0px',
                padding: '10px 24px',
                fontSize: '13px',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                if (scrolled) {
                  el.style.background = '#333333';
                } else {
                  el.style.background = '#F0F0F0';
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = scrolled ? '#111111' : '#FFFFFF';
              }}
            >
              Auditoría gratuita →
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1 bg-transparent border-none cursor-pointer"
              aria-label="Menu"
              style={{ color: scrolled ? '#555555' : 'rgba(255,255,255,0.60)' }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '320px',
          height: '100vh',
          background: '#FFFFFF',
          zIndex: 999,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          borderLeft: '1px solid #E8E8E8',
          padding: '80px 32px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        <div style={{ marginBottom: '24px', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Labs
        </div>
        {labsMenu.map((lab) => (
          <Link
            key={lab.href}
            href={lab.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontSize: '16px',
              color: '#555555',
              textDecoration: 'none',
              padding: '11px 0',
              borderBottom: '1px solid #E8E8E8',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}
          >
            <span style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontWeight: 400,
              fontStyle: 'normal',
              color: '#111',
              letterSpacing: '-0.01em',
            }}>
              {lab.label.replace(' Lab', '')}
            </span>
            <span style={{ fontFamily: 'var(--v5-font-body)', fontWeight: 300, color: '#888' }}>
              Lab
            </span>
            {'hot' in lab && lab.hot && (
              <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '7px', letterSpacing: '0.1em', textTransform: 'uppercase', background: '#111', color: '#fff', padding: '2px 5px', borderRadius: '3px' }}>Hot</span>
            )}
          </Link>
        ))}
        <Link
          href="/web-express"
          onClick={() => setMobileOpen(false)}
          style={{
            fontSize: '16px',
            textDecoration: 'none',
            padding: '11px 0',
            borderBottom: '1px solid #E8E8E8',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{
            fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#111',
            letterSpacing: '-0.01em',
          }}>
            Web
          </span>
          <span style={{ fontFamily: 'var(--v5-font-body)', fontWeight: 300, color: '#888' }}>
            Express
          </span>
          <span style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '9px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background: '#111',
            color: '#fff',
            padding: '3px 6px',
            borderRadius: '3px',
            fontWeight: 600,
          }}>
            499€
          </span>
        </Link>

        <Link
          href="/systems-lab/sesion-de-claridad"
          onClick={() => setMobileOpen(false)}
          style={{
            fontSize: '16px',
            textDecoration: 'none',
            padding: '11px 0',
            borderBottom: '1px solid #E8E8E8',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{
            fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#111',
            letterSpacing: '-0.01em',
          }}>
            AI Team
          </span>
          <span style={{ fontFamily: 'var(--v5-font-body)', fontWeight: 300, color: '#888' }}>
            Lab
          </span>
        </Link>

        <div style={{ marginTop: '32px', marginBottom: '24px', fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          General
        </div>
        {[...otherLinks].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '18px',
              fontWeight: 300,
              color: '#555555',
              textDecoration: 'none',
              padding: '12px 0',
              borderBottom: '1px solid #E8E8E8',
            }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contacto"
          onClick={() => setMobileOpen(false)}
          className="v5-btn-primary"
          style={{
            marginTop: 'auto',
            background: '#111111',
            color: '#FFFFFF',
            borderRadius: '0px',
            textAlign: 'center',
            justifyContent: 'center',
            padding: '16px 0',
          }}
        >
          Auditoría gratuita
        </Link>
      </div>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 998,
            backdropFilter: 'blur(4px)',
          }}
        />
      )}

      <style>{`
        .dropdown-lab-item:hover { background: rgba(0,0,0,0.04) !important; }
      `}</style>
    </>
  );
}
