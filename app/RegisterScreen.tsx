import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import RegisterComponent from "@/components/RegisterComponent";

const RegisterScreen = () => {

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
          <RegisterComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
