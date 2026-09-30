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
})