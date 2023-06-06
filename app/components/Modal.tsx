"use client";
import React from "react";
// Al principio del archivo
declare global {
  interface Window {
    my_modal_3: HTMLDialogElement;
  }
}

interface ModalProps {
  ModalOpen: boolean;
  setModalOpen: (open : boolean )=> boolean | void;
  children: React.ReactNode;
}

export default function Modal({ ModalOpen, setModalOpen, children }: ModalProps) {
  
  return (
    <div>
      <dialog id="my_modal_3" open={ModalOpen}  className="modal" >
        <div className="modal-box">
          <button onClick={()=> setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          {children}
        </div>
      </dialog>
    </div>
  );
}
