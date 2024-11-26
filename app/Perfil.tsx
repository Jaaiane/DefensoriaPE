import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#26A076", "#176438"]}
        style={styles.headerGradient}
      >
        {/* Ícone de seta para voltar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            /* Aqui você pode implementar a ação de voltar */
          }}
        >
          <Ionicons name="arrow-back-outline" size={25} color="#fff" />
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
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={24} color="#000000" />
          <Text style={styles.menuText}>Meus dados</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="#000000" />
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>

        <TouchableOpacity style={styles.menuItem}>
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
    backgroundColor: "#f2f2f2",
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
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imgProfile: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginRight: 30,
    marginTop: 100,
  },
  textContainer: {
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginEnd: 30,
    marginBottom: 0,
    marginTop: 50,
  },
  email: {
    fontSize: 14,
    color: "#fff",
  },
  menuContainer: {
    padding: 40,
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
    backgroundColor: "#333",
  },
});
