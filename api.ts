import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseUrl}/tasks`, {cache : "no-cache"});
  const todo = await response.json();
  return todo;
};

export const addTodos = async (todo: ITask): Promise<ITask> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await response.json();
  return newTodo;
};
