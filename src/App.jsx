import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import ProjectCard from './components/ProjectCard';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

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

  function findProjectById() {
    return projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );
  }

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
    content = <ProjectCard project={projectSelected} />;
  }

  //Implementar o card da amostra de projetos

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onCatchProjectById={handleCatchProjectById}
        projects={projectState.projects}
      />
      {/*<ProjectCard />*/}
      {content}
    </main>
  );
}

export default App;
