import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const MeusDadosScreen: React.FC = () => {
  // const router = useRouter();

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
              // onPress={() => router.back()} 
            />
            <Text style={styles.headerTitle}>Meus Dados</Text>
          </View>
        </LinearGradient>

        {/* Conteúdo */}
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Campos de Dados */}
          <View style={styles.dataItem}>
            <Text style={styles.label}>Nome Completo</Text>
            <View style={styles.dataContainer}>
              <Text style={styles.value}>Everalda Silveira</Text>
              <TouchableOpacity onPress={() => alert("Editar Nome Completo")}>
                <MaterialIcons name="edit" size={24} color="#176438" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dataItem}>
            <Text style={styles.label}>CPF</Text>
            <View style={styles.dataContainer}>
              <Text style={styles.value}>123.456.789-00</Text>
              <TouchableOpacity onPress={() => alert("Editar CPF")}>
                <MaterialIcons name="edit" size={24} color="#176438" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dataItem}>
            <Text style={styles.label}>Telefone</Text>
            <View style={styles.dataContainer}>
              <Text style={styles.value}>(81) 91234-5678</Text>
              <TouchableOpacity onPress={() => alert("Editar Telefone")}>
                <MaterialIcons name="edit" size={24} color="#176438" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dataItem}>
            <Text style={styles.label}>Endereço</Text>
            <View style={styles.dataContainer}>
              <Text style={styles.value}>Rua Exemplo, 123, Recife - PE</Text>
              <TouchableOpacity onPress={() => alert("Editar Endereço")}>
                <MaterialIcons name="edit" size={24} color="#176438" />
              </TouchableOpacity>
            </View>
          </View>
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
    paddingBottom: 50,
  },
  dataItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
});

export default MeusDadosScreen;
