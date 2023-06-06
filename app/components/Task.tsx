"use client";
import React, { FormEvent, useState } from "react";
import { ITask } from "@/types/tasks";
import { AiOutlineEdit } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { editTodos, deleteTodos } from "@/api";

interface TodoListProps {
  task: ITask;
}

export default function Task({ task }: TodoListProps) {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOPenModalDeleted] = useState(false);
  const [tasktoEdit, setTaskToEdit] = useState(task.text);
  async function handleSubmitEditTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await editTodos({
      id: task.id,
      text: tasktoEdit,
    });
    router.refresh();
  }
  const handleDeleteTodo = async (id: string) => {
     await deleteTodos(id);
     setOPenModalDeleted(false);
     router.refresh();
  
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <AiOutlineEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        {/*aqui esta el modal que genera el error si lo quitas ya no hay error*/}
        <Modal ModalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={tasktoEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button
                type="submit"
                className="btn"
                onClick={() => setOpenModalEdit(false)}
              >
                submit{" "}
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash
          onClick={() => setOPenModalDeleted(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal ModalOpen={openModalDeleted} setModalOpen={setOPenModalDeleted}>
          <h3>Are you sure, you want to delete this task?</h3>
          <div className="modal-action">
            <button className="btn" onClick={() => setOPenModalDeleted(false)}>
              Cancel
            </button>
            <button
              className="btn btn-error"
              onClick={()=>handleDeleteTodo(task.id)}
            >
              Delete
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
}
