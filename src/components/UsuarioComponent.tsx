import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { UsuarioService } from "../Services/UsuarioService";
import { Usuario } from "../models/Usuario";

const UsuarioComponent: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [newUsuario, setNewUsuario] = useState<Usuario>({
    cpf: "",
    nome: "",
    email: "",
    senha: "",
  });

  useEffect(() => {
    loadUsuarios();
  }, []);

  const loadUsuarios = async () => {
    const usuariosData = await UsuarioService.getUsuarios();
    setUsuarios(usuariosData);
  };

  const handleAddUsuario = async () => {
    await UsuarioService.addUsuario(newUsuario);
    setNewUsuario({ cpf: "", nome: "", email: "", senha: "" }); // Limpa o formulário.
    loadUsuarios(); // Recarrega a lista de usuários.
  };

  return (
    <View>
      <TextInput
        placeholder="CPF"
        value={newUsuario.cpf}
        onChangeText={(text) => setNewUsuario({ ...newUsuario, cpf: text })}
      />
      <TextInput
        placeholder="Nome"
        value={newUsuario.nome}
        onChangeText={(text) => setNewUsuario({ ...newUsuario, nome: text })}
      />
      <TextInput
        placeholder="Email"
        value={newUsuario.email}
        onChangeText={(text) => setNewUsuario({ ...newUsuario, email: text })}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={newUsuario.senha}
        onChangeText={(text) => setNewUsuario({ ...newUsuario, senha: text })}
      />
      <Button title="Adicionar Usuário" onPress={handleAddUsuario} />

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UsuarioComponent;
