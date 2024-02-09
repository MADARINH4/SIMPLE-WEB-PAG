import ProjectsSidebar from './components/ProjectsSidebar';
import ProjectContextProvider from './store/project-context';

function App() {
  return (
    <ProjectContextProvider>
      <ProjectsSidebar />
    </ProjectContextProvider>
  );
}

export default App;
