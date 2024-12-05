export interface Agendamento {
  id?: string;
  usuarioId: string; // ID do usuário relacionado.
  dataHora: string; // Formato ISO da data e hora.
  areaSelecionada: string;
  descricaoCaso: string;
}
