//import { useContext } from 'react';
//import AboutMeContext from '../../context/AboutMeContext';
import { Grid } from '@mui/material';
import { aboutData } from '../../data/aboutData';

const AboutDisplaySubheader = () => {
	//const { aboutData } = useContext(AboutMeContext);

	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={6}>
				<p>{aboutData.bio}</p>
			</Grid>
			<Grid item xs={6}>
				<p>{aboutData.mission}</p>
			</Grid>
		</Grid>
	);
};

export default AboutDisplaySubheader;
