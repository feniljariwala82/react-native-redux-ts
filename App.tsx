import MainNavigator from "navigation/MainNavigator";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
