import { motion } from 'framer-motion';

function ProjectPortfolioHeader() {
    return ( 
        <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.9,
                    delay: 0.1,
                }}
                className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center text-ternary-dark dark:text-primary-light uppercase"
            >
                Project Portfolio
        </motion.h2>
     );
}

export default ProjectPortfolioHeader;