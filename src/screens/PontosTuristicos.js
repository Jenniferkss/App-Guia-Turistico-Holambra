import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';

const CardPontoTuristico = ({ titulo, oQueTem, diferencial, visitacao, imagemSource }) => (
  <View style={styles.card}>
    <Image source={imagemSource} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{titulo}</Text>

      <Text style={styles.textItem}>
        <Text style={styles.label}>O que tem: </Text>{oQueTem}
      </Text>

      <Text style={styles.textItem}>
        <Text style={styles.label}>Diferencial: </Text>{diferencial}
      </Text>

      <Text style={styles.textItem}>
        <Text style={styles.label}>Visitação: </Text>{visitacao}
      </Text>
    </View>
  </View>
);

export default function PontosTuristicos() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pontos Turísticos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <CardPontoTuristico
          titulo="Bloeman Park"
          oQueTem="Campos de rosas, girassóis, lavandas e diversas flores sazonais."
          diferencial="Possui infraestrutura completa (banheiros, lanchonetes) e cenários prontos (balanços e portais)."
          visitacao="É pago e funciona o ano todo, sendo um dos maiores campos de flores abertos ao público na cidade."
          imagemSource={{ uri: 'https://via.placeholder.com/120x150' }}
        />

        <CardPontoTuristico
          titulo="Moinho Povos Unidos"
          oQueTem="Moinho holandês de 38m com mirante panorâmico e jardins para fotos."
          diferencial="Réplica fiel e funcional, sendo um dos maiores moinhos da América Latina."
          visitacao="Gratuito para fotos externas; subida ao mirante é paga. Localizado na entrada da cidade."
          imagemSource={{ uri: 'https://via.placeholder.com/120x150' }}
        />

        <CardPontoTuristico
          titulo="Rua dos guardas chuvas coloridos"
          oQueTem="Corredor com centenas de guarda-chuvas coloridos substituindo o teto."
          diferencial="Ponto turístico mais icônico para fotos rápidas e vibrantes na cidade."
          visitacao="Gratuito, ao ar livre e com acesso livre 24h."
          imagemSource={{ uri: 'https://via.placeholder.com/120x150' }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E4E5',
  },
  header: {
    backgroundColor: '#a32d3e',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'serif',
    fontWeight: '400',
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 30, // Reduzido o padding inferior já que não precisa desviar da barra flutuante fixa
  },
  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#999',
    shadowOpacity: 0.1,
  },
  cardImage: {
    width: 120,
    height: 150,
    borderRadius: 12,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7B93B1',
    marginBottom: 8,
  },
  textItem: {
    fontSize: 12,
    color: '#333',
    marginBottom: 6,
    lineHeight: 16,
  },
  label: {
    fontWeight: 'bold',
  },
});
