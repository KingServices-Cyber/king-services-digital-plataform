import { ButtonLink } from "./Button";

export function CtaFinal() {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-lilac-500 text-white text-center px-6 py-10">
      <h3 className="font-display font-semibold text-base mb-2">
        Vamos conversar sobre a conectividade da sua empresa?
      </h3>
      <ButtonLink
        href="/contato"
        variant="outline"
        className="!text-white !border-white/50 mt-2 hover:!bg-white/10"
      >
        Fale com um especialista
      </ButtonLink>
    </div>
  );
}
