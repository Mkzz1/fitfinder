import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2XTc8ySjBnw8I8g4dO8Rjpw-b2mPgPC8",
  authDomain: "fitfinder-b3646.firebaseapp.com",
  projectId: "fitfinder-b3646",
  storageBucket: "fitfinder-b3646.appspot.com",
  messagingSenderId: "839393205538",
  appId: "1:839393205538:web:1b7e02eda67646f66cd97b",
  measurementId: "G-3JPJGDX6MB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Register Success!");
      })
      .catch((error) => {
        Alert.alert("Something went wrong.", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor="#fff"
      />
      <Button title="Sign up" onPress={handleSignUp} />
      <Text style={styles.login}>Already have an account? Log in</Text>
      
      <Button title="Sign in with Apple" onPress={() => {}} />
      <Button title="Sign in with Google" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: "#fff",
  },
  login: {
    color: "#fff",
    marginTop: 16,
  },
});

export default RegisterComponent;
