import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MainMenuComponent = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Find Your Perfect Gym</Text>
          <Text style={styles.subtitle}>
            Get fit and stay healthy with GymExplorer
          </Text>
          <Text style={styles.sectionTitle}>Discover Gym Perfect for you</Text>
          <TouchableOpacity style={styles.largeButton}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Choose by Location</Text>
          <View style={styles.grid}>
            <TouchableOpacity style={styles.smallButton}>
              <Text style={styles.buttonText}>Nearby Gyms</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallButton}>
              <Text style={styles.buttonText}>Popular Gyms</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallButton}>
              <Text style={styles.buttonText}>24/7 Gyms</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallButton}>
              <Text style={styles.buttonText}>Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#000",
      },
      title: {
        fontSize: 32,
        color: "#fff",
        marginBottom: 16,
      },
      subtitle: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 16,
      },
      sectionTitle: {
        fontSize: 24,
        color: "#fff",
        marginBottom: 8,
      },
      largeButton: {
        backgroundColor: "#2F2F2F",
        padding: 20,
        borderRadius: 10,
        marginBottom: 16,
      },
      smallButton: {
        backgroundColor: "#2F2F2F",
        padding: 20,
        borderRadius: 10,
        margin: 8,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      buttonText: {
        color: "#fff",
        textAlign: "center",
      },
      grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
    });
    
export default MainMenuComponent;
