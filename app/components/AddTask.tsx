"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEvent, useState } from "react";
import { addTodos } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

export default function AddTask() {
  const router = useRouter();
  const [ModalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");
  console.log(typeof newTaskValue);
    async function hanldeSubmitNewTodo(event: FormEvent<HTMLFormElement>) {
      
        event.preventDefault();
        await addTodos({
            id: uuidv4(),
            text: newTaskValue
        });
        setNewTaskValue("");
        router.refresh();
    }

  return (
    <div>
      <button
        onClick={() => setModalOpen(!ModalOpen)}
        className="btn btn-primary w-full"
      >
        Add New Task
        <AiOutlinePlus size={20} className="ml-2" />
      </button>
      {/*este es el modal bueno, este es bien chill*/ }
      <Modal ModalOpen={ModalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={hanldeSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add New task</h3>
          <div className="modal-action">
            <input
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn" onClick={() => setModalOpen(false)}>submit  </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
