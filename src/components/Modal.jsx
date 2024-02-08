import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="sidebar w-1/3 p-4 rounded-md backdrop:bg-stone-900/90"
      ref={dialog}
    >
      {children}
      <form method="dialog" className="text-right">
        <Button black>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
