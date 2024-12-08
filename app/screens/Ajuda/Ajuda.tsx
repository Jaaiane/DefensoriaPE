import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const AjudaScreen: React.FC = () => {
  const router = useRouter();

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
              onPress={() => {
                router.push("/screens/Perfil/Perfil");
              }}
            />
            <Text style={styles.headerTitle}>Ajuda</Text>
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
            <Text>Olá, tudo bem? Bom ver você aqui! </Text>
            Listamos algumas das principais dúvidas quanto ao uso do aplicativo.
            Se não encontrar a sua dúvida aqui, entre em contato com a gente
            pelo canal da Ouvidoria.
          </Text>

          {/* Principais Dúvidas */}
          <Text style={styles.sectionTitle}>Principais Dúvidas</Text>

          <View style={styles.faqItem}>
            <Text style={styles.question}>
              Quais serviços estão disponíveis através do aplicativo?
            </Text>
            <Text style={styles.answer}>
              O aplicativo oferece acesso a informações sobre serviços
              jurídicos, agendamento de atendimentos, consulta ao histórico de
              processos, e envio de documentos.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>
              Como posso atualizar meus dados pessoais?
            </Text>
            <Text style={styles.answer}>
              Você pode atualizar seus dados pessoais acessando a seção "Seus
              Dados" no menu do aplicativo. Clique na opção de edição e faça as
              alterações necessárias.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>
              O que fazer se eu esquecer minha senha?
            </Text>
            <Text style={styles.answer}>
              Se você esquecer sua senha, clique na opção "Esqueci minha senha"
              na tela de login. Você receberá um e-mail com instruções para
              redefinir sua senha.
            </Text>
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
  bold: {
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  faqItem: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#176438",
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
});

export default AjudaScreen;
