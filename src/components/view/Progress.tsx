import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const Progress = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.progress}>
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  progress: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
