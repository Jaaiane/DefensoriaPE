import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Home";
import Mapa from "../Mapa";
import Agendamento from "../Agendamento"
import Processos from "../Processos";
import Perfil from "../Perfil";

import Feather from "@expo/vector-icons/Feather";

// Tipando a navegação das tabs
type TabParamList = {
  Home: undefined;
  Mapa: undefined;
  Agendamento: undefined;
  Processos: undefined;
  Perfil: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true, // esconde a tab bar
          tabBarActiveTintColor: "#44C694",
          tabBarStyle: {
            backgroundColor: "#EEEEEE",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />;
            },
          }}
        />

        <Tab.Screen
          name="Mapa"
          component={Mapa}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="map-pin" color={color} size={size} />;
            },
          }}
        />

        <Tab.Screen
          name="Agendamento"
          component={Agendamento}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="calendar" color={color} size={size} />;
            },
          }}
        />

        <Tab.Screen
          name="Processos"
          component={Processos}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" color={color} size={size} />;
            },
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="user" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
