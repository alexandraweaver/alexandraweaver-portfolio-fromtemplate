import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/reusable/Button';

function AllProjectsButton() {
    return ( 
        <div className="mt-8 sm:mt-10 flex justify-center">
				<motion.h3
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					<Link
							to="/projects"
							className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
							aria-label="All Projects"
						>
							<Button title="All Projects" />
					</Link>
				</motion.h3>
			</div>
     );
}

export default AllProjectsButton;