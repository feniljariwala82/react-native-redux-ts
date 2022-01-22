import { useAppDispatch, useAppSelector } from "app/hooks";
import Todo from "features/todo/Todo";
import { fetchTodos, selectAllPosts } from "features/todo/todoSlice";
import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const dispatch = useAppDispatch();
  const todoState = useAppSelector((state) => state.todo);
  const todos = selectAllPosts(todoState);

  useEffect(() => {
    if (todoState.status === "idle") {
      dispatch(fetchTodos());
    }
  }, [dispatch, fetchTodos]);

  const render = () => {
    switch (todoState.status) {
      case "loading":
        return (
          <>
            <Text>Loading..</Text>
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
            <Text>Todo Index Page!</Text>
            {todos.map((todo) => {
              return (
                <Todo
                  id={todo.id}
                  userId={todo.userId}
                  title={todo.title}
                  completed={todo.completed}
                  key={todo.id}
                />
              );
            })}
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
