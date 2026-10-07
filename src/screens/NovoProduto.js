import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    Alert,
    Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
//importação da API (service)

export default function NovoProduto({ navigation }) {

    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    style={styles.ScrollView}
                >
                    {/*Cabeçalho e botão voltar*/}
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}
                            accessibilityLabel="Voltar"
                            style={styles.btnVoltar}
                        >
                            <MaterialIcons name="arrow-back" size={22} color="#283984" />
                        </TouchableOpacity>

                        <View style={styles.tituloContainer}>
                            <Text style={styles.titulo}>Gestão de Estoque</Text>
                            <Text style={styles.subtitulo}>Novo Produto</Text>
                        </View>
                    </View>

                    {/*Bnner informtaivo*/}
                    <View style={styles.infoBanner}>
                        <MaterialIcons name="info-outline" size={24} color="black" />
                        <Text style={styles.infoBannerText}>Preencha as informações técnicas para incluir um novo produto.</Text>
                    </View>

                    {/*Formulário sessão 1 - Informações básicas e identificação*/}
                    <View style={styles.cardSessao}>

                        <View style={styles.cardSessaoHeader}>
                            <View style={[styles.cardSessaoIcon, { backgroundColor: '#e2e8f0' }]}>
                                <MaterialIcons name="inventory-2" size={24} color="#283984" />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.cardSessaoTitulo}>1. Identificação Geral</Text>
                            <Text style={styles.cardSessaoSubtitulo}>Dados principais do produto</Text>
                        </View>

                        {/*1 nome do produto*/}
                        <CustomInput
                            label="Nome do Produto*"
                            placeholder="Digite o nome do produto"
                            value={""}
                            onChangeText={(text) => { }}
                            error={""}
                        >
                        </CustomInput>

                        <CustomInput
                            label="Categoria*"
                            placeholder="Ex.: Smartphones, Notebooks, TVs, Áudio..."
                            value={""}
                            onChangeText={(text) => { }}
                            error={""}
                        >
                        </CustomInput>

                        <CustomInput
                            label="Fabricante/Marca*"
                            placeholder="Ex.: Apple, Samsung, Dell, Sony..."
                            value={""}
                            onChangeText={(text) => { }}
                            error={""}
                        >
                        </CustomInput>

                        <CustomInput
                            label="Número do Lote*"
                            placeholder="Ex.: 12345..."
                            value={""}
                            onChangeText={(text) => { }}
                            error={""}
                        >
                        </CustomInput>

                        <CustomInput
                            label="Descrição Detalhada*"
                            placeholder="Descreva as principais características do produto."
                            value={""}
                            onChangeText={(text) => { }}
                            error={""}
                            multiline={true}
                            numberOfLines={4}
                        >
                        </CustomInput>
                    </View>

                    {/*Formulário sessão 2 - Informações de estoque e preços*/}
                    <View style={styles.cardSessao}>

                        <View style={styles.cardSessaoHeader}>
                            <View style={[styles.cardSessaoIcon, { backgroundColor: '#e2e8f0' }]}>
                                <MaterialIcons name="attach-money" size={24} color="black" />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.cardSessaoTitulo}>2. Valores e Controle de Estoque</Text>
                            <Text style={styles.cardSessaoSubtitulo}>Informações sobre preços e estoque</Text>
                        </View>

                        {/*1 Informações de preço e estoque*/}
                        <CustomInput
                            label="Preço (R$)*"
                            placeholder="Ex.: 1999.99"
                            value={""}
                            onChangeText={(text) => { }}
                            error={""}
                        >
                        </CustomInput>

                        <CustomInput
                            label="Estoque Mínimo*"
                            placeholder="Ex.: 10, 20, 50..."
                            value={""}
                            onChangeText={(text) => { }}
                            error={""}
                        >
                        </CustomInput>

                        <CustomInput
                            label="Cor/Acabamento*"
                            placeholder="Ex.: Preto, Azul, Rosa..."
                            value={""}
                            onChangeText={(text) => { }}
                            error={""}
                        >
                        </CustomInput>

                    </View>                    

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

//Styles
const styles = StyleSheet.create({
    tituloContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    titulo: {
        fontSize: 12,
        color: '#283984',
        fontWeight: "500",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    subtitulo: {
        fontSize: 20,
        color: '#283984',
        fontWeight: 'bold',
    },
    infoBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e2e8f0',
        padding: 12,
        borderRadius: 10,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#283984',
        gap: 10,
    },
    infoBannerText: {
        flex: 1,
        fontSize: 12,
        color: '#283984',
        lineHeight: 18,
    },
    cardSessao: {
        backgroundColor: "#ffffff",
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#e0e3e5",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
    },
    cardSessaoHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f1f5f9",
        gap: 10,
    },
    cardSessaoIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    cardSessaoTitulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#1d2b3e",
    },
    cardSessaoSubtitulo: {
        fontSize: 11,
        color: "#75777d",
        marginTop: 1,
    },
})