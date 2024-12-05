import AsyncStorage from "@react-native-async-storage/async-storage";
import { Biblioteca } from "../models/Biblioteca";

const BIBLIOTECA_STORAGE_KEY = "@biblioteca";

export class BibliotecaService {
  static async getBiblioteca(): Promise<Biblioteca[]> {
    const bibliotecaJson = await AsyncStorage.getItem(BIBLIOTECA_STORAGE_KEY);
    return bibliotecaJson ? JSON.parse(bibliotecaJson) : [];
  }

  static async addBiblioteca(item: Biblioteca): Promise<void> {
    const biblioteca = await this.getBiblioteca();
    item.id = new Date().toISOString(); // Gera um ID único baseado na data.
    biblioteca.push(item);
    await AsyncStorage.setItem(
      BIBLIOTECA_STORAGE_KEY,
      JSON.stringify(biblioteca)
    );
  }

  static async updateBiblioteca(updatedItem: Biblioteca): Promise<void> {
    const biblioteca = await this.getBiblioteca();
    const index = biblioteca.findIndex((b) => b.id === updatedItem.id);
    if (index !== -1) {
      biblioteca[index] = updatedItem;
      await AsyncStorage.setItem(
        BIBLIOTECA_STORAGE_KEY,
        JSON.stringify(biblioteca)
      );
    }
  }

  static async deleteBiblioteca(id: string): Promise<void> {
    const biblioteca = await this.getBiblioteca();
    const filteredBiblioteca = biblioteca.filter((b) => b.id !== id);
    await AsyncStorage.setItem(
      BIBLIOTECA_STORAGE_KEY,
      JSON.stringify(filteredBiblioteca)
    );
  }
}
