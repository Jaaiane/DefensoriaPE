import { Slot } from "expo-router";
import { usePathname } from "expo-router";
import { View } from "react-native";
import BottomNavigation from "./components/Navegação";

export default function Layout() {
  const pathname = usePathname();

  const showBottomNavigation = [
    "/screens/Home",
    "/screens/Processos/Mapa",
    "/screens/Agendamento/Agendamento",
    "/screens/Processos/Processos",
    "/screens/Perfil/Perfil",
  ].includes(pathname);

  return (
    <View style={{ flex: 1 }}>
      <Slot />
      {showBottomNavigation && <BottomNavigation />}
    </View>
  );
}
