import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';


function DownloadResumeButton() {
    const href = `/files/${ aboutData.resumeFile }`;

    return ( 
        <a
            download={ aboutData.resumeFile }
            href= { href }
            className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
            aria-label="Download Resume"
        >
           Download Resume
        </a>
     );
}

export default DownloadResumeButton;