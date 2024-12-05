import AsyncStorage from "@react-native-async-storage/async-storage";
import { Agendamento } from "../models/Agendamento";

const AGENDAMENTO_STORAGE_KEY = "@agendamentos";

export class AgendamentoService {
  static async getAgendamentos(): Promise<Agendamento[]> {
    const agendamentosJson = await AsyncStorage.getItem(
      AGENDAMENTO_STORAGE_KEY
    );
    return agendamentosJson ? JSON.parse(agendamentosJson) : [];
  }

  static async addAgendamento(agendamento: Agendamento): Promise<void> {
    const agendamentos = await this.getAgendamentos();
    agendamento.id = new Date().toISOString(); // Gera um ID único baseado na data.
    agendamentos.push(agendamento);
    await AsyncStorage.setItem(
      AGENDAMENTO_STORAGE_KEY,
      JSON.stringify(agendamentos)
    );
  }

  static async updateAgendamento(
    updatedAgendamento: Agendamento
  ): Promise<void> {
    const agendamentos = await this.getAgendamentos();
    const index = agendamentos.findIndex((a) => a.id === updatedAgendamento.id);
    if (index !== -1) {
      agendamentos[index] = updatedAgendamento;
      await AsyncStorage.setItem(
        AGENDAMENTO_STORAGE_KEY,
        JSON.stringify(agendamentos)
      );
    }
  }

  static async deleteAgendamento(id: string): Promise<void> {
    const agendamentos = await this.getAgendamentos();
    const filteredAgendamentos = agendamentos.filter((a) => a.id !== id);
    await AsyncStorage.setItem(
      AGENDAMENTO_STORAGE_KEY,
      JSON.stringify(filteredAgendamentos)
    );
  }
}
