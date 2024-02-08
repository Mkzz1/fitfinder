import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import LoginComponent from "@/components/LoginComponent";

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
        <View
          style={{
            flex: 1
          }}
        >
          <LoginComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
