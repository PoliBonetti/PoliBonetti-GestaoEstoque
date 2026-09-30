import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Home({ navigation }) {
  //logica 
  const handleLogout = () => {
    const doLogout = () => {
      navigation.replace('Login');
    };
  };
  //Call Back
  const handleNovoProduto = () => {
    navigation.navigate('NovoProduto');
  };
  const handleListaProdutos = () => {
    navigation.navigate('ListaProdutos');
  };
  const handleEstoqueBaixo = () => {
    navigation.navigate('EstoqueBaixo');
  };
  //estilo jsx(itens da tela)
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.boasVindas}>Olá Admin!</Text>
          <Text style={styles.appName}>EletroGestão</Text>

          <TouchableOpacity
            onPress={handleLogout}
            style={styles.sair}
            activeOpacity={0.7}
            accessibilityLabel="Sair do sistema">
            <MaterialIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/*Cards*/}
        <View style={styles.rowCards}>
          <View style={styles.cards}>
            <View style={[styles.metricIconBg, { backgroundColor: '#3c90ff75' }]}>
              <MaterialIcons name="inventory" size={24} color="black" />
            </View>
            <Text style={styles.metricaValue}>20</Text>
            <Text style={styles.metricaLabel}>Total de Produtos</Text>
          </View>

          <View style={styles.cards}>
            <View style={[styles.metricIconBg, { backgroundColor: '#ff3b3b75' }]}>
              <MaterialIcons name="warning" size={24} color="#820c01" />
            </View>
            <Text style={styles.metricaValue}>8</Text>
            <Text style={styles.metricaLabel}>Baixo Estoque</Text>
          </View>

          <View style={styles.cards}>
            <View style={[styles.metricIconBg, { backgroundColor: '#ff3cae75' }]}>
              <MaterialIcons name="category" size={24} color="rgba(255, 0, 179, 0.91)" />
            </View>
            <Text style={styles.metricaValue}>2</Text>
            <Text style={styles.metricaLabel}>Categoria</Text>
          </View>

        </View>

        {/* Botões */}
        <View style={styles.header}>
          <Text style={styles.title}>Ações Rápidas</Text>
        </View>

        <View style={styles.grid}>
          {/* Botão Escuro (Destaque/Primary) */}
          <TouchableOpacity
            onPress={handleNovoProduto}
            style={[styles.cardAcao, styles.primaryCard]}
            activeOpacity={0.8}
          >
            <View style={styles.materialAdd}>
              <MaterialIcons name="add-circle" size={30} color="#addeff" />
            </View>

            <View style={styles.containerTexto}>
              <Text style={styles.cardTitle}>Novo Produto</Text>
              <Text style={styles.cardDescription}>Cadastrar novo produto</Text>
            </View>
            <MaterialIcons name="chevron-right" size={30} color="#c7d3f8" />
          </TouchableOpacity>

          {/* Botão Claro 1 */}
          <TouchableOpacity
            onPress={handleListaProdutos}
            style={styles.cardCard2}
            activeOpacity={0.7}
          >
            <View style={[styles.metricIconBg2, { backgroundColor: "#e2e8f0" }]}>
              <MaterialIcons name="list" size={28} color="#1c3c5c" />
            </View>

            <View style={styles.containerTexto}>
              <Text style={styles.acaoLabel2}>Todos os Produtos</Text>
              <Text style={styles.acaoValue2}>Visualizar todos os produtos</Text>
            </View>

            <MaterialIcons name="keyboard-arrow-right" size={30} color="#1c3c5c" />
          </TouchableOpacity>

          {/* Botão Claro 2 */}
          <TouchableOpacity
            onPress={handleEstoqueBaixo}
            style={styles.cardCard2}
            activeOpacity={0.7}
          >
            <View style={[styles.metricIconBg2, { backgroundColor: "#ffc2c2" }]}>
              <MaterialIcons name="warning" size={26} color="#820c01" />
            </View>

            <View style={styles.containerTexto}>
              <Text style={styles.acaoLabel2}>Produtos com Estoques em Baixo</Text>
              <Text style={styles.acaoValue2}>Visualizar produtos com estoques em baixo</Text>
            </View>

            <MaterialIcons name="keyboard-arrow-right" size={30} color="#1c3c5c" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  boasVindas: {
    fontSize: 13,
    color: "#75777d",
    fontWeight: "500",
  },
  appName: {
    fontSize: 22,
    color: "#1d2b3e",
    fontWeight: "bold"
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f9fb',
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 36,
  },
  sair: {
    width: 40,
    height: 40,
    backgroundColor: '#ffdad6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffb4ab',
  },
  rowCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 10,
  },
  cards: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fbe7e7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  metricaValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b2e3d'
  },
  metricaLabel: {
    fontSize: 11,
    color: '#75777d',
    marginTop: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1d2b3e',
  },
  metricIconBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  metricIconBg2: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardAcao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e0e3e5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  primaryCard: {
    backgroundColor: '#1d2b3e',
    borderColor: '#1d2b3e',
  },
  containerTexto: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  grid: {
    gap: 10,
    marginBottom: 26,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 2,
  },
  cardDescription: {
    fontSize: 13,
    color: '#b5cce3',
  },
  materialAdd: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#6b7a935d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardCard2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e0e3e5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  acaoLabel2: {
    fontSize: 15,
    color: "#1d2b3e",
    fontWeight: "bold",
    marginBottom: 2,
  },
  acaoValue2: {
    fontSize: 12,
    color: "#75777d",
  },
});