import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter, useSegments } from "expo-router";

type NavigationItem = {
  label: string;
  iconName: keyof typeof Ionicons.glyphMap;
  route: Href;
};

const navigationItems: NavigationItem[] = [
  { label: "Home", iconName: "home-outline", route: "/screens/Home" },
  { label: "Mapa", iconName: "map-outline", route: "/screens/Processos/Mapa" },
  { label: "Agendamento", iconName: "calendar-outline", route: "/screens/Agendamento/Agendamento" },
  { label: "Processos", iconName: "folder-outline", route: "/screens/Processos/Processos" },
  { label: "Perfil", iconName: "person-outline", route: "/screens/Perfil/Perfil" },
];

const BottomNavigation: React.FC = () => {
  const router = useRouter();
  const segments = useSegments(); 

  // Determina qual item está ativo com base no segmento
  const activeRoute = `/${segments[0]}`; // Primeiro segmento é a rota principal

  return (
    <View style={styles.container}>
      {navigationItems.map((item, index) => {
        const isActive = activeRoute === item.route; // Verifica se a rota está ativa
        return (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={() => router.push(item.route)}
            accessibilityLabel={`Navegar para ${item.label}`}
          >
            <Ionicons
              name={item.iconName}
              size={24}
              color={isActive ? "#4CAF50" : "#000"} // Destaque do ícone ativo
            />
            <Text style={[styles.navText, isActive && styles.activeText]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#000",
    marginTop: 4,
  },
  activeText: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
});

export default BottomNavigation;