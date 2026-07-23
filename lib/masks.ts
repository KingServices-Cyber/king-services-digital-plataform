export function mascararCPF(value: string): string {
  let v = value.replace(/\D/g, "").slice(0, 11);
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
  v = v.replace(/(\d{3})(\d{2})$/, "$1-$2");
  return v;
}

export function mascararCNPJ(value: string): string {
  let v = value.replace(/\D/g, "").slice(0, 14);
  v = v.replace(/^(\d{2})(\d)/, "$1.$2");
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
  v = v.replace(/(\d{4})(\d)/, "$1-$2");
  return v;
}

export function mascararTelefone(value: string): string {
  let v = value.replace(/\D/g, "").slice(0, 11);
  if (v.length > 10) {
    v = v.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (v.length > 6) {
    v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (v.length > 2) {
    v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  } else if (v.length > 0) {
    v = v.replace(/(\d{0,2})/, "($1");
  }
  return v;
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Letras + números + caractere especial, 8 caracteres (conforme definido para o cadastro da Área do Cliente)
export const SENHA_CADASTRO_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8}$/;
