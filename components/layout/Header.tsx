"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/content/nav";
import { cn } from "@/design-system";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  // Elevação do header ao rolar
  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu mobile ao redimensionar para desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
        setOpenItem(null);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleMouseEnter(label: string) {
    if (window.innerWidth <= 768) return;
    clearTimeout(closeTimer.current);
    setOpenItem(label);
  }
  function handleMouseLeave() {
    if (window.innerWidth <= 768) return;
    closeTimer.current = setTimeout(() => setOpenItem(null), 300);
  }
  function handleMobileToggle(label: string) {
    setOpenItem((prev) => (prev === label ? null : label));
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-purple-900 backdrop-blur-sm border-b border-white/10 transition-shadow duration-300",
        scrolled && "shadow-[0_2px_16px_rgba(42,18,64,0.4)]",
      )}
    >
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>

      <div className="max-w-[1280px] mx-auto px-6 md:px-6 h-[72px] md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="King Services — página inicial">
          <Image
            src="/logo.png"
            alt="King Services"
            width={240}
            height={80}
            className="h-[60px] md:h-[64px] w-auto"
            priority
          />
        </Link>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 border border-white/30 rounded-[10px]"
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
          aria-label={mobileOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-0.5 w-5 mx-auto bg-white transition-transform",
              mobileOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn("block h-0.5 w-5 mx-auto bg-white transition-opacity", mobileOpen && "opacity-0")}
          />
          <span
            className={cn(
              "block h-0.5 w-5 mx-auto bg-white transition-transform",
              mobileOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>

        <nav
          id="main-nav"
          aria-label="Navegação principal"
          className={cn(
            "flex flex-col gap-0 p-4 pb-24 overflow-y-auto z-40",
            "fixed top-[72px] left-0 right-0 bottom-0 bg-white",
            "transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
            "md:static md:flex-row md:items-center md:gap-5 md:translate-x-0 md:bg-transparent md:p-0 md:overflow-visible md:z-auto",
          )}
        >
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={cn(
                "relative w-full md:w-auto border-b md:border-0 border-fog",
                item.alignRight && "md:ml-auto",
              )}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="flex items-center justify-between md:inline-block py-4 md:py-0 px-1 text-[15px] md:text-[13px] font-semibold md:font-medium text-graphite md:text-white/85 hover:text-purple-600 md:hover:text-lilac-300 transition-colors whitespace-nowrap"
                aria-haspopup={item.columns ? "true" : undefined}
                aria-expanded={openItem === item.label}
                onClick={(e) => {
                  if (window.innerWidth <= 768 && item.columns) {
                    e.preventDefault();
                    handleMobileToggle(item.label);
                  }
                }}
              >
                {item.label}
                {item.columns && (
                  <span className="md:hidden text-lilac-500 text-lg font-normal">
                    {openItem === item.label ? "–" : "+"}
                  </span>
                )}
              </Link>

              {item.columns && (
                <div
                  className={cn(
                    "md:absolute md:top-full md:mt-2 md:bg-white md:border md:border-fog md:rounded-2xl md:shadow-mega md:p-6",
                    "md:flex md:gap-10 md:min-w-[420px] md:opacity-0 md:invisible md:pointer-events-none md:-translate-y-1",
                    item.alignRight ? "md:right-0" : "md:left-0",
                    "transition-all duration-300",
                    openItem === item.label
                      ? "md:opacity-100 md:visible md:pointer-events-auto md:translate-y-0 flex flex-col md:flex-row gap-4 pb-3"
                      : "hidden md:flex",
                  )}
                >
                  {item.columns.map((col, i) => (
                    <div key={i} className="min-w-0 md:min-w-[180px]">
                      {col.title && (
                        <p className="text-xs font-bold uppercase tracking-wide text-purple-600 mb-2">
                          {col.title}
                        </p>
                      )}
                      <ul className="space-y-0.5">
                        {col.links.map((link) => (
                          <li key={link.label + link.href}>
                            <Link
                              href={link.href}
                              className="block px-2 py-1.5 -mx-2 rounded-lg text-sm text-graphite hover:bg-mist hover:text-purple-600 whitespace-nowrap"
                              onClick={() => {
                                setMobileOpen(false);
                                setOpenItem(null);
                              }}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Ações — mostradas dentro do painel mobile; no desktop ficam à parte (ver abaixo) */}
          <div className="md:hidden flex flex-col gap-2 mt-4 pt-4 border-t border-fog">
            <Link href="/login" className="text-sm font-semibold text-purple-600 py-2">
              Área do Cliente
            </Link>
            <Link
              href="/contato"
              className="inline-block text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white"
            >
              Fale com um especialista
            </Link>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-[13px] font-medium text-lilac-300 hover:text-white transition-colors whitespace-nowrap"
          >
            Área do Cliente
          </Link>
          <Link
            href="/contato"
            className="inline-block font-bold text-[13px] px-[18px] py-[9px] rounded-pill bg-white text-purple-900 transition-transform hover:-translate-y-0.5"
          >
            Fale com um especialista
          </Link>
        </div>
      </div>
    </header>
  );
}
