import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Search } from "../app/components/Search";

export default function Processos() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#26A076", "#176438"]}
        style={styles.headerGradient}
      >
        <View style={styles.row1}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: "https://th.bing.com/th/id/R.902fb01972a7d62c03d6bf23c5b16dae?rik=BednsWHWMl1r5g&pid=ImgRaw&r=0",
            }}
          />

          <Ionicons name="notifications" size={24} color="white" />
        </View>

        <View style={styles.textContainer}>
          <Text style={{ color: "white", fontSize: 24 }}>Olá, Everalda</Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            Bem-vindo ao DP PE.
          </Text>

          <View style={styles.locationContainer}>
            <Feather name="map-pin" size={14} color="white" />
            <Text style={styles.locationText}>
              Jaboatão, Pernambuco - Brasil
            </Text>
          </View>
        </View>

        <Search />
      </LinearGradient>

      <Text style={[styles.infoText, { marginLeft: -170 }]}>
        Seus Processos
      </Text>

      <View style={styles.cardsContainer}>
        <View style={styles.miniCard1}>
          <Text style={{ color: "#26A076", fontSize: 11 }}>Finalizado</Text>
        </View>
        <View style={styles.miniCard2}>
          <Text style={{ color: "#EC7C7C", fontSize: 11 }}>Pendente</Text>
        </View>
        <View style={styles.miniCard3}>
          <Text style={{ color: "#D7B508", fontSize: 11 }}>Em andamento</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Regulamentação de Visitas</Text>
        <Text style={styles.cardDescription}>
          Estabelecimento de visitas para{"\n"}a pessoa que não é guardiã.
        </Text>
        <View style={styles.cardDatesContainer}>
          <Text style={styles.cardDates}>
            Inicio do processo: 15/05/2023{"\n"}Fim do processo: 07/07/2023
          </Text>

          <View style={styles.statusCard1}>
            <Text style={styles.statusText1}>Finalizado</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Revisão de Pensão Alimentícia</Text>
        <Text style={styles.cardDescription}>
          Pedido para revisão do valor da{"\n"}pensão já exigida.
        </Text>
        <View style={styles.cardDatesContainer}>
          <Text style={styles.cardDates}>
            Inicio do processo: 02/10/2024{"\n"}Fim do processo:
          </Text>

          <View style={styles.statusCard2}>
            <Text style={styles.statusText2}>Em andamento</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ação Civil Pública</Text>
        <Text style={styles.cardDescription}>
          Proteção dos direitos coletivos{"\n"}ou difusos, como direitos do
          {"\n"}consumidor.
        </Text>
        <View style={styles.cardDatesContainer}>
          <Text style={styles.cardDates}>
            Inicio do processo: 30/05/2023{"\n"}Fim do processo: 10/08/2023
          </Text>

          <View style={styles.statusCard3}>
            <Text style={styles.statusText3}>Pendente</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerGradient: {
    width: "100%",
    height: "35%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    flexDirection: "column",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  row1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  textContainer: {
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 25,
    marginBottom: 0,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  locationText: {
    color: "white",
    marginLeft: 5,
  },
  infoText: {
    color: "#000000",
    fontSize: 20,
    marginVertical: 0,
    marginBottom: 5,
  },

  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 10,
  },
  miniCard1: {
    backgroundColor: "#DCEDE4",
    width: 92,
    height: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  miniCard2: {
    backgroundColor: "#F9C0C0",
    width: 92,
    height: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  miniCard3: {
    backgroundColor: "#F9E3A1",
    width: 92,
    height: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#F5F5F5",
    width: "82%",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 1,
  },
  cardDescription: {
    fontSize: 12,
    color: "#000000",
    marginBottom: 2,
  },

  cardDatesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardDates: {
    fontSize: 12,
    color: "#176438",
  },

  statusCard1: {
    backgroundColor: "#DCEDE4",
    width: 72,
    height: 16,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#40D2A3",
  },
  statusCard2: {
    backgroundColor: "#F9E3A1",
    width: 88,
    height: 16,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#D7B508",
  },
  statusCard3: {
    backgroundColor: "#F9C0C0",
    width: 55,
    height: 15,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,

    borderWidth: 1,
    borderColor: "#D73131",
  },
  statusText1: {
    color: "#26A076",
    fontSize: 11,
  },
  statusText2: {
    color: "#D7B508",
    fontSize: 11,
  },
  statusText3: {
    color: "#EC7C7C",
    fontSize: 11,
  },
});
