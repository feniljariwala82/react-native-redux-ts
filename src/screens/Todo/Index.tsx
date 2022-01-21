import React, { useEffect, Fragment } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { fetchTodos, selectAllPosts } from "features/todo/todoSlice";
import Todo from "features/todo/Todo";

const Index = () => {
  const dispatch = useAppDispatch();
  const todoState = useAppSelector((state) => state.todo);
  const todos = selectAllPosts(todoState);

  useEffect(() => {
    if (todoState.status === "idle") {
      dispatch(fetchTodos());
    }
  }, [dispatch, fetchTodos]);

  return (
    <SafeAreaView style={styles.container}>
      {todoState.status === "loading" ? (
        <>
          <Text>Loading..</Text>
        </>
      ) : (
        <>
          <Text>Todo Index Page!</Text>
          {todos.map((todo) => {
            return (
              <Todo
                id={todo.id}
                userId={todo.userId}
                title={todo.title}
                completed={todo.completed}
              />
            );
          })}
        </>
      )}
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
