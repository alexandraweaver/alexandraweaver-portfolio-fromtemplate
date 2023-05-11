//import { useContext } from 'react';
//import AboutMeContext from '../../context/AboutMeContext';
import { Grid } from '@mui/material';
import AboutDisplayHeader from './AboutDisplayHeader';
import AboutDisplaySubheader from './AboutDisplaySubheader';
import DownloadResumeButton from '../DownloadResumeButton';

const AboutDisplayData = () => {
	//const { aboutData } = useContext(AboutMeContext);

	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="items-center">
			<Grid item xs={12}>
				<AboutDisplayHeader/>
			</Grid>
			<Grid item xs={12}>
				<AboutDisplaySubheader/>
			</Grid>
			<Grid item xs={12}>
				<DownloadResumeButton/>
			</Grid>

		</Grid>
	);
};

export default AboutDisplayData;
