import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const OuvidoriaScreen: React.FC = () => {

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
            <Text style={styles.headerTitle}>Ouvidoria</Text>
          </View>
        </LinearGradient>

        <ScrollView style={styles.content}>
          <Text style={styles.description}>
            <Text style={styles.boldBlack}>
              A Ouvidoria Externa da Defensoria Pública do Estado de Pernambuco{" "}
            </Text>
            é um canal de comunicação entre o cidadão e a instituição, voltado a
            receber informações a respeito da atuação institucional e de membros
            e servidores da DPPE.
          </Text>

          <View style={styles.contactBox}>
            <Text style={[styles.title, styles.greenText]}>Contato</Text>
            <Text style={styles.label}>
              Canal Eletrônico: <Text style={styles.txtbr}>FalaBR</Text>
            </Text>
            <Text style={styles.label}>
              WhatsApp: <Text style={styles.blackText}>(81) 98492-9333</Text>
            </Text>
            <Text style={styles.label}>
              Email:{" "}
              <Text style={styles.greenText}>
                ouvidoria@defensoria.pe.gov.br
              </Text>
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.title, styles.greenText]}>Presencial</Text>
            <Text style={styles.label}>
              Av. Conde da Boa Vista, n°1450, Empresarial José Maria Matos
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.title, styles.greenText]}>Horário</Text>
            <Text style={styles.label}>Segunda a Sexta, das 9h às 14h</Text>
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
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  boldBlack: {
    fontWeight: "bold",
    color: "#000",
  },
  contactBox: {
    borderWidth: 1,
    borderColor: "#176438",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#000",
  },
  blackText: {
    color: "#000",
  },
  txtbr: {
    color: "#176438",
  },
  greenText: {
    color: "#176438",
  },
  section: {
    marginBottom: 20,
  },
});

export default OuvidoriaScreen;
