import { useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Progress from "components/view/Progress";
import Todo from "features/todo/Todo";
import { fetchTodos, selectAllTodo } from "features/todo/todoSlice";
import React, { useCallback } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const dispatch = useAppDispatch();
  const todoState = useAppSelector((state) => state.todo);
  const todos = selectAllTodo(todoState);

  useFocusEffect(
    useCallback(() => {
      if (todoState.status === "idle") {
        dispatch(fetchTodos());
      }
    }, [dispatch, fetchTodos])
  );

  const render = () => {
    switch (todoState.status) {
      case "loading":
        return (
          <>
            <Progress />
          </>
        );

      case "failed":
        return (
          <>
            <Text>{todoState.error}</Text>
          </>
        );

      default:
        return (
          <>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todo
                  id={item.id}
                  userId={item.userId}
                  title={item.title}
                  completed={item.completed}
                  key={item.id}
                />
              )}
              keyExtractor={({ id }) => id.toString()}
              refreshing={false}
              onRefresh={() => dispatch(fetchTodos())}
              initialNumToRender={20}
            />
          </>
        );
    }
  };

  return <SafeAreaView style={styles.container}>{render()}</SafeAreaView>;
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
