import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

interface SearchProps extends TextInputProps {}

export function Search({ ...props }: SearchProps) {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="#64748b" />
      <TextInput placeholder="Pesquisar" style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
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
