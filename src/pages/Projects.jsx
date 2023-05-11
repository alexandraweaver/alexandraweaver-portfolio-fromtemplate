// import { projectsData } from '../data/projectsData';
// import ProjectSingle from '../components/projects/ProjectSingle';

//import ProjectsGrid from '../components/projects/ProjectsGrid';
//import { ProjectsProvider } from '../context/ProjectsContext';

import Container from '@mui/material/Container';
import ProjectPortfolio from '../components/ProjectPortfolio';
import ProjectPortfolioHeader from '../components/ProjectPortfolioHeader';


const Projects = () => {
	return (
		<>
			<ProjectPortfolioHeader/>
			<br/>

			<Container>
				<ProjectPortfolio/>
			</Container>
		</>
	);
};

// <>
// 	{ projectsData.map((project) => {
// 		return <ProjectSingle props={project}/> })
// 	}
// </>

export default Projects;


// return (
// 		<ProjectsProvider>
// 			<div className="container mx-auto">
// 				<ProjectsGrid /> 
// 				<ProjectSingle />
// 			</div>
// 		</ProjectsProvider>
// 	);