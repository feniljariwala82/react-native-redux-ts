import instance, { axios } from "features/Instance";
import { TodoType } from "types";

export const index = async () => {
  try {
    const todos = await instance.get<TodoType[]>("/todos");
    return Promise.resolve(todos.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
