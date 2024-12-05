import AsyncStorage from "@react-native-async-storage/async-storage";
import { AreaJuridica } from "../models/AreaJuridica";

const AREA_JURIDICA_STORAGE_KEY = "@areas_juridicas";

export class AreaJuridicaService {
  static async getAreasJuridicas(): Promise<AreaJuridica[]> {
    const areasJson = await AsyncStorage.getItem(AREA_JURIDICA_STORAGE_KEY);
    return areasJson ? JSON.parse(areasJson) : [];
  }

  static async addAreaJuridica(area: AreaJuridica): Promise<void> {
    const areas = await this.getAreasJuridicas();
    area.id = new Date().toISOString(); // Gera um ID único baseado na data.
    areas.push(area);
    await AsyncStorage.setItem(
      AREA_JURIDICA_STORAGE_KEY,
      JSON.stringify(areas)
    );
  }

  static async updateAreaJuridica(updatedArea: AreaJuridica): Promise<void> {
    const areas = await this.getAreasJuridicas();
    const index = areas.findIndex((a) => a.id === updatedArea.id);
    if (index !== -1) {
      areas[index] = updatedArea;
      await AsyncStorage.setItem(
        AREA_JURIDICA_STORAGE_KEY,
        JSON.stringify(areas)
      );
    }
  }

  static async deleteAreaJuridica(id: string): Promise<void> {
    const areas = await this.getAreasJuridicas();
    const filteredAreas = areas.filter((a) => a.id !== id);
    await AsyncStorage.setItem(
      AREA_JURIDICA_STORAGE_KEY,
      JSON.stringify(filteredAreas)
    );
  }
}
