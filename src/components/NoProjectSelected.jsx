import { useContext } from 'react';
import img from '../assets/no-projects.png';
import Button from './Button';
import { ProjectContext } from '../store/project-context';

export default function NoProjectSelected() {
  const { onStartAddProject } = useContext(ProjectContext);

  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={img}
        alt="no project"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="my-4 text-sm font-bold uppercase text-stone-500">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button white onClick={onStartAddProject}>
          Create a new project
        </Button>
      </p>
    </div>
  );
}
