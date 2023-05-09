//import { useContext } from 'react';
import { FiTag, FiExternalLink } from 'react-icons/fi';
import { MdOutlineDescription } from 'react-icons/md';
//import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = (props) => {
	//const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{props.props.props.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiTag/>
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{props.props.props.category}
					</span>
				</div>
				<div className="flex items-center mr-10">
					<MdOutlineDescription className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{props.props.props.desc}
					</span>
				</div>
				<div className="flex items-center">
					<FiExternalLink className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{props.props.props.url} {/* TODO: make link, map skills & imgs */}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
