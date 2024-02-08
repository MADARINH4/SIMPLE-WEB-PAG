import { useState } from 'react';
import Button from './Button';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    //Add verification
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-2 rounded-sm bg-zinc-800"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button black onClick={handleClick}>
        Add Task
      </Button>
    </div>
  );
}
