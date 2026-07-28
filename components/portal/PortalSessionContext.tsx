"use client";

import { createContext, ReactNode, useContext } from "react";

export type PortalSession = {
  userId: string;
  email: string | null;
};

const PortalSessionContext = createContext<PortalSession | null>(null);

export function PortalSessionProvider({
  value,
  children,
}: {
  value: PortalSession;
  children: ReactNode;
}) {
  return <PortalSessionContext.Provider value={value}>{children}</PortalSessionContext.Provider>;
}

/** Só pode ser usado dentro de `<ClientPortalShell>` (app/area-cliente/layout.tsx). */
export function usePortalSession(): PortalSession {
  const ctx = useContext(PortalSessionContext);
  if (!ctx) {
    throw new Error("usePortalSession deve ser usado dentro de <ClientPortalShell>.");
  }
  return ctx;
}
