// src/constants/initialData.ts

import { Biblioteca } from "../models/Biblioteca";
import { AreaJuridica } from "../models/AreaJuridica";

export const initialBiblioteca: Biblioteca[] = [
  {
    id: "1",
    titulo: "Direito Civil",
    texto: "Introdução ao Direito Civil.",
    areaJuridica: "Civil",
  },
  {
    id: "2",
    titulo: "Direito Penal",
    texto: "Fundamentos do Direito Penal.",
    areaJuridica: "Penal",
  },
];

export const initialAreasJuridicas: AreaJuridica[] = [
  { id: "1", nome: "Direito Civil" },
  { id: "2", nome: "Direito Penal" },
  { id: "3", nome: "Direito Trabalhista" },
  { id: "4", nome: "Direito Tributário" },
  { id: "5", nome: "Direito Administrativo" },
];
