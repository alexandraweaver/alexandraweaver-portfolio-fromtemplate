import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
//import ProjectInfo from '../components/projects/ProjectInfo';
//import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
//import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { Container } from '@mui/material';

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<br/>
			<Container>
				<ProjectHeader props={props}/>
			</Container>
			<br/>
			<Container>
				<ProjectGallery props={props}/>
			</Container>
		</motion.div>
	);
};

export default ProjectSingle;


// <SingleProjectProvider>
// 	<ProjectHeader />
// 	<ProjectGallery />
// 	{/*<ProjectInfo />*/}
// 	{/*<ProjectRelatedProjects />*/}
// </SingleProjectProvider>