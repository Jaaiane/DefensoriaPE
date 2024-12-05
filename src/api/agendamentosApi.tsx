import axios from "axios";

// Configuração base da API
const Api = axios.create({
  baseURL: "http://127.0.0.1:8000/", // URL base da sua API
});

// Função para buscar agendamentos
export const fetchAgendamentos = async () => {
  try {
    const response = await Api.get("agendamentos/");
    return response.data; // Retorna os dados dos agendamentos
  } catch (error) {
    console.error("There was an error fetching the data:", error);
    throw error; // Lança o erro para tratamento posterior
  }
};

// Função para criar um novo agendamento
export const createAgendamento = async (agendamentoData: any) => {
  try {
    const response = await Api.post("agendamentos/", agendamentoData);
    return response.data; // Retorna os dados do novo agendamento criado
  } catch (error) {
    console.error("Error creating agendamento:", error);
    throw error; // Lança o erro para tratamento posterior
  }
};


export default Api;