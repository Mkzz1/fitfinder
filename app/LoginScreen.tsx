import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
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
      />
      <TouchableOpacity
        style={{
          backgroundColor: "yellow",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginBottom: 10,
        }}
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
      <Text style={{ color: "#fff" }}>
        Don't have an account?{" "}
        <Text style={{ fontWeight: "bold" }}>Sign up</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
