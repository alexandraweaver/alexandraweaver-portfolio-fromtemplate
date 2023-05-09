import profileImage from '../../images/aaw-headshot.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutDisplayData = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
                <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">{aboutMe.title}</p>
			</div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">{aboutMe.bio}</p>
			</div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">{aboutMe.mission}</p>
			</div>
		</div>
	);
};

export default AboutDisplayData;
