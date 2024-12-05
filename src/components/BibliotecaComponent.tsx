import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { BibliotecaService } from "../Services/BibliotecaService";
import { Biblioteca } from "../models/Biblioteca";

const BibliotecaComponent: React.FC = () => {
  const [bibliotecaItems, setBibliotecaItems] = useState<Biblioteca[]>([]);
  const [newItem, setNewItem] = useState<Biblioteca>({
    titulo: "",
    texto: "",
    areaJuridica: "",
  });

  useEffect(() => {
    loadBiblioteca();
  }, []);

  const loadBiblioteca = async () => {
    const itemsData = await BibliotecaService.getBiblioteca();
    setBibliotecaItems(itemsData);
  };

  const handleAddItem = async () => {
    await BibliotecaService.addBiblioteca(newItem);
    setNewItem({ titulo: "", texto: "", areaJuridica: "" }); // Limpa o formulário.
    loadBiblioteca(); // Recarrega a lista de itens da biblioteca.
  };

  return (
    <View>
      <TextInput
        placeholder="Título"
        value={newItem.titulo}
        onChangeText={(text) => setNewItem({ ...newItem, titulo: text })}
      />
      <TextInput
        placeholder="Texto"
        value={newItem.texto}
        onChangeText={(text) => setNewItem({ ...newItem, texto: text })}
      />
      <TextInput
        placeholder="Área Jurídica"
        value={newItem.areaJuridica}
        onChangeText={(text) => setNewItem({ ...newItem, areaJuridica: text })}
      />
      <Button title="Adicionar Item" onPress={handleAddItem} />

      <FlatList
        data={bibliotecaItems}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default BibliotecaComponent;
