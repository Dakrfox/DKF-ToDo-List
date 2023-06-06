import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "../api";
import Modal from "./components/Modal";


export default async function Home() {
  const tasks =await getAllTodos();
 
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl fotn bold">DKF To-Do List</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
      
    </main>
  );
}
