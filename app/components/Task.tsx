"use client";
import React, { useState } from "react";
import { ITask } from "@/types/tasks";
import { AiOutlineEdit } from "react-icons/ai";
import {FiTrash} from "react-icons/fi";
import Modal from "./Modal";



interface TodoListProps {
  task: ITask;
}

export default function Task({ task }: TodoListProps) {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOPenModalDeleted] = useState<boolean>(false);
  const [tasktoEdit, setTaskToEdit] = useState<string>(task.text);
  const handleSubmitEditTodo = () =>{

  }
  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <AiOutlineEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-blue-500" size={25} />
        {/*aqui esta el modal que genera el error si lo quitas ya no hay error*/ }
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
            <button type="submit" className="btn" onClick={() => setOpenModalEdit(false)}>submit  </button>
          </div>
        </form>
      </Modal>
        <FiTrash cursor="pointer" className="text-red-500" size={25} />
      </td>
    </tr>
  );
}
