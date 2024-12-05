export interface Usuario {
  id?: string; // Usamos string para o ID, pois será gerado como um UUID ou similar.
  cpf: string;
  nome: string;
  email: string;
  senha: string; // Lembre-se de tratar senhas com segurança.
}
