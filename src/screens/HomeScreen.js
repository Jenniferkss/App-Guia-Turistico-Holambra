import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { height: screenHeight } = Dimensions.get('window');
const HEADER_HEIGHT = 120;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#A62B3E" />

      <View style={styles.header}>
        <Text style={styles.menuIcon}>≡</Text>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>GUIA TURÍSTICO</Text>
          <Text style={styles.headerTitleBold}>HOLAMBRA</Text>
          <Text style={styles.headerSubtitle}>A CIDADE DAS FLORES</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <Image
          source={{ uri: 'https://i0.wp.com/www.rotadasaguas.com.br/wp-content/uploads/2023/02/328246736_640505964744209_6560620166913972024_n.jpg?fit=800%2C533&ssl=1' }}
          style={styles.mainImage}
          resizeMode="cover"
        />

        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionMainTitle}>Sobre</Text>
          <Text style={styles.sectionMainSubtitle}>Conheça Holambra na perspectiva histórica</Text>
        </View>

        <View style={styles.sectionBody}>
          <Text style={styles.sectionTitle}>🌷 Nossa História: Onde o Brasil Floresceu Holandês</Text>
          <Text style={styles.paragraph}>
            A história de Holambra é um relato de coragem, resiliência e, acima de tudo, da transformação de campos áridos em um mar de cores. Tudo começou com um sonho de reconstrução após um dos períodos mais sombrios da humanidade. Em 1948, a Holanda ainda tentava se reerguer dos escombros da Segunda Guerra Mundial. Com o país superpovoado e sem terras para cultivar, centenas de famílias decidiram cruzar o Atlântico. O destino? A antiga Fazenda Ribeirão, no interior de São Paulo.
          </Text>
          <Text style={styles.paragraph}>
            O nome da colônia nasceu de uma mistura de identidades que hoje nos define:
          </Text>
          <Text style={styles.highlightText}>
            HOL (Holanda) + AM (América) + BRA (Brasil) = HOLAMBRA
          </Text>
        </View>

        <View style={styles.sectionBody}>
          <Text style={styles.sectionTitle}>🌷 Curiosidade</Text>
          <Text style={styles.paragraph}>
            Você sabia que, no início, o plano não eram as flores? Os primeiros imigrantes trouxeram gado holandês para produzir leite e queijos. Porém, as pragas e o clima tropical desafiaram os colonos.
          </Text>
          <Text style={styles.paragraph}>
            Foi então que a persistência holandesa brilhou: eles perceberam que o clima da região era perfeito para algo muito mais delicado. Na década de 1950, as primeiras mudas de flores começaram a ser cultivadas, transformando a colônia na maior cooperativa de flores das Américas.
          </Text>
        </View>

        <View style={styles.sectionBody}>
          <Text style={styles.sectionTitle}>🌷 De Colônia a Município</Text>
          <Text style={styles.paragraph}>
            Por décadas, Holambra foi um segredo bem guardado dentro de cidades vizinhas. Foi apenas in 1991 que a colônia conquistou sua emancipação, tornando-se oficialmente um município.
          </Text>
          <Text style={styles.paragraph}>
            Hoje, ao caminhar por nossas ruas, você não vê apenas uma arquitetura bonita; você vê o legado dos pioneiros que trouxeram suas tradições, sua língua e sua paixão pela terra, fundindo o rigor europeu com o calor do coração brasileiro.
          </Text>
        </View>

        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionMainTitle}>Contato</Text>
          <Text style={styles.sectionMainSubtitle}>Em caso de dúvidas, entre em contato</Text>
        </View>

        <View style={styles.sectionBody}>
          <Text style={styles.sectionTitle}>🌷 Central de Atendimento ao Cidadão</Text>
          <Text style={styles.paragraph}>
            Precisa de ajuda ou quer saber mais sobre nossa cidade? Escolha o canal de sua preferência:
          </Text>
          <Text style={styles.subLabel}>Prefeitura Municipal de Holambra</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              <Text style={styles.bold}>Endereço:</Text> Rua Paiva, 300 - Centro, Holambra - SP, CEP 13825-000
            </Text>
          </View>
          <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              <Text style={styles.bold}>Horário de Funcionamento:</Text> Segunda a Sexta, das 08:00 às 17:00
            </Text>
          </View>
        </View>

        <View style={styles.sectionBody}>
          <Text style={styles.sectionTitle}>🌷 Canais Digitais</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              <Text style={styles.bold}>WhatsApp Oficial:</Text> (19) XXXX-XXXX (Link direto para conversa)
            </Text>
          </View>
          <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              <Text style={styles.bold}>E-mail Geral:</Text> contato@holambra.sp.gov.br
            </Text>
          </View>
        </View>

        <View style={styles.sectionBody}>
          <Text style={styles.sectionTitle}>🌷 Redes Sociais</Text>
          <Text style={styles.paragraph}>
            Siga a prefeitura para ficar por dentro de eventos e avisos importantes:
          </Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              <Text style={styles.bold}>Instagram:</Text> @prefeituraholambra
            </Text>
          </View>
          <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>
              <Text style={styles.bold}>Facebook:</Text> /prefeituraholambra
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9ECEF',
  },
  header: {
    backgroundColor: '#A62B3E',
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  menuIcon: {
    color: '#FFF',
    fontSize: 28,
    marginRight: 15,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 30,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'serif',
  },
  headerTitleBold: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'serif',
    fontWeight: 'bold',
    lineHeight: 26,
  },
  headerSubtitle: {
    color: '#FFF',
    fontSize: 10,
    letterSpacing: 1,
    marginTop: 2,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  mainImage: {
    width: '100%',
    height: screenHeight - HEADER_HEIGHT - 65,
  },
  sectionHeaderContainer: {
    backgroundColor: '#A62B3E',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 15,
  },
  sectionMainTitle: {
    color: '#FFF',
    fontSize: 22,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  sectionMainSubtitle: {
    color: '#FFF',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 2,
  },
  sectionBody: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#A62B3E',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    color: '#495057',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'justify',
    marginBottom: 6,
  },
  subLabel: {
    color: '#495057',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  highlightText: {
    color: '#A62B3E',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
    paddingLeft: 4,
  },
  bullet: {
    color: '#A62B3E',
    fontSize: 14,
    marginRight: 6,
    lineHeight: 18,
  },
  bulletText: {
    color: '#495057',
    fontSize: 13,
    flex: 1,
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
});
