import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { AreaJuridicaService } from "../Services/AreaJuridicaService";
import { AreaJuridica } from "../models/AreaJuridica";

const AreaJuridicaComponent: React.FC = () => {
  const [areasJurídicas, setAreasJurídicas] = useState<AreaJuridica[]>([]);
  const [newArea, setNewArea] = useState<AreaJuridica>({ nome: "" });

  useEffect(() => {
    loadAreasJurídicas();
  }, []);

  const loadAreasJurídicas = async () => {
    const areasData = await AreaJuridicaService.getAreasJuridicas();
    setAreasJurídicas(areasData);
  };

  const handleAddAreaJurídica = async () => {
    await AreaJuridicaService.addAreaJuridica(newArea);
    setNewArea({ nome: "" }); // Limpa o formulário.
    loadAreasJurídicas(); // Recarrega a lista de áreas jurídicas.
  };

  return (
    <View>
      <TextInput
        placeholder="Nome da Área Jurídica"
        value={newArea.nome}
        onChangeText={(text) => setNewArea({ ...newArea, nome: text })}
      />
      <Button title="Adicionar Área Jurídica" onPress={handleAddAreaJurídica} />

      <FlatList
        data={areasJurídicas}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AreaJuridicaComponent;
