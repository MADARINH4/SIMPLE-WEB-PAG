import { createContext, useState } from 'react';
import NewProject from '../components/NewProject';
import NoProjectSelected from '../components/NoProjectSelected';
import ProjectCard from '../components/ProjectCard';

let content;

export const ProjectContext = createContext({
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
  onStartAddProject: () => {},
  onSaveProject: () => {},
  onDeleteProject: () => {},
  onCatchProjectById: () => {},
  onAddNewTask: () => {},
  onDeleteTask: () => {},
  onCancel: () => {},
  findById: () => {},
});

export default function ProjectContextProvider({ children }) {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectInfo) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, { id: projectId, ...projectInfo }],
      };
    });
  }

  function handleCatchProjectById(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function findProjectById() {
    return projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );
  }

  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else if (projectState.selectedProjectId) {
    let projectSelected = findProjectById();
    content = <ProjectCard project={projectSelected} />;
  }

  const ctxValue = {
    selectedProjectId: projectState.selectedProjectId,
    projects: projectState.projects,
    tasks: projectState.tasks,
    onStartAddProject: handleStartAddProject,
    onSaveProject: handleAddProject,
    onDeleteProject: handleDeleteProject,
    onCatchProjectById: handleCatchProjectById,
    onAddNewTask: handleAddTask,
    onDeleteTask: handleDeleteTask,
    onCancel: handleCancelAddProject,
    findById: findProjectById,
  };

  return (
    <ProjectContext.Provider value={ctxValue}>
      <main className="h-screen my-8 flex gap-8">
        {children}
        {content}
      </main>
    </ProjectContext.Provider>
  );
}
