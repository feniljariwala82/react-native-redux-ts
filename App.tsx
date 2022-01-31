import MainNavigator from "navigation/MainNavigator";
import React from "react";
import { StyleSheet, LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_300Light,
  OpenSans_400Regular_Italic,
} from "@expo-google-fonts/open-sans";

// Ignore all log notifications:
LogBox.ignoreAllLogs();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-regular": OpenSans_400Regular,
    "open-bold": OpenSans_700Bold,
    "open-thin": OpenSans_300Light,
    "open-italic": OpenSans_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider style={styles.container}>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
