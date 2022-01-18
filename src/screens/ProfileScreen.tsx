import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

const ProfileScreen = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text, fontSize: 18 }}>Profile</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
