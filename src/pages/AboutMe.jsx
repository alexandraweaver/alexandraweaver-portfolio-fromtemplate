import AboutDisplayData from '../components/about/AboutDisplayData';
//import AboutCounter from '../components/about/AboutCounter';
import AboutSkills from '../components/about/AboutSkills';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutDisplayData />
			</motion.div>
			<br/>

			{/** Counter without paddings */}
			{/*<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>*/}

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutSkills />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
