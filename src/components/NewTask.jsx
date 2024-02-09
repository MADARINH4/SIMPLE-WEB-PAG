import { useContext, useState } from 'react';
import Button from './Button';
import { ProjectContext } from '../store/project-context';

export default function NewTask() {
  const { onAddNewTask } = useContext(ProjectContext);
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }
    onAddNewTask(enteredTask);
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
