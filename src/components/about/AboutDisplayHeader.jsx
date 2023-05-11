//import { useContext } from 'react';
//import AboutMeContext from '../../context/AboutMeContext';
import { Avatar, Grid, Typography } from '@mui/material';
import { aboutData } from '../../data/aboutData';

const AboutDisplayHeader = () => {
	//const { aboutData } = useContext(AboutMeContext);

	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="items-center">
			<Grid item xs={4}>
				<Avatar src={ aboutData.img } alt={ aboutData.name } sx={{ width: 150, height: 150 }} />
			</Grid>
			<Grid item xs={8}>
				<Typography variant="h3">{aboutData.name}</Typography> 
				<Typography variant="h6">{ aboutData.title }</Typography>
			</Grid>
		</Grid>
	);
};

export default AboutDisplayHeader;
