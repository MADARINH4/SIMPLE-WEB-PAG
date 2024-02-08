import Button from './Button';
import NewTask from './NewTask';

export default function Tasks({ onAddTask, onDelete, arrayTasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <NewTask onAdd={onAddTask} />
      {arrayTasks.length === 0 && (
        <p className="my-4">This project does not Tasks</p>
      )}
      {arrayTasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-[#221a38]">
          {arrayTasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <Button red onClick={() => onDelete(task.id)}>
                Clear
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
