import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/firebaseConfig";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/MainScreen");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
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
      <Image
        source={require("../images/welcomeIcon.png")}
        style={{ width: 250, height: 250 }}
      />
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
        placeholderTextColor="#B1B1B1"
        style={{
          backgroundColor: "#2F2F2F",
          width: "80%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 25,
          color: "#fff"
        }}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#B1B1B1"
        style={{
          backgroundColor: "#2F2F2F",
          width: "80%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 25,
          color: "#fff"
        }}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#E1F423",
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
        <Text style={{ color: "#fff" }}>Forgot your password?</Text>
      </View>
      <Text style={{ color: "#fff" }} onPress={() => router.push("/RegisterScreen")}>
        Don't have an account?{" "}
        <Text style={{ fontWeight: "bold" }}>Sign up</Text>
      </Text>
    </View>
  );
};

export default LoginComponent;
