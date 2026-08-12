"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/content/nav";
import { LocationIndicator } from "@/components/ui";
import logo from "@/public/logo.png";
import { cn } from "@/design-system";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

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

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setOpenItem(null);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleMouseEnter(label: string) {
    if (window.innerWidth < 1024) return;
    clearTimeout(closeTimer.current);
    setOpenItem(label);
  }
  function handleMouseLeave() {
    if (window.innerWidth < 1024) return;
    closeTimer.current = setTimeout(() => setOpenItem(null), 300);
  }
  function handleMobileToggle(label: string) {
    setOpenItem((prev) => (prev === label ? null : label));
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white border-b border-border transition-shadow duration-300",
        scrolled && "shadow-header",
      )}
    >
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>

      {/* Top bar */}
      <div className="hidden md:block bg-primary-900 text-white">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-9 text-xs">
          <p className="text-white/80">Parceira Autorizada Vivo Empresas</p>
          <LocationIndicator />
          <div className="flex items-center gap-4">
            <a href="tel:+5517997150462" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (17) 99715-0462
            </a>
            <Link href="/login" className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Área do Cliente
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-[1280px] mx-auto px-6 h-[64px] md:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="KingServices — página inicial">
          <Image src={logo} alt="KingServices" className="h-[48px] md:h-[56px] w-auto" priority />
        </Link>

        <button
          type="button"
          className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 border border-border rounded-lg"
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
          aria-label={mobileOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-0.5 w-5 mx-auto bg-text transition-transform",
              mobileOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 mx-auto bg-text transition-opacity",
              mobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 mx-auto bg-text transition-transform",
              mobileOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>

        <nav
          id="main-nav"
          aria-label="Navegação principal"
          className={cn(
            "flex flex-col gap-0 p-4 pb-24 overflow-y-auto z-40",
            "fixed top-[64px] left-0 right-0 bottom-0 bg-white",
            "transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
            "lg:static lg:flex-row lg:items-center lg:gap-1 lg:translate-x-0 lg:bg-transparent lg:p-0 lg:overflow-visible lg:z-auto",
          )}
        >
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={cn(
                "relative w-full lg:w-auto border-b lg:border-0 border-border",
                item.alignRight && "md:ml-auto",
              )}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="flex items-center justify-between lg:inline-block py-3.5 lg:py-0 px-1 lg:px-3 text-[15px] lg:text-[14px] font-medium text-text hover:text-primary transition-colors whitespace-nowrap"
                aria-haspopup={item.columns ? "true" : undefined}
                aria-expanded={openItem === item.label}
                onClick={(e) => {
                  if (window.innerWidth < 1024 && item.columns) {
                    e.preventDefault();
                    handleMobileToggle(item.label);
                  } else {
                    setMobileOpen(false);
                    setOpenItem(null);
                  }
                }}
              >
                {item.label}
                {item.columns && (
                  <span className="lg:hidden text-primary text-lg font-normal">
                    {openItem === item.label ? "–" : "+"}
                  </span>
                )}
              </Link>

              {item.columns && (
                <div
                  className={cn(
                    "lg:absolute lg:top-full lg:mt-2 lg:bg-white lg:border lg:border-border lg:rounded-2xl lg:shadow-mega lg:p-4",
                    "lg:flex lg:gap-3 lg:opacity-0 lg:invisible lg:pointer-events-none lg:-translate-y-1",
                    item.alignRight ? "lg:right-0" : "lg:left-0",
                    "transition-all duration-300",
                    openItem === item.label
                      ? "lg:opacity-100 lg:visible lg:pointer-events-auto lg:translate-y-0 flex flex-col lg:flex-row gap-3 pb-3"
                      : "hidden lg:flex",
                  )}
                >
                  {item.columns.map((col, i) => (
                    <div key={i} className="min-w-0">
                      {col.title && (
                        <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">
                          {col.title}
                        </p>
                      )}
                      <ul className="space-y-0">
                        {col.links.map((link) => (
                          <li key={link.label + link.href}>
                            <Link
                              href={link.href}
                              className="block px-2 py-1 -mx-2 rounded-lg text-sm text-text hover:bg-primary-50 hover:text-primary whitespace-nowrap"
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

          <div className="lg:hidden flex flex-col gap-2 mt-4 pt-4 border-t border-border">
            <a href="tel:+5517997150462" className="text-sm font-semibold text-primary py-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (17) 99715-0462
            </a>
            <Link href="/login" className="text-sm font-semibold text-primary py-2">
              Área do Cliente
            </Link>
            <Link
              href="/contato"
              className="inline-block text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-primary text-white"
            >
              Contrate Agora
            </Link>
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contato"
            className="inline-block font-bold text-[13px] px-5 py-2.5 rounded-pill bg-primary text-white transition-all hover:bg-primary-600 hover:shadow-elevated hover:-translate-y-0.5"
          >
            Contrate Agora
          </Link>
        </div>
      </div>
    </header>
  );
}
