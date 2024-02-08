import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import ProjectCard from './components/ProjectCard';

function App() {
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

  /*function findTaskByProjectId() {
    return projectState.tasks.find(
      (task) => task.projectId === projectState.selectedProjectId
    );
  }*/

  let content;

  //console.log(projectState.selectedProjectId);

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onSaveProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId) {
    let projectSelected = findProjectById();
    content = (
      <ProjectCard
        project={projectSelected}
        onDeleteProject={handleDeleteProject}
        onAddNewTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        projectId={projectState.selectedProjectId}
        tasks={projectState.tasks}
      />
    );
  }

  //Implementar o card da amostra de projetos

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onCatchProjectById={handleCatchProjectById}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      {/*<ProjectCard />*/}
      {content}
    </main>
  );
}

export default App;
