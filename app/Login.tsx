import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const LoginScreen = () => {
  const handleBackPress = () => {
    // Aqui você pode implementar a lógica para voltar à tela inicial
    console.log("Voltar para a tela inicial");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/illustrations/logo.png")}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackPress}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>ENTRAR</Text>
        </View>

        <TextInput style={styles.input} placeholder="CPF ou Email" />

        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>
            Esqueceu sua senha? <Text style={styles.click}>Clique aqui</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Não possui uma conta?</Text>

        <TouchableOpacity style={styles.govButton}>
          <Text style={styles.govButtonText}>CADASTRE-SE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#259A71",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  logoImage: {
    width: 400,
    height: 100,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
    width: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 1,
    textAlign: "center",
    flexGrow: 1,
  },
  input: {
    backgroundColor: "#E4F3E8",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    fontSize: 16,
    color: "#000",
  },
  forgotPassword: {
    color: "#000",
    marginBottom: 40,
    fontWeight: "bold",
  },
  click: {
    color: "#259A71",
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#176438",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 50,
    width: "80%",
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    marginBottom: 15,
    fontWeight: "bold",
  },
  govButton: {
    backgroundColor: "#176438",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  govButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
