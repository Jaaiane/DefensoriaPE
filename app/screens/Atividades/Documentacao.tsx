import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const DocumentacoesScreen: React.FC = () => {
  const documents = [
    "Alvará Judicial",
    "Busca e Apreensão",
    "Curatela",
    "Divórcio Consensual",
    "Execução de Alimentos",
    "Guarda e Responsabilidade",
    "Inventário e Arrolamento de Bens",
    "Investigação de Paternidade",
    "Pensão Alimentícia",
    "Posse e Propriedade",
    "Retificação de Registro Civil",
    "Separação Consensual",
    "Separação Judicial, Divórcio e Conversão em Divórcio",
    "Tutela",
  ];

  const router = useRouter();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
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
              onPress={() => {
                router.push('/screens/Home')
              }}
            />
            <Text style={styles.headerTitle}>Documentações Necessárias</Text>
          </View>
        </LinearGradient>

        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {documents.map((doc, index) => (
            <View key={index} style={styles.itemContainer}>
              <FontAwesome
                name="hand-o-right"
                size={20}
                color="#FFFFFF"
                style={styles.icon}
              />
              <Text style={styles.itemText}>{doc}</Text>
            </View>
          ))}
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
    height: 80,
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
    paddingBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#176438",
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#FFFFFF",
    flex: 1,
  },
});

export default DocumentacoesScreen;
