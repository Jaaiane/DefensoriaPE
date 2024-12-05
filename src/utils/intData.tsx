// src/utils/initData.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initialBiblioteca,
  initialAreasJuridicas,
} from "../components/initialData";

const BIBLIOTECA_STORAGE_KEY = "@biblioteca";
const AREA_JURIDICA_STORAGE_KEY = "@areas_juridicas";

export const initializeData = async () => {
  const bibliotecaExists = await AsyncStorage.getItem(BIBLIOTECA_STORAGE_KEY);
  const areasExists = await AsyncStorage.getItem(AREA_JURIDICA_STORAGE_KEY);

  if (!bibliotecaExists) {
    await AsyncStorage.setItem(
      BIBLIOTECA_STORAGE_KEY,
      JSON.stringify(initialBiblioteca)
    );
  }

  if (!areasExists) {
    await AsyncStorage.setItem(
      AREA_JURIDICA_STORAGE_KEY,
      JSON.stringify(initialAreasJuridicas)
    );
  }
};
