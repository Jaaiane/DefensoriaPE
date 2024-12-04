import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from 'expo-router';

// Define o tipo para os dados do formulário
type FormData = {
  name: string;
  cpf: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

// Define o tipo para os erros
type FormErrors = {
  cpf: string;
  password: string;
  confirmPassword: string;
};

const RegisterScreen = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cpf: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const handleBackPress = () => {
    router.push('/Home')
  };

  // Função para validar o CPF
  const validateCPF = (value: string): boolean => {
    const regex = /^\d+$/; // Aceita apenas números
    return regex.test(value);
  };

  // Função para verificar a força da senha
  const checkPasswordStrength = (value: string): string => {
    if (value.length < 6) return "Fraca";
    if (value.length < 10) return "Moderada";
    return "Forte";
  };

  // Função para lidar com mudanças de input
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));

    // Validação específica por campo
    if (field === "cpf") {
      if (validateCPF(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, cpf: "" }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          cpf: "CPF deve conter apenas números.",
        }));
      }
    }

    if (field === "password") {
      const strength = checkPasswordStrength(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          strength === "Fraca"
            ? "A senha é fraca."
            : strength === "Moderada"
            ? "A senha é moderada."
            : "",
      }));
    }

    if (field === "confirmPassword") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword:
          value !== formData.password ? "As senhas não coincidem." : "",
      }));
    }
  };

  const FormField = ({
    label,
    placeholder,
    value,
    onChangeText,
    error,
    secureTextEntry,
    keyboardType,
  }: {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    secureTextEntry?: boolean;
    keyboardType?: TextInputProps["keyboardType"];
  }) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        returnKeyType="done"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/* Header Verde */}
          <View style={styles.header}>
            <Text style={styles.welcomeText}>
              Bem-vindos.{"\n"}Crie sua conta agora
            </Text>
            <Image
              source={require("../assets/illustrations/logo.png")}
              style={styles.logo}
            />
          </View>

          {/* Conteúdo do Formulário */}
          <View style={styles.formContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={handleBackPress}>
                <Ionicons name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.title}>Cadastrar</Text>
            </View>

            {/* Campos do Formulário */}
            <FormField
              label="Nome Completo"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChangeText={(text) => handleInputChange("name", text)}
            />
            <FormField
              label="CPF"
              placeholder="Somente números"
              keyboardType="numeric"
              value={formData.cpf}
              onChangeText={(text) => handleInputChange("cpf", text)}
              error={errors.cpf}
            />
            <FormField
              label="Email"
              placeholder="email@exemplo.com.br"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
            <FormField
              label="Confirme o email"
              placeholder="Digite novamente seu email"
              keyboardType="email-address"
              value={formData.confirmEmail}
              onChangeText={(text) =>
                handleInputChange("confirmEmail", text)
              }
            />
            <FormField
              label="Senha"
              placeholder="Digite sua senha"
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
              error={errors.password}
            />
            {formData.password && (
              <Text style={styles.passwordStrength}>
                Força da senha: {checkPasswordStrength(formData.password)}
              </Text>
            )}
            <FormField
              label="Confirme a senha"
              placeholder="Confirme sua senha"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(text) =>
                handleInputChange("confirmPassword", text)
              }
              error={errors.confirmPassword}
            />

            {/* Botão de Cadastrar */}
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#259A71",
  },
  header: {
    backgroundColor: "#259A71",
    paddingTop: 90,
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: "relative",
  },
  welcomeText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    position: "absolute",
    right: 20,
    top: 10,
    width: 90,
    height: 70,
    resizeMode: "contain",
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
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#E4F3E8",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: "#000",
  },
  registerButton: {
    backgroundColor: "#176438",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  passwordStrength: {
    color: "#333",
    fontSize: 14,
    marginTop: 5,
  },
});

export default RegisterScreen;
