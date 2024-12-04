// app/_layout.tsx
import { Slot, useSegments } from "expo-router";
import { View } from "react-native";
import Header from "./components/Header"; // Importando o cabeçalho
import BottomNavigation from "./components/Navegação"; // Importando a barra de navegação

export default function Layout() {
  const segments: string[] = useSegments(); // Obtendo os segmentos da rota atual

  // Função para verificar se a rota atual está na lista de exclusão total
  const hideHeaderAndNav = (): boolean => {
    return ["appIntro", "cadastro", "login"].some((segment) =>
      segments.includes(segment)
    );
  };

  // Função para verificar se a rota atual exibe apenas a barra de navegação
  const showBottomNavOnly = (): boolean => {
    return ["mapa", "perfil"].some((segment) => segments.includes(segment));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Exibe o Header apenas nas telas Home, Agendamento e Processos */}
      {!hideHeaderAndNav() && !showBottomNavOnly() && (
        <Header userName="Everalda" location="Jaboatão, Pernambuco - Brasil" />
      )}
      <Slot /> {/* Renderiza as rotas filhas aqui */}
      {/* Exibe a BottomNavigation apenas se não estiver em uma tela que esconde tudo */}
      {!hideHeaderAndNav() && <BottomNavigation />}
    </View>
  );
}
