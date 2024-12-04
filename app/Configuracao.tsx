import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ConfiguracoesScreen: React.FC = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
//   const router = useRouter();

  const toggleSwitch = () => setIsNotificationsEnabled(!isNotificationsEnabled);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Header */}
        <LinearGradient
          colors={["#26A076", "#176438"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <MaterialIcons
              name="arrow-back"
              size={24}
              color="#FFFFFF"
            //   onPress={() => router.back()}
            />
            <Text style={styles.headerTitle}>Configurações</Text>
          </View>
        </LinearGradient>

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.option}>
            <Text style={styles.optionText}>Receber Notificações</Text>
            <Switch
              trackColor={{ false: "#ccc", true: "#26A076" }}
              thumbColor={isNotificationsEnabled ? "#176438" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isNotificationsEnabled}
            />
          </View>

          <TouchableOpacity
            style={styles.option}
            onPress={() => alert("Tela para alterar senha em andamento")}
          >
            <Text style={styles.optionText}>Alterar Senha</Text>
            <MaterialIcons name="chevron-right" size={24} color="#176438" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
});

export default ConfiguracoesScreen;
