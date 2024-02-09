import { useContext } from 'react';
import Button from './Button';
import NewTask from './NewTask';
import { ProjectContext } from '../store/project-context';

export default function Tasks() {
  const { tasks, selectedProjectId, onDeleteTask } = useContext(ProjectContext);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <NewTask />
      {tasks.length === 0 && (
        <p className="my-4">This project does not Tasks</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-[#221a38]">
          {tasks.map((task) => {
            if (task.projectId === selectedProjectId) {
              return (
                <li key={task.id} className="flex justify-between my-4">
                  <span>{task.text}</span>
                  <Button red onClick={() => onDeleteTask(task.id)}>
                    Clear
                  </Button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </section>
  );
}
