import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
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

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Login Success!");
      })
      .catch((error) => {
        Alert.alert("Something went wrong.", error.message);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#fff",
          marginBottom: 10,
        }}
      >
        Hello again!
      </Text>
      <Text style={{ fontSize: 16, color: "#fff", marginBottom: 20 }}>
        Welcome back to the Gym Finder app
      </Text>
      <TextInput
        placeholder="Username"
        style={{
          backgroundColor: "#fff",
          width: "80%",
          padding: 10,
          marginBottom: 10,
        }}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={{
          backgroundColor: "#fff",
          width: "80%",
          padding: 10,
          marginBottom: 10,
        }}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "yellow",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={handleLogin}
      >
        <Text style={{ textAlign: "center" }}>Log in</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#fff" }}>Remember me</Text>
        <Text style={{ color: "#fff" }}>Forgot your password?</Text>
      </View>
      <Text style={{ color: "#fff", marginBottom: 10 }}>
        or log in with your Gym
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#4285F4",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            flex: 1,
            margin: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#3b5998",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            flex: 1,
            margin: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: "#fff" }} onPress={() => router.push("/RegisterScreen")}>
        Don't have an account?{" "}
        <Text style={{ fontWeight: "bold" }}>Sign up</Text>
      </Text>
    </View>
  );
};

export default LoginComponent;
