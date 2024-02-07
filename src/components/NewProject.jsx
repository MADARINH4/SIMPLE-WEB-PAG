import { useRef } from 'react';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onSaveProject, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="md:text-xl my-4 text-sm font-bold uppercase text-[#a5a5a5]">
          Invalid Input
        </h2>
        <p className="text-stone-400 mb-4">Please fill out all fields.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <Button onClick={onCancel} white>
              Cancel
            </Button>
          </li>
          <li>
            <Button onClick={handleSave} white>
              Save
            </Button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}
