import { useTheme } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = ({ navigation }: any) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 18, color: colors.text }}>
        Settings
      </Text>
      <Button
        title="Home"
        color={colors.primary}
        onPress={() => navigation.pop()}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
