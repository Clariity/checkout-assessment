import { ReactNode } from "react";

import { SVG } from ".";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ title, onClose, children }: ModalProps) {
  const clear = (
    <>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </>
  );

  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 z-30 flex justify-center items-center">
        <div className="w-full max-w-4xl mx-4">
          <div className="flex items-center bg-tertiary text-center rounded-t-md">
            <div className="w-14 flex items-center" />
            <h1 className="w-full my-4 text-xl lg:text-2xl">{title}</h1>
            <div className="w-14 flex items-center">
              <button aria-label="close modal" onClick={onClose}>
                <SVG icon={clear} />
              </button>
            </div>
          </div>
          <div className="max-h-[70vh] p-4 bg-primary overflow-y-auto break-words rounded-b-md">
            {children}
          </div>
        </div>
      </div>
      <div
        className="w-full h-full fixed top-0 left-0 bg-black opacity-70 z-20"
        onClick={onClose}
      />
    </>
  );
}
