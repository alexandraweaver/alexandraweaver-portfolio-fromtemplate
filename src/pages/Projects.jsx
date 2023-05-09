import { projectsData } from '../data/projectsData';
import ProjectSingle from '../components/projects/ProjectSingle';

//import ProjectsGrid from '../components/projects/ProjectsGrid';
//import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<>
			{ projectsData.map((project) => {
				return <ProjectSingle props={project}/> })
			}
		</>
	);
};

export default Projects;


// return (
// 		<ProjectsProvider>
// 			<div className="container mx-auto">
// 				<ProjectsGrid /> 
// 				<ProjectSingle />
// 			</div>
// 		</ProjectsProvider>
// 	);