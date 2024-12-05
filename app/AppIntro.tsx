import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    text: "Na jornada da vida, todos nós enfrentamos desafios. Às vezes, esses desafios podem parecer grandes demais para enfrentar sozinhos.",
    image: require("../assets/illustrations/image1.png"),
  },
  {
    id: "2",
    text: "Mas você não está sozinho. A Defensoria Pública está aqui para ajudar.",
    image: require("../assets/illustrations/image2.png"),
  },
  {
    id: "3",
    text: "Com o nosso aplicativo, você pode acessar serviços jurídicos gratuitos, agendar atendimentos e receber orientações sobre seus direitos.",
    image: require("../assets/illustrations/image3.png"),
  },
  {
    id: "4",
    text: "Seja bem-vindo ao seu espaço de apoio e justiça! Vamos juntos encontrar a solução para o seu problema.",
    image: require("../assets/illustrations/image4.png"),
  },
];

export default function AppIntro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const router = useRouter();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);

    // Redirecionar automaticamente ao final
    if (index === slides.length - 1) {
      handleCompleteIntro();
    }
  };

  // Função para concluir a introdução
  const handleCompleteIntro = async () => {
    try {
      await AsyncStorage.setItem("hasSeenIntro", "true"); // Salva no AsyncStorage
      router.replace("/screens/Home"); // Verifique se esse caminho está correto
    } catch (error) {
      console.error("Erro ao salvar no AsyncStorage:", error);
    }
  };

  const renderSlide = (slide: any) => (
    <View key={slide.id} style={styles.slide}>
      <Image source={slide.image} style={styles.image} />
      <Text style={styles.text}>{slide.text}</Text>
    </View>
  );

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[styles.dot, { opacity: index === currentIndex ? 1 : 0.5 }]}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1E8F66"
        translucent={false}
      />

      <View style={styles.header}>
        <Image
          source={require("../assets/illustrations/logo.png")}
          style={styles.logoImage}
        />
      </View>

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={styles.scrollContainer}
      >
        {slides.map(renderSlide)}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.dotsWrapper}>{renderDots()}</View>
        <TouchableOpacity onPress={handleCompleteIntro} style={styles.skipButton}>
          <Text style={styles.skipText}>PULAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E8F66",
  },
  header: {
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: "flex-end",
  },
  logoImage: {
    width: 100,
    height: 40,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  slide: {
    width: width,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
  },
  footer: {
    paddingBottom: 30,
  },
  dotsWrapper: {
    marginBottom: 10,
    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFF",
    marginRight: 8,
  },
  skipButton: {
    alignSelf: "center",
    padding: 10,
  },
  skipText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
