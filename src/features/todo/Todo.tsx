import { useTheme } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TodoType } from "types";

function Todo (props: TodoType) {
  const { id, userId, title, completed } = props;
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { borderColor: colors.text }]}>
      <View style={styles.leftView}>
        <Text style={{ color: colors.text }}>
          {id}. {title}
        </Text>
      </View>
      <View style={styles.rightView}>
        <Button title="Show" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 5,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  leftView: {
    width: "70%",
    padding: 2,
  },
  rightView: {
    width: "30%",
  },
});
