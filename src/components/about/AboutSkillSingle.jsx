import { Card, CardHeader, CardContent } from '@mui/material';
import { thumbnailCardStyle } from '../../styles/displayStyles';

const AboutSkillSingle = ({ title, image }) => {
	return (
		<Card sx={thumbnailCardStyle}>
			<CardHeader title={ title }/>
			
			<CardContent>
				{image}
			</CardContent>
		</Card>
	);
};

export default AboutSkillSingle;
