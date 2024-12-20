import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, router } from "expo-router";

export default function Perfil() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#26A076", "#176438"]}
        style={styles.headerGradient}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            router.push("/screens/Home");
          }}
        >
          {/* <Ionicons name="arrow-back-outline" size={25} color="#fff" /> */}
        </TouchableOpacity>

        <View style={styles.header}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: "https://th.bing.com/th/id/R.902fb01972a7d62c03d6bf23c5b16dae?rik=BednsWHWMl1r5g&pid=ImgRaw&r=0",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Everalda Silveira</Text>
            <Text style={styles.email}>everaldasilveira@gmail.com</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/screens/Auth/MeusDados")}
        >
          <Ionicons name="person-outline" size={24} color="#000000" />
          <Text style={styles.menuText}>Meus Dados</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/screens/Perfil/Configuracao")}
        >
          <Ionicons name="settings-outline" size={24} color="#000000" />
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            router.push("/screens/Ajuda/Ajuda");
          }}
        >
          <Ionicons name="help-circle-outline" size={24} color="#000000" />
          <Text style={styles.menuText}>Ajuda</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="log-out-outline" size={24} color="#000000" />
          <Text style={styles.menuText}>Sair</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f2f2",
  },
  headerGradient: {
    width: "100%",
    height: 168,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 50,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 40,
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    // alignItems: "center",
    // paddingHorizontal: 100,
  },
  imgProfile: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginRight: 50,
    marginTop: 90,
  },
  textContainer: {
    justifyContent: "center",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    // marginEnd: 20,
    // marginBottom: 0,
    marginTop: 50,
  },
  email: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
  },
  menuContainer: {
    padding: 35,
    marginTop: 40,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
  },
  menuText: {
    fontSize: 15,
    marginLeft: 10,
    color: "#000000",
  },
  separator: {
    height: 1,
    backgroundColor: "#D9D9D9",
  },
});
