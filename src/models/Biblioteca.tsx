export interface Biblioteca {
  id?: string;
  titulo: string;
  texto: string;
  imagem?: string; // URL ou caminho da imagem armazenada localmente.
  areaJuridica: string;
}
