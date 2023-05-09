import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
			<Link to={ props.url } aria-label={ props.title }>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						{props.imgs.map((img) => {
							return <img
								src={img}
								className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
								alt={props.title}
								key={props.id}
							/>
						})}
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{ props.title }
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							<b>{ props.category }</b>
						</span>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{ props.desc }
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
