import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";
interface TodoListProps {
  tasks: ITask[];
}

export default function TodoList({ tasks }: TodoListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => <Task key={task.id} task={task}/>)}
        </tbody>
      </table>
    </div>
  );
}
