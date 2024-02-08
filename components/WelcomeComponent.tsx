import { View, Text, Image, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeComponent = () => {
  const router = useRouter();
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
        source={require("../images/mapIcon.png")}
        style={{ width: 250, height: 250 }}
      />
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 20,
          color: "#fff",
        }}
      >
        Discover your ideal gym with FitFinder
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          marginBottom: 5,
          color: "#fff",
        }}
      >
        GymExplorer is the ultimate app for gym enthusiasts.
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          marginBottom: 40,
          color: "#fff",
        }}
      >
        Discover and explore the best gyms in your area.
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() => router.push("/RegisterScreen")}
          style={{
            backgroundColor: "yellow",
            paddingVertical: 20,
            paddingHorizontal: 40,
            borderRadius: 50,
            flex: 1,
            margin: 5,
          }}
        >
          <Text style={{ textAlign: "center" }}>Join Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/LoginScreen")}
          style={{
            backgroundColor: "#F2F2F2",
            paddingVertical: 20,
            paddingHorizontal: 40,
            borderRadius: 50,
            flex: 1,
            margin: 5,
          }}
        >
          <Text style={{ textAlign: "center" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
      onPress={() => router.push("/MainScreen")}
        style={{
          backgroundColor: "transparent",
          paddingVertical: 20,
          paddingHorizontal: 40,
          borderRadius: 50,
          margin: 10,
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff" }}>
          Continue as Guest
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeComponent;
