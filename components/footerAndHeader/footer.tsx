import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FooterComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/MainScreen")}>
        <Icon name="home" size={30} color="#fff" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="heart" size={30} color="#fff" />
        <Text style={styles.text}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/SettingsScreen")}>
        <Icon name="user" size={30} color="#fff" />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2F2F2F',
    padding: 10,
  },
  button: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default FooterComponent;
