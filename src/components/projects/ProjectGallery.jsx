//import { useContext } from 'react';
//import SingleProjectContext from '../../context/SingleProjectContext';
//import { projectsData } from '../../data/projectsData'

const ProjectGallery = (props) => {
	//const { singleProjectData } = useContext(SingleProjectContext);	
	//console.log("Props: " + JSON.stringify(props) + ", imgs: " + props.props.props.imgs);
	
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			<div className="mb-10 sm:mb-0" key={props.props.props.id}>
				{props.props.props.imgs.map((img) => {
					return (
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						<img
							src={img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={props.props.props.title}
							key={props.props.props.id}
						/>
					</span>)
				})}
			</div>
		</div>
	);
};

export default ProjectGallery;
