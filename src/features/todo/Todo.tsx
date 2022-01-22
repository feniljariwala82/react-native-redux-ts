import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TodoType } from "types";

const Todo = (props: TodoType) => {
  const { id, userId, title, completed } = props;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
