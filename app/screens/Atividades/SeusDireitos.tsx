import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SeusDireitosScreen: React.FC<any> = () => {
  const router = useRouter();
  const handleBackPress = () => {
    router.push("/screens/Home");
  };

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
              onPress={handleBackPress}
            />
            <Text style={styles.headerTitle}>Seus Direitos</Text>
          </View>
        </LinearGradient>

        {/* Conteúdo */}
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Introdução */}
          <Text style={styles.intro}>
            Conheça seus direitos garantidos por lei. Se você precisar de mais
            informações ou assistência, a Defensoria Pública está à disposição
            para ajudá-lo.
          </Text>

          {/* Lista de Direitos */}
          <View style={styles.directionsContainer}>
            <Text style={styles.sectionTitle}>Principais Direitos</Text>

            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>
                Direito à Assistência Jurídica Gratuita
              </Text>
              <Text style={styles.rightDescription}>
                Você tem o direito de ser assistido por um advogado
                gratuitamente, caso não tenha condições de pagar pelos serviços
                jurídicos.
              </Text>
            </View>

            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>Direito à Saúde</Text>
              <Text style={styles.rightDescription}>
                Todos os cidadãos têm direito à saúde, incluindo o acesso ao
                Sistema Único de Saúde (SUS) para atendimentos médicos e
                procedimentos.
              </Text>
            </View>

            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>Direito à Educação</Text>
              <Text style={styles.rightDescription}>
                O acesso à educação é um direito fundamental, garantindo a todos
                o direito de estudar, desde a educação infantil até a
                universidade.
              </Text>
            </View>

            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>Direito ao Trabalho</Text>
              <Text style={styles.rightDescription}>
                Todo cidadão tem direito ao trabalho, com uma jornada de
                trabalho regulamentada e direito a condições dignas de trabalho.
              </Text>
            </View>

            <View style={styles.rightItem}>
              <Text style={styles.rightTitle}>
                Direito à Liberdade de Expressão
              </Text>
              <Text style={styles.rightDescription}>
                A liberdade de expressão é garantida pela Constituição,
                permitindo a manifestação livre de ideias, pensamentos e
                opiniões.
              </Text>
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
    paddingBottom: 50,
  },
  intro: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  directionsContainer: {
    marginBottom: 20,
  },
  rightItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  rightTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#176438",
    marginBottom: 5,
  },
  rightDescription: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
});

export default SeusDireitosScreen;
