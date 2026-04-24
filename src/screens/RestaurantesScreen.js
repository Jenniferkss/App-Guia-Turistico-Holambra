import React, { useState } from 'react';  
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RESTAURANTES_DATA = [
  {
    id: '1',
    title: 'Lago do Holandês',
    experiencia: 'Ambiente tranquilo e sofisticado localizado à beira do lago, ideal para quem busca fugir da movimentação central.',
    pontoForte: 'Especialista em carnes nobres e pratos contemporâneos, com um deck perfeito para apreciar o pôr do sol.',
    image: require('../../assets/images/lago-holandes.png'),
  },
  {
    id: '2',
    title: 'Martin Holandesa',
    experiencia: 'Um mergulho na tradição local, funcionando como restaurante e confeitaria no coração do centro turístico.',
    pontoForte: 'Referência em pratos típicos como o joelho de porco e famoso mundialmente pela sua confeitaria artesanal.',
    image: require('../../assets/images/martin-holandesa.png'),
  },
  {
    id: '3',
    title: 'Casa Bela',
    experiencia: 'Um refúgio charmoso com pátio arborizado que remete às vilas europeias, oferecendo um clima acolhedor e familiar.',
    pontoForte: 'Versatilidade no cardápio, servindo desde massas e risotos até sobremesas exclusivas de alta qualidade.',
    image: require('../../assets/images/casa-bela.png'),
  },
];

export default function App() {

  const [favoritos, setFavoritos] = useState([]);


  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {

      setFavoritos(favoritos.filter((favId) => favId !== id));
    } else {

      setFavoritos([...favoritos, id]);
    }
  };

  const renderItem = ({ item }) => {

    const isFavorito = favoritos.includes(item.id);

    return (
      <View style={styles.card}>
    
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.cardImage} />
          
          <TouchableOpacity 
            style={styles.favoriteButton}
            onPress={() => toggleFavorito(item.id)}
          >
            <Ionicons 
              name={isFavorito ? "heart" : "heart-outline"}
              size={24} 
              color={isFavorito ? "#9B2D3C" : "#FFF"}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          
          <Text style={styles.cardDescription}>
            <Text style={styles.boldText}>A Experiência: </Text>
            {item.experiencia}
          </Text>
          
          <Text style={styles.cardDescription}>
            <Text style={styles.boldText}>Ponto Forte: </Text>
            {item.pontoForte}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9B2D3C" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Restaurantes</Text>
      </View>

      <FlatList
        data={RESTAURANTES_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Inicio</Text>
        <Text style={styles.navItem}>Pontos turisticos</Text>
        <View style={styles.navItemActiveContainer}>
          <Text style={styles.navItemActive}>Restaurantes</Text>
          <View style={styles.activeIndicator} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E8E8',
  },
  header: {
    backgroundColor: '#9B2D3C',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '400',
    fontFamily: 'serif',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F0F2F2',
    borderRadius: 12,
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#555',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
 
  imageContainer: {
    marginRight: 12,
    position: 'relative',
  },
  cardImage: {
    width: 110,
    height: 160,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  
  favoriteButton: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 15,
    padding: 4,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#65829D',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  cardDescription: {
    fontSize: 10,
    color: '#000',
    marginBottom: 6,
    lineHeight: 14,
  },
  boldText: {
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#5A6F49',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  navItemActiveContainer: {
    alignItems: 'center',
  },
  navItemActive: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeIndicator: {
    width: 20,
    height: 3,
    backgroundColor: '#FFF',
    borderRadius: 2,
    marginTop: 4,
  },
});