import { useContext } from 'react';
import Button from './Button';
import { ProjectContext } from '../store/project-context';

export default function ProjectsSidebar() {
  const { projects, onStartAddProject, onCatchProjectById, selectedProjectId } =
    useContext(ProjectContext);

  return (
    <aside className="sidebar w-1/3 px-8 py-16 rounded-r-xl md:w-72">
      <h2 className="mb-8 font-semibold md:text-xl text-[#a5a5a5] uppercase">
        Your projects
      </h2>
      <div>
        <Button black onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <div>
        <ul className="mt-8">
          {projects.map((project) => {
            let cssClasses =
              'button-projects w-full text-left px-2 py-1 rounded-sm my-1';

            if (project.id === selectedProjectId) {
              cssClasses += ' px-6';
            } else {
              cssClasses += ' px-2';
            }

            return (
              <li key={project.id}>
                <button
                  onClick={() => onCatchProjectById(project.id)}
                  className={cssClasses}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
