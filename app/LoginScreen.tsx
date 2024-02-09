import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import LoginComponent from "@/components/LoginComponent";
import GoogleButton from "@/components/signInButtons/google";
import CountryHeaderComponent from "@/components/footerAndHeader/flagHeader";

const LoginScreen = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <CountryHeaderComponent />
        <View
          style={{
            flex: 1
          }}
        >
          <LoginComponent />
          <GoogleButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
