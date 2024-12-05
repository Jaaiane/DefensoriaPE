import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCBRUjDI10nPyveRNabuUdd1TS_0NTxNmQ"); // Substitua pela sua chave de API
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const App = () => {
  const [prompt, setPrompt] = useState(
    "Eu caí na rua, tenho direito a uma indenização?"
  );
  const [response, setResponse] = useState("");

  const generateContent = async () => {
    try {
      const result = await model.generateContent(
        "responda somente se a pergunta for relacionada a justiça e direitos do cidadão, se não for, diga que não pode responder, e fale somente usando 5 linhas no máximo: " +
          prompt
      );
      setResponse(result.response.text());
    } catch (error) {
      console.error("Erro ao gerar conteúdo:", error);
      setResponse("Erro ao gerar resposta.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pergunta:</Text>
      <TextInput
        style={styles.input}
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Digite sua pergunta"
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={generateContent}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Resposta:</Text>
      <Text style={styles.response}>{response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F9FAFB", // Fundo suave e moderno
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#B0B0B0",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  response: {
    marginTop: 20,
    fontSize: 16,
    color: "#007BFF", // Azul para a resposta
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default App;
