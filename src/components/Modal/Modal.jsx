import "./Modal.css";
import { useEffect, useRef } from "react";

const Modal = ({ setVisible, children }) => {
  const modalRef = useRef();

  // Empêche le scroll quand la modal est ouverte
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setVisible(false);
    }
  };

  return (
    <div className="modal-root" onClick={handleClickOutside}>
      <div className="modal" ref={modalRef}>
        <button
          className="modal-close-button"
          onClick={() => setVisible(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
