//import { useContext } from 'react';
import { FiTag, FiExternalLink } from 'react-icons/fi';
import { MdOutlineDescription } from 'react-icons/md';
//import SingleProjectContext from '../../context/SingleProjectContext';

import { Grid } from '@mui/material';

const ProjectSingleHeader = (props) => {
	//const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{props.props.props.title}
			</p>
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<FiTag/>
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{props.props.props.category}
					</span>
				</Grid>
				<Grid item xs={4}>
					<MdOutlineDescription/>
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{props.props.props.desc}
					</span>
				</Grid>
				<Grid item xs={4}>
					<FiExternalLink/>
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{props.props.props.url} {/* TODO: make link, map skills & imgs */}
					</span>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProjectSingleHeader;
