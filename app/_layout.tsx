import { Slot } from "expo-router";
import { usePathname } from "expo-router"; // Importe usePathname
import { View } from "react-native";
import BottomNavigation from "./components/Navegação"; // Importando a barra de navegação

export default function Layout() {
  const pathname = usePathname(); // Obtém o pathname da rota atual

  const showBottomNavigation = [
    "/screens/Home",
    "/screens/Processos/Mapa",
    "/screens/Agendamento/Agendamento",
    "/screens/Processos/Processos",
    "/screens/Perfil/Perfil",
  ].includes(pathname);

  return (
    <View style={{ flex: 1 }}>
      <Slot /> {/* Renderiza as rotas filhas aqui */}
      {showBottomNavigation && <BottomNavigation />} {/* Exibe a BottomNavigation apenas nas telas definidas */}
    </View>
  );
}
