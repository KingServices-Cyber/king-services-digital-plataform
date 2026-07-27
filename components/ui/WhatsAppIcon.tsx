import { CONTACT_INFO } from "@/lib/content/data";
import { cn } from "@/design-system";

export function WhatsAppLink({
  children,
  className = "",
  iconOnly = false,
}: {
  children?: React.ReactNode;
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
      target="_blank"
      rel="noopener"
      aria-label="Abrir conversa no WhatsApp"
      className={cn("inline-flex items-center gap-2 no-underline", className)}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          d="M23.47 8.52A10.6 10.6 0 0 0 16.02 5.3c-5.86 0-10.63 4.77-10.63 10.63 0 1.87.49 3.7 1.42 5.31L5.3 26.7l5.6-1.47a10.6 10.6 0 0 0 5.1 1.3h.01c5.86 0 10.63-4.77 10.63-10.63a10.57 10.57 0 0 0-3.17-7.38Zm-7.45 16.35h-.01a8.83 8.83 0 0 1-4.5-1.23l-.32-.19-3.32.87.89-3.24-.21-.33a8.84 8.84 0 0 1-1.36-4.72c0-4.88 3.97-8.85 8.84-8.85a8.8 8.8 0 0 1 6.25 2.6 8.79 8.79 0 0 1 2.59 6.26c0 4.88-3.97 8.83-8.85 8.83Zm4.85-6.62c-.27-.13-1.59-.78-1.83-.87-.25-.09-.43-.13-.6.13-.18.27-.7.87-.86 1.04-.16.18-.32.2-.58.07-.27-.13-1.13-.42-2.16-1.33-.8-.71-1.34-1.6-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.46.07-.7.34-.24.27-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.72.13.18 1.85 2.83 4.49 3.97.63.27 1.12.43 1.5.56.63.2 1.2.17 1.66.1.51-.08 1.59-.65 1.81-1.28.22-.62.22-1.16.16-1.27-.07-.12-.25-.19-.51-.32Z"
          fill="#fff"
        />
      </svg>
      {!iconOnly && children}
    </a>
  );
}
