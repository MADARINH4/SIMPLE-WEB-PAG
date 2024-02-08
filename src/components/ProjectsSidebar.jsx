import Button from './Button';

export default function ProjectsSidebar({
  onStartAddProject,
  onCatchProjectById,
  projects,
}) {
  return (
    <aside className="sidebar w-1/3 px-8 py-16 rounded-r-xl md:w-72">
      <h2 className="mb-8 font-semibold md:text-xl text-[#a5a5a5] uppercase">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <div>
        <ul className="mt-8">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                onClick={() => onCatchProjectById(project.id)}
                className="button-projects w-full text-left px-2 py-1 rounded-sm my-1"
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
