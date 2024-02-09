import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import ProfileComponent from "@/components/SettingsComponent";
import FooterComponent from "@/components/footerAndHeader/footer";

const SettingsComponent = () => {
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
          <ProfileComponent />
        </ScrollView>
        <FooterComponent />
      </View>
    </SafeAreaView>
  );
};

export default SettingsComponent;
