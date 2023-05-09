import { useState, createContext } from 'react';
import { aboutData } from '../data/aboutMeData';
import { skillsHeading as skillsPageHeading } from '../data/skillsData';
import { skillsData as skillsDataJson } from '../data/skillsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutData);

	const skillsHeading = skillsPageHeading;

	const [skillsData, setskillsData] = useState(skillsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				skillsHeading,
				skillsData,
				setskillsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
