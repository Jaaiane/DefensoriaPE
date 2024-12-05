import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const areas: {
  id: string;
  name: string;
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
  description: string;
}[] = [
  {
    id: "1",
    name: "Consumidor",
    icon: "shopping-cart",
    description:
      "Área relacionada à defesa do consumidor, direitos e garantias nas relações de consumo.",
  },
  {
    id: "2",
    name: "Curadoria",
    icon: "book",
    description:
      "Área de estudos e práticas jurídicas sobre a curadoria de bens e interesses.",
  },
  {
    id: "3",
    name: "Defesa da Mulher",
    icon: "female",
    description:
      "Área que cuida da defesa dos direitos das mulheres, incluindo questões de violência doméstica.",
  },
  {
    id: "4",
    name: "Criminal",
    icon: "gavel",
    description:
      "Área voltada ao direito penal e à defesa de réus em processos criminais.",
  },
  {
    id: "5",
    name: "Direitos Humanos",
    icon: "people",
    description:
      "Área dedicada à defesa dos direitos fundamentais das pessoas.",
  },
  {
    id: "6",
    name: "Família",
    icon: "home",
    description:
      "Área que trata de questões familiares, como divórcios, guarda de filhos e heranças.",
  },
  {
    id: "7",
    name: "Moradia",
    icon: "location-city",
    description:
      "Área focada na defesa dos direitos relativos à moradia e propriedade.",
  },
  {
    id: "8",
    name: "Juizados Especiais",
    icon: "balance",
    description:
      "Área voltada para processos mais rápidos e informais, como pequenas causas.",
  },
  {
    id: "9",
    name: "Instância Superior",
    icon: "school",
    description:
      "Área que lida com tribunais superiores e recursos em processos judiciais.",
  },
  {
    id: "10",
    name: "Cível e Fazenda Pública",
    icon: "domain",
    description:
      "Área do direito cível e das questões envolvendo a administração pública e tributos.",
  },
  {
    id: "11",
    name: "Saúde",
    icon: "healing",
    description:
      "Área dedicada à defesa dos direitos à saúde e ao acesso a serviços médicos.",
  },
  {
    id: "12",
    name: "Prisional",
    icon: "security",
    description:
      "Área focada na defesa dos direitos de pessoas privadas de liberdade.",
  },
  {
    id: "13",
    name: "Criança e Adolescente",
    icon: "child-care",
    description:
      "Área voltada para a defesa dos direitos das crianças e adolescentes.",
  },
  {
    id: "14",
    name: "Idoso",
    icon: "elderly",
    description:
      "Área voltada para a defesa dos direitos dos idosos e combate a abusos.",
  },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArea, setSelectedArea] = useState<{
    name: string;
    description: string;
  } | null>(null);

  const renderItem = ({ item }: { item: (typeof areas)[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setSelectedArea(item);
        setModalVisible(true);
      }}
    >
      <MaterialIcons name={item.icon} size={40} color="#176438" />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

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
              onPress={() => alert("Voltar!")}
            />
            <Text style={styles.headerTitle}>Áreas de Atuação</Text>
          </View>
        </LinearGradient>

        <FlatList
          data={areas}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={renderItem}
          contentContainerStyle={styles.grid}
        />

        {/* Modal para exibir a descrição */}
        {selectedArea && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>{selectedArea.name}</Text>
                <Text style={styles.modalText}>{selectedArea.description}</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </SafeAreaProvider>
  );
}

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
  grid: {
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: "space-between",
  },
  card: {
    width: 90,
    height: 90,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "#000000",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#176438",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
