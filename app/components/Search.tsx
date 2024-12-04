import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface SearchProps extends TextInputProps {}

function Search({ ...props }: SearchProps) {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.keyboardAvoidingContainer}>
      <View style={styles.container}>
        <Feather name="search" size={24} color="#64748b" />
        <TextInput placeholder="Pesquisar" style={styles.input} {...props} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
  },

  container: {
    width: "85%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#64748b",
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "white",
    marginTop: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "transparent",
  },
});

export default Search;
