import { View, Text, StyleSheet, Image } from "react-native";
import Map, { Marker, Callout } from "react-native-maps";

import Icon from "@expo/vector-icons/Ionicons";

const coordinate = {
  //corrigir
  latitude: -8.055839166708282,
  longitude: -34.892541732692436,
};

const imageUrl =
  "https://www.defensoria.pe.def.br/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-04-at-08.26.02.jpeg";

export default function Mapa() {
  return (
    <View style={styles.container}>
      <Map
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker coordinate={coordinate}>
          <Callout tooltip>
            <View style={styles.calloutContainer}>
              <Text style={{ color: "red" }}>Defensoria Pública do</Text>
              <Text style={{ color: "red" }}>Estado de Pernambuco</Text>
            </View>
          </Callout>
        </Marker>
      </Map>

      <View style={styles.local}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.overlay}>
          <Icon name="star" size={20} color="#FFD700" />
          <Text style={styles.ratingText}>5.9</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.outlineContainer}>
            <Text style={styles.abertoTx}>Aberto</Text>
          </View>
          <Text style={{ color: "#40D2A3", fontSize: 10, marginLeft: 200 }}>
            08:00 ás 13:00
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={{ color: "#424242", fontSize: 15 }}>
            Defensoria Pública do {"\n"}Estado de Pernambuco
          </Text>
        </View>

        <View style={styles.row1}>
          <Text style={{ color: "#808380", fontSize: 10 }}>
            Recife - Conde da Boa vista
          </Text>
          <Text style={{ color: "#40D2A3", fontSize: 10, marginLeft: 100 }}>
            Segunda a Sábado
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  local: {
    backgroundColor: "#fff",
    width: 347,
    height: 271,
    position: "absolute",
    bottom: 20,
    left: "7%",
    borderRadius: 15,
    padding: 20,
    marginBottom: 40,
    alignItems: "center",
  },
  image: {
    width: 318,
    height: 157,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  textContainer: {
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
  },
  row1: {
    flexDirection: "row",
  },
  outlineContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#40D2A3",
    borderRadius: 5,
    padding: 3,
    marginRight: 5,
    left: 7,
  },
  abertoTx: {
    color: "#40D2A3",
    fontSize: 10,
  },
  overlay: {
    position: "absolute",
    top: 25,
    left: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 2,
    elevation: 2,
  },
  ratingText: {
    color: "#FFD700",
    fontSize: 10,
    marginLeft: 5,
  },

  calloutContainer: {
    padding: 5,
  },
});
