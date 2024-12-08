import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const DocumentacoesScreen: React.FC<any> = () => {
  const documents = [
    {
      title: "Alvará Judicial",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nComprovante do PIS/PASEP, FGTS, poupança etc;\nCópia da certidão de óbito;\nCópia da certidão de casamento;\nCópia da certidão de nascimento dos filhos.",
    },
    {
      title: "Busca e Apreensão",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de nascimento do filho que está em poder de pessoa que não detenha a guarda;\nCópia da certidão de casamento, se houver;\nEndereço completo de onde se encontra a criança e o nome completo com quem está;\nDeclaração de testemunhas do estado em que se encontra a criança;\nDescrição da criança;\nNome completo, endereço e número da carteira de identidade de três testemunhas.\n",
    },
    {
      title: "Curatela",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de nascimento ou casamento da pessoa que será interditada e colocada sob curatela;\nCópia da certidão de casamento de quem está requerendo a curatela;\nAtestado ou laudo médico que revele a anomalia psíquica, indicando a incapacidade da pessoa a ser interditada;\nLaudo de capacidade física e mental do interditando.",
    },
    {
      title: "Divórcio Consensual",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de casamento;\nCópia da certidão de nascimento dos filhos;\nDocumentos comprovando a propriedade sobre o imóvel;\nDeclaração de três testemunhas comprovando a separação de fato superior a dois anos.",
    },
    {
      title: "Execução de Alimentos",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da petição do processo de alimentos;\nCópia da sentença com o trânsito em julgado que fixou os alimentos ou do acordo homologado em juízo;\nCópia da certidão de casamento, se houver;\nCópia da certidão de nascimento dos filhos;\nDocumentos comprovando os bens do Réu;\nNome completo, endereço e número da carteira de identidade de três testemunhas;\nEndereço completo do Réu.",
    },
    {
      title: "Guarda e Responsabilidade",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de nascimento do menor;\nCópia da certidão de casamento dos requerentes;\nDeclaração da pessoa que está transferindo a guarda e responsabilidade.",
    },
    {
      title: "Inventário e Arrolamento de Bens",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de óbito;\nCópia da certidão de casamento;\nCópia da certidão de nascimento ou casamento de filhos, se houver;\nCópia da certidão de matrícula do imóvel atualizado;\nCertidões negativas Federal, Estadual e Municipal;\nCertidão negativa do Registro Imobiliário;\nCópia das carteiras de identidade e CPF dos interessados.",
    },
    {
      title: "Investigação de Paternidade",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de nascimento da criança;\nNome completo e endereço do suposto pai;\nCartas, fotografias com os negativos etc;\nCópia da averiguação oficiosa (alegação de paternidade);\nNome completo, endereço e número da carteira de identidade de três testemunhas.",
    },
    {
      title: "Pensão Alimentícia",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de casamento;\nCópia da certidão de nascimento dos filhos;\nEndereço completo para quem irá pedir a pensão;\nCópia do documento comprobatório da convivência, quando se tratar de pensão requerida pelos conviventes;\nNome completo, endereço e número da carteira de identidade de três testemunhas.",
    },
    {
      title: "Posse e Propriedade",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nTodo e qualquer documento relativo ao imóvel, como certidão de matrícula do imóvel;\nCópia da escritura do imóvel;\nCópia da escritura de compra e venda de posse;\nComprovante de taxas de luz, água, IPTU pagas etc.",
    },
    {
      title: "Retificação de Registro Civil",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nDocumento que necessita ser corrigido (certidão de casamento, certidão de nascimento, certidão de óbito etc);\nDocumento que comprove o erro do documento que será corrigido.",
    },
    {
      title: "Separação Consensual",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de casamento;\nCópia da certidão de nascimento dos filhos;\nDocumentos comprovando a propriedade sobre o imóvel.",
    },
    {
      title: "Separação Judicial, Divórcio e Conversão em Divórcio",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de casamento (para divórcio ou conversão deverá conter a averbação do cartório);\nCópia da certidão de nascimento dos filhos;\nDocumentos comprovando a propriedade sobre o imóvel;\nNome completo, endereço e número da carteira de identidade do Réu;\nNome completo, endereço e número da carteira de identidade de três testemunhas.",
    },
    {
      title: "Tutela",
      info: "Cópia do RG;\nCópia do CPF;\nComprovante de residência;\nCópia da certidão de nascimento da criança;\nCópia da certidão de casamento de quem está requerendo a tutela;\nCópia do óbito dos pais da criança, se houver;\nCópia da certidão de imóveis quando houver bens dos pais falecidos.",
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{
    title: string;
    info: string;
  } | null>(null);

  const openModal = (doc: { title: string; info: string }) => {
    setSelectedDoc(doc);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedDoc(null);
    setModalVisible(false);
  };

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
            <Text style={styles.headerTitle}>Documentações Necessárias</Text>
          </View>
        </LinearGradient>

        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {documents.map((doc, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => openModal(doc)}
            >
              <FontAwesome
                name="hand-o-right"
                size={20}
                color="#FFFFFF"
                style={styles.icon}
              />
              <Text style={styles.itemText}>{doc.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {selectedDoc && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selectedDoc.title}</Text>
                <ScrollView>
                  {selectedDoc.info.split("\n").map((line, index) => (
                    <Text key={index} style={styles.modalText}>
                      {line.trim()}
                    </Text>
                  ))}
                </ScrollView>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeModal}
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#26A076",
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default DocumentacoesScreen;
