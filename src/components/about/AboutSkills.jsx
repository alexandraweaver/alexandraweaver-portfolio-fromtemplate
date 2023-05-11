// import { useContext } from 'react';
// import AboutMeContext from '../../context/AboutMeContext';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import AboutSkillSingle from './AboutSkillSingle';

import { skillsData, skillsHeading } from '../../data/skillsData';

const AboutSkills = () => {
	//const { skillsData, skillsHeading } = useContext(AboutMeContext);

	return (
		<Container>
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
					{skillsHeading}
			</p>

			<br/>

			<Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
				{skillsData.map((skill) => {return (
					<Grid key={skill.id} item xs={4}>
						<AboutSkillSingle
							title={skill.title}
							image={skill.img}
						/>
					</Grid>
				)})}
			</Grid>
		</Container>
	);
};

export default AboutSkills;
