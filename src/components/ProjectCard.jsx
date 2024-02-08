import { useRef } from 'react';
import Input from './Input';
import Button from './Button';
import Tasks from './Tasks';

export default function ProjectCard({
  project,
  onDeleteProject,
  onAddNewTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="my-card w-full">
      <div className="inner-card">
        <div
          style={{
            background: `url(
                ${project.image}
              )`,
          }}
          className="front-side"
        >
          <p className="title uppercase">{project.title}</p>
          <p className="title">Hover Me</p>
        </div>
        <div className="back-side p-4">
          <div className="w-full my-16 ">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-400 mb-2">
                  {project.title}
                </h1>
                <Button red onClick={onDeleteProject}>
                  Delete
                </Button>
              </div>
              <p className="mb-4 text-stone-600">{formattedDate}</p>
              <p className="whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks
              onAddTask={onAddNewTask}
              arrayTasks={tasks}
              onDelete={onDeleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
