import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

interface HeaderProps {
  userName: string;
  location: string;
}

const { height } = Dimensions.get("window");

const Header: React.FC<HeaderProps> = ({ userName, location }) => {
  return (
    <>
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
          <Text style={styles.greetingText}>Olá, {userName}</Text>
          <Text style={styles.welcomeText}>Bem-vindo ao DP PE.</Text>
          <View style={styles.locationContainer}>
            <Feather name="map-pin" size={14} color="white" />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  headerGradient: {
    width: "100%",
    height: height * 0.25,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  imgProfile: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  textContainer: {
    alignItems: "flex-start",
    width: "90%",
  },
  greetingText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  welcomeText: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    color: "white",
    marginLeft: 5,
  },
});

export default Header;
