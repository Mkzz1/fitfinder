import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import WelcomeComponent from "@/components/WelcomeComponent";

const WelcomeScreen = () => {

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
          <WelcomeComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
