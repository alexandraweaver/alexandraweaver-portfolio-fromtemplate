//import { useContext } from 'react';
//import SingleProjectContext from '../../context/SingleProjectContext';
//import { projectsData } from '../../data/projectsData'

const ProjectGallery = (props) => {
	//const { singleProjectData } = useContext(SingleProjectContext);	
	//console.log("Props: " + JSON.stringify(props) + ", imgs: " + props.props.props.imgs);
	
	return (
		<div className="grid container">
			<div className="grid row" key={props.props.props.id}>
				{props.props.props.imgs.map((img) => {
					return (
						<div className="grid col flex items-center font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						
						<img
							src={img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={props.props.props.title}
							key={props.props.props.id}
						/>
					<br/>
					</div>)
				})}
			</div>
		</div>
	);
};

export default ProjectGallery;
