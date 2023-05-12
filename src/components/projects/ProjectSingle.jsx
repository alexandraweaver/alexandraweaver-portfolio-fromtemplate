import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Container } from '@mui/material';

import { thumbnailCardStyle } from './../../styles/displayStyles';

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to={ props.props.url } aria-label={ props.props.title }>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark items-center text-center px-4 py-6">
					<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
						{ props.props.title }
					</p>

					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						<b>{ props.props.category }</b>
					</span>
					<br/>

					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{ props.props.desc }
					</span>
					<br/>
					<Container sx={thumbnailCardStyle}>
						{props.props.imgs.map((img, index) => {
							return (
								<img
									key={index}
									src={img}
									alt={props.props.title}
								/>
						)})}
					</Container>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
