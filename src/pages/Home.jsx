//import { Link } from 'react-router-dom';
//import ProjectsGrid from '../components/projects/ProjectsGrid';
// import { ProjectsProvider } from '../context/ProjectsContext';
// import Button from '../components/reusable/Button';
// import ProjectSingle from './ProjectSingle';
// import { projectsData } from '../data/projectsData';

// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// import Button from '../components/reusable/Button';

// import { ProjectsProvider } from '../context/ProjectsContext';
// import ProjectSingle from '../components/projects/ProjectSingle';
// import { projectsData } from '../data/projectsData';

//import AppBanner from '../components/shared/AppBanner';
import AboutDisplayData from '../components/about/AboutDisplayData';
import ProjectPortfolio from '../components/ProjectPortfolio';
import AllProjectsButton from '../components/AllProjectsButton';
import ProjectPortfolioHeader from '../components/ProjectPortfolioHeader';

const Home = () => {
	return (
		<div className="container mx-auto">
			{/*<AppBanner></AppBanner>*/}
			<AboutDisplayData/>
			<br/><br/>

			<ProjectPortfolioHeader/>

			<AllProjectsButton/>
			<br/>

			<ProjectPortfolio/>
			<br/>
		</div>
	);
};

export default Home;
