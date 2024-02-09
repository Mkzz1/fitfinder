import * as Google from "expo-auth-session/providers/google";
import * as React from "react";
import { Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const GoogleButton = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '796714567015-u63obl7q6406ejpucau6rln4hu2iaonm.apps.googleusercontent.com'
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <FontAwesome.Button name="google" backgroundColor="#4285F4" style={{fontFamily: "Roboto"}} onPress={() => {
        promptAsync();
      }}>
        Login with Google
      </FontAwesome.Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default GoogleButton;
