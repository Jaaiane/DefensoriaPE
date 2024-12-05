import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { AgendamentoService } from "../Services/AgendamentoService";
import { Agendamento } from "../models/Agendamento";

const AgendamentoComponent: React.FC = () => {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [newAgendamento, setNewAgendamento] = useState<Agendamento>({
    usuarioId: "",
    dataHora: "",
    areaSelecionada: "",
    descricaoCaso: "",
  });

  useEffect(() => {
    loadAgendamentos();
  }, []);

  const loadAgendamentos = async () => {
    const agendamentosData = await AgendamentoService.getAgendamentos();
    setAgendamentos(agendamentosData);
  };

  const handleAddAgendamento = async () => {
    await AgendamentoService.addAgendamento(newAgendamento);
    setNewAgendamento({
      usuarioId: "",
      dataHora: "",
      areaSelecionada: "",
      descricaoCaso: "",
    }); // Limpa o formulário.
    loadAgendamentos(); // Recarrega a lista de agendamentos.
  };

  return (
    <View>
      <TextInput
        placeholder="ID do Usuário"
        value={newAgendamento.usuarioId}
        onChangeText={(text) =>
          setNewAgendamento({ ...newAgendamento, usuarioId: text })
        }
      />
      <TextInput
        placeholder="Data e Hora"
        value={newAgendamento.dataHora}
        onChangeText={(text) =>
          setNewAgendamento({ ...newAgendamento, dataHora: text })
        }
      />
      <TextInput
        placeholder="Área Selecionada"
        value={newAgendamento.areaSelecionada}
        onChangeText={(text) =>
          setNewAgendamento({ ...newAgendamento, areaSelecionada: text })
        }
      />
      <TextInput
        placeholder="Descrição do Caso"
        value={newAgendamento.descricaoCaso}
        onChangeText={(text) =>
          setNewAgendamento({ ...newAgendamento, descricaoCaso: text })
        }
      />
      <Button title="Adicionar Agendamento" onPress={handleAddAgendamento} />

      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <View>
            <Text>{item.dataHora}</Text>
            <Text>{item.areaSelecionada}</Text>
            <Text>{item.descricaoCaso}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AgendamentoComponent;
