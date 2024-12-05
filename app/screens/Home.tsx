import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function Home() {
  const [activeIndex, SetActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    SetActiveIndex(index);
  };

  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.screen}
        contentContainerStyle={styles.screenContent}
      >
        <Header userName="Everalda" location="Jaboatão, Pernambuco - Brasil" />
        <View style={styles.container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={handleScroll}
            scrollEventThrottle={16}
            contentContainerStyle={styles.scrollView}
          >
            {/* Card 1 */}
            <View style={[styles.card, { borderColor: "#4EA483" }]}>
              <View style={styles.header}>
                <Ionicons name="albums-outline" size={26} color="#4EA483" />
              </View>
              <Text style={styles.title}>Agendamento</Text>
              <Text style={styles.description}>
                Faça agora o seu agendamento na Defensoria pública do estado.
              </Text>
              <Text style={[styles.link, { color: "#4EA483" }]}>
                Segunda a Sexta
              </Text>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#4EA483" }]}
                onPress={() => router.push("/screens/Agendamento/Agendamento")}
              >
                <Ionicons name="add" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>

            {/* Card 2 */}
            <View style={[styles.card, { borderColor: "#FFC107" }]}>
              <View style={styles.header}>
                <Ionicons name="documents-outline" size={26} color="#EBC57A" />
              </View>
              <Text style={styles.title}>Seus Processos</Text>
              <Text style={styles.description}>
                Acompanhe por aqui todos os seus processos.
              </Text>
              <Text style={[styles.link, { color: "#EBC57A" }]}>
                Detalhes e Status
              </Text>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#EBC57A" }]}
                onPress={() => router.push("/screens/Processos/Processos")}
              >
                <Ionicons name="add" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Bolinhas de navegação */}
          <View style={styles.pagination}>
            {[0, 1].map((index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index ? styles.activeDot : null,
                ]}
              />
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Serviços destinados ao cidadão</Text>
        <View style={styles.servicesContainer}>
          <View style={styles.serviceCard}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="scale-balance"
                size={30}
                color="#000"
                onPress={() => {
                  router.push("/screens/Atividades/Atuacao");
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.serviceTitle}>Atuação</Text>
              <Text style={styles.serviceText}>
                Navegue por nossas áreas de atuação e descubra como podemos
                ajudar você!
              </Text>
            </View>
          </View>
          <View style={styles.serviceCard}>
            <View style={styles.iconCircle}>
              <Feather
                name="headphones"
                size={30}
                color="#000"
                onPress={() => {
                  router.push("/screens/Atividades/Ouvidoria");
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.serviceTitle}>Ouvidoria</Text>
              <Text style={styles.serviceText}>
                Navegue por nossas áreas de atuação e descubra como podemos
                ajudar você!
              </Text>
            </View>
          </View>
          <View style={styles.serviceCard}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="information-circle"
                size={30}
                color="#000"
                onPress={() => {
                  router.push("/screens/Atividades/Documentacao");
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.serviceTitle}>Documentações Necessárias</Text>
              <Text style={styles.serviceText}>
                Navegue por nossas áreas de atuação e descubra como podemos
                ajudar você!
              </Text>
            </View>
          </View>
          <View style={styles.serviceCard}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="file-document"
                size={30}
                color="#000"
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.serviceTitle}>Seus Direitos</Text>
              <Text style={styles.serviceText}>
                Navegue por nossas áreas de atuação e descubra como podemos
                ajudar você!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  screenContent: {
    flexGrow: 1,
    paddingBottom: 100,
    paddingTop: 0,
  },
  container: {
    height: 230,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 20,
  },
  card: {
    width: width * 0.8,
    borderRadius: 15,
    height: 180,
    padding: width * 0.05,
    marginHorizontal: width * 0.1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4, // Para Android
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: width * 0.04,
    color: "#666",
    marginBottom: 8,
  },
  link: {
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#4CAF50",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#176438",
    marginHorizontal: 15,
    marginBottom: 25,
    marginTop: 30,
  },
  servicesContainer: {
    flexDirection: "column",
  },
  serviceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(64, 210, 163, 0.33)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#424242",
  },
  serviceText: {
    fontSize: 14,
    color: "#424242",
    marginTop: 4,
  },
});
