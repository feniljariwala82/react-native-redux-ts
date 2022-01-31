import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { decrement, increment } from "features/counter/counterSlice";
import { toggle } from "features/theme/themeSlice";
import React, { useState } from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }: any) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector((state) => state.counter.value);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    dispatch(toggle());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.body, { color: colors.text }]}>
        Current Count: {counterValue}
      </Text>
      <View style={styles.btnGroup}>
        <Button
          title="Increment"
          onPress={() => dispatch(increment())}
          color={colors.primary}
        />
        <Button
          title="Decrement"
          onPress={() => dispatch(decrement())}
          disabled={counterValue === 0 ? true : false}
          color={colors.primary}
        />
      </View>
      {/* Toggle */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={[
              styles.body,
              { color: colors.text, marginTop: 20, marginRight: 10 },
            ]}
          >
            Toggle Theme
          </Text>
        </View>
        <View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <Button
        title="Settings"
        color={colors.primary}
        onPress={() => navigation.navigate("Settings")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "open-regular",
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
