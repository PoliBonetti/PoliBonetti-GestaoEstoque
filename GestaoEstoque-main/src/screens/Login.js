import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Platform,
  ScrollView
} from "react-native";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    // Validações dentro da função disparada pelo botão
    if (email.trim() === "") {
      setError("Por favor, digite seu email.");
      return;
    }
    if (password.trim() === "") {
      setError("Por favor, digite sua senha.");
      return;
    }

    if (Platform.OS === "web") {
      alert("Login efetuado com sucesso!");
    } else {
      Alert.alert("Sucesso", "Login efetuado com sucesso!");
    }

    if (navigation) {
      navigation.replace("Home");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <MaterialIcons name="inventory" size={48} color="#110151" />
        </View>
        <Text style={styles.logoText}>EletroGestão</Text>
        <Text style={styles.subtitulo}>Bem-vindo(a)!</Text>
      </View>

      {/* Formulario Login */}
      <View style={styles.card}>
        {/* Mensagem de erro caso ocorra */}
        {error !== "" && (
          <View style={styles.errorBox}>
            <MaterialIcons name="error-outline" size={18} color="#ff0000"/>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {/* Email */}
        <CustomInput
        label="Email"
          placeholder="Digite seu email aqui: abc@abc.com"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if(error) setError("");
          }}
          keyboardType="email-address"
          iconName= "email"
          autoCapitalize="none"
        />

        {/* Senha */}
        <CustomInput
        label="Senha"
        iconName="lock"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={(text) =>{
          setPassword(text);
          if (error) setError("");
        }}
        secureTextEntry={true}
        />

        {/* Senha */}
        <CustomButton
        title="Entrar"
        onPress={handleLogin}
        />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#d5d5d5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1d2b3e',
    letterSpacing: -0.5,
  },
  subtitulo: {
    fontSize: 16, 
    color: 'rgb(134, 134, 134)',
    marginTop: 4,
  }
});