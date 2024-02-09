import React from 'react';
import { View, Text, Button, Switch, StyleSheet, Alert } from 'react-native';
import { signOut, deleteUser } from "@firebase/auth";
import { auth } from "@/firebaseConfig";
import { router } from 'expo-router';

const ProfileComponent = () => {
  const [isSwitchOn, setSwitch] = React.useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/LoginScreen")
      })
      .catch((error) => {
        Alert.alert("Something went wrong.", error.message);
      });
  };

  const handleDeleteAccount = () => {
    if (auth.currentUser) {
      deleteUser(auth.currentUser)
        .then(() => {
          Alert.alert("Account deletion success!");
          router.push("/RegisterScreen")
        })
        .catch((error) => {
          Alert.alert("Something went wrong.", error.message);
        });
    } else {
      Alert.alert("No user is currently logged in.");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>email@email.com</Text>
      <Button title="Change" onPress={() => {}} />
      <Text style={styles.subtitle}>(+123) 000 111 222 333</Text>
      <Button title="Change" onPress={() => {}} />
      <Text style={styles.subtitle}>New York, USA</Text>
      <Button title="Change" onPress={() => {}} />
      <Text style={styles.sectionTitle}>Manage Permissions</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Save Data Locally</Text>
        <Switch value={isSwitchOn} onValueChange={setSwitch} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Allow Location Access</Text>
        <Switch value={isSwitchOn} onValueChange={setSwitch} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Enable Face ID</Text>
        <Switch value={isSwitchOn} onValueChange={setSwitch} />
      </View>
      <Button title="Logout" onPress={handleLogout} />
      <Button title="Delete Account" onPress={handleDeleteAccount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  switchLabel: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ProfileComponent;
