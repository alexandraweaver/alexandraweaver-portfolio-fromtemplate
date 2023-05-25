//import { useContext } from 'react';
//import AboutMeContext from '../../context/AboutMeContext';
import { Avatar, Grid, Typography } from '@mui/material';
import { aboutData } from '../../data/aboutData';

const AboutDisplayHeader = () => {
	//const { aboutData } = useContext(AboutMeContext);

	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={4}>
				<Avatar src={ aboutData.img } alt={ aboutData.name } sx={{ width: 150, height: 150 }} />
			</Grid>
			<Grid item xs={8}>
				<p className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-left text-ternary-dark dark:text-primary-light uppercase">{aboutData.name}</p> 
				<br/>
				<p className="font-general-semibold text-xl lg:text-2xl xl:text-3xl text-left text-ternary-dark dark:text-primary-light uppercase">{ aboutData.title }</p>
				<p className="font-general-semibold text-xl lg:text-2xl xl:text-3xl text-left text-ternary-dark dark:text-primary-light uppercase">{ aboutData.subTitle }</p>
			</Grid>
		</Grid>
	);
};

export default AboutDisplayHeader;
