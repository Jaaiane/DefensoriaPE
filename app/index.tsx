import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppIntro from "./AppIntro"; // Tela de Introdução
import LoginScreen from "./screens/Auth/Login";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true); // Controla o carregamento
  const [hasSeenIntro, setHasSeenIntro] = useState(false); // Verifica se já viu a introdução

  useEffect(() => {
    const checkIntro = async () => {
      try {
        const seenIntro = await AsyncStorage.getItem("hasSeenIntro");
        if (seenIntro === "true") {
          setHasSeenIntro(true); // Já viu a introdução
        }
      } catch (error) {
        console.error("Erro ao verificar o AsyncStorage:", error);
      } finally {
        setIsLoading(false); // Finaliza o carregamento
      }
    };

    checkIntro(); // Chama a função ao carregar
  }, []);

  if (isLoading) {
    // Exibe um indicador de carregamento enquanto verifica o AsyncStorage
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Exibe AppIntro se for a primeira vez, senão exibe Home
  return hasSeenIntro ? <LoginScreen /> : <AppIntro />;
};

export default HomeScreen;
