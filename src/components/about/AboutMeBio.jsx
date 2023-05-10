import { useContext } from 'react';
import { aboutData } from '../../data/aboutData';

const AboutMeBio = () => {
	//const { aboutData } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={ aboutData.img } className="rounded-lg w-96" alt="" />
			</div>

			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<h1>{ aboutData.name }</h1>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<p>{ aboutData.bio }</p>
				<p>{ aboutData.skills }</p>
				<p>{ aboutData.mission }</p>
			</div>
		</div>
	);
};

export default AboutMeBio;
