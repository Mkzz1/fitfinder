import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import MapComponent from "@/components/MapComponent";
import FooterComponent from "@/components/footerAndHeader/footer";

const MapScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MapComponent />
        </ScrollView>
        <FooterComponent />
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
