//import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProjectSingle from '../components/projects/ProjectSingle';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				{/* <ProjectsGrid /> */}
				<ProjectSingle />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
