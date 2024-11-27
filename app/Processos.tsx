import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Search } from "../app/components/Search";
import Header from "./components/Header";


export default function Processos() {
  return (
    
    <>
    < Header userName="Everalda" location="Jaboatão, Pernambuco - Brasil"/>
    <ScrollView
    showsVerticalScrollIndicator={false}
    > 
    <View style={styles.container}>
      
      <Text style={[styles.infoText]}>
        Seus Processos
      </Text>

      <View style={styles.cardsContainer}>
        <View style={styles.miniCard1}>
          <Text style={{ color: "#26A076", fontSize: 15 }}>Finalizado</Text>
        </View>
        <View style={styles.miniCard2}>
          <Text style={{ color: "#EC7C7C", fontSize: 15 }}>Pendente</Text>
        </View>
        <View style={styles.miniCard3}>
          <Text style={{ color: "#D7B508", fontSize: 14 }}>Em andamento</Text>
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
    </ScrollView>
    
    </>
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
    fontSize: 25,
    fontWeight: "bold",
    // marginVertical: 0,
    marginBottom: 30,
    marginLeft: 15
  },

  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 25,
  },
  miniCard1: {
    backgroundColor: "#DCEDE4",
    width: 92,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4, // Para Android
  },
  miniCard2: {
    backgroundColor: "#F9C0C0",
    width: 92,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4, // Para Android
  },
  miniCard3: {
    backgroundColor: "#F9E3A1",
    width: 100,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4, // Para Android
  },
  card: {
    backgroundColor: "#F5F5F5",
    width: "90%",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 1,
  },
  cardDescription: {
    fontSize: 13,
    color: "#000000",
    marginBottom: 2,
  },

  cardDatesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardDates: {
    fontSize: 13,
    color: "#176438",
  },

  statusCard1: {
    backgroundColor: "#DCEDE4",
    width: 72,
    height: 20,
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
    height: 20,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#D7B508",
  },
  statusCard3: {
    backgroundColor: "#F9C0C0",
    width: 72,
    height: 20,
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
