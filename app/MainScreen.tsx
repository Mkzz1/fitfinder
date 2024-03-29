import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import MainMenuComponent from "@/components/MainMenuComponent";
import FooterComponent from "@/components/footerAndHeader/footer";
import CountryHeaderComponent from "@/components/footerAndHeader/flagHeader";

const MainScreen = () => {
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
        <CountryHeaderComponent />
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainMenuComponent />
        </ScrollView>
        <FooterComponent />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
