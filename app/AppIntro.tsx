import React, { useState, useRef } from 'react';
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
  StatusBar
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    text: 'Na jornada da vida, todos nós enfrentamos desafios. Às vezes, esses desafios podem parecer grandes demais para enfrentar sozinhos.',
    image: require('../assets/illustrations/image1.png'),
  },
  {
    id: '2',
    text: 'Mas você não está sozinho. A Defensoria Pública está aqui para ajudar.',
    image: require('../assets/illustrations/image2.png'),
  },
  {
    id: '3',
    text: 'Com o nosso aplicativo, você pode acessar serviços jurídicos gratuitos, agendar atendimentos, e receber orientações sobre seus direitos.',
    image: require('../assets/illustrations/image3.png'),
  },
  {
    id: '4',
    text: 'Seja bem-vindo ao seu espaço de apoio e justiça! Vamos juntos encontrar a solução para o seu problema.',
    image: require('../assets/illustrations/image4.png'),
  },
];

const AppIntro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const router = useRouter();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);
  };

  const handleSkip = () => { 
    router.push('/Home') 
  };

  const renderSlide = (slide: typeof slides[0]) => (
    <View key={slide.id} style={styles.slide}>
      <View style={styles.imageContainer}>
        <Image source={slide.image} style={styles.image} />
      </View>
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
        <Image source={require('../assets/illustrations/logo.png')} style={styles.logoImage} />
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
        <View style={styles.dotsContainer}>
          {renderDots()}
        </View>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>PULAR</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E8F66',
  },
  header: {
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: 'flex-end',
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '50%',
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginRight: 8,
  },
  skipButton: {
    padding: 10,
    marginLeft: 'auto',
  },
  skipText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppIntro;
