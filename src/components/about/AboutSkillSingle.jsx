import { Card, CardContent, Grid, Typography } from '@mui/material';
import { currentCardStyle, projectStyle, thumbnailCardStyle } from '../../styles/displayStyles';

const AboutSkillSingle = ({ title, imgs }) => {
	return (
		<Card sx={projectStyle}>
			<CardContent sx={projectStyle}>
				<Typography variant="h6" sx={projectStyle}>{ title }</Typography>
				<Grid container spacing={4}>
					{imgs.map((img, index) => {return (<Grid item key={index} xs={4} sx={projectStyle}>{img}</Grid>);})}
				</Grid>
			</CardContent>
		</Card>
	);
};

export default AboutSkillSingle;
