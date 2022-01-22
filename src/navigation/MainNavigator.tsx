import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "app/hooks";
import React from "react";
import { StatusBar } from "react-native";
import HomeScreen from "screens/HomeScreen";
import ProfileScreen from "screens/ProfileScreen";
import SettingsScreen from "screens/SettingsScreen";
import { DarkTheme, LightTheme } from "themes/Themes";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor:
            mode === "dark"
              ? DarkTheme.colors.background
              : LightTheme.colors.background,
        },
        headerStyle: {
          backgroundColor:
            mode === "dark"
              ? DarkTheme.colors.background
              : LightTheme.colors.background,
        },
        headerTintColor:
          mode === "dark" ? DarkTheme.colors.text : LightTheme.colors.text,
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerRight: () => {
            return (
              <AntDesign
                name="setting"
                size={24}
                color={mode === "dark" ? "white" : "black"}
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate("Settings")}
              />
            );
          },
        })}
      />
      <Drawer.Screen
        name="ProfileDrawer"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <NavigationContainer theme={mode === "dark" ? DarkTheme : LightTheme}>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor:
                mode === "dark"
                  ? DarkTheme.colors.background
                  : LightTheme.colors.background,
            },
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        >
          <Stack.Screen
            name="Home"
            component={MainDrawerNavigator}
            options={{
              headerTitle: "Home",
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={({ navigation }) => ({
              headerTitle: "Settings",
              headerRight: () => {
                return (
                  <Ionicons
                    name="md-home"
                    size={24}
                    color={mode === "dark" ? "white" : "black"}
                    onPress={() => navigation.navigate("Home")}
                  />
                );
              },
              headerShown: true,
            })}
          />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar
        barStyle={mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={mode === "dark" ? "black" : "white"}
      />
    </NavigationContainer>
  );
};

export default MainNavigator;
