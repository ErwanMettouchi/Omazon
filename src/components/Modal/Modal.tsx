import { X } from "lucide-react";
import "./Modal.css";
import { useEffect } from "react";

interface IModalProps {
  title: string;
  closeModal: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, closeModal, children }: IModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className="background-modal" onClick={closeModal}>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="header-modal">
          <h2>{title}</h2>
          <button
            className="header-modal-close"
            type="button"
            onClick={closeModal}
          >
            <X />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
