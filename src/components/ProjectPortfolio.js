import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import { ProjectsProvider } from '../context/ProjectsContext';
import ProjectSingle from '../components/projects/ProjectSingle';
import { projectsData } from '../data/projectsData';

function ProjectPortfolio() {
    return ( 
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="w-full flex items-center"
        >
            <ProjectsProvider>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {projectsData.map((project, index) => {return (
                        <Grid key={index} item xs={6}>
                            <ProjectSingle props={project}/>
                        </Grid>
                    );})}
                </Grid>
            </ProjectsProvider>

        </motion.section>
    );
}

export default ProjectPortfolio;