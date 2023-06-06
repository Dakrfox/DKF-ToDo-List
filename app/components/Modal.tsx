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

export default function Modal({ ModalOpen, children, setModalOpen }: ModalProps) {
  (() => {
    if (typeof window !== "undefined") {
      if (ModalOpen && !window.my_modal_3?.hasAttribute('open')) {
        window.my_modal_3.showModal();
      }
      if(!ModalOpen && window.my_modal_3?.hasAttribute('open')){
        window.my_modal_3.close();
      }
    }
  })();
  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      {/* You can open the modal using ID.showModal() method */}

      <dialog id="my_modal_3"  className="modal">
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
