import { Card, CardHeader, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

const AboutSkillSingle = ({ title, image }) => {
	return (
		<Card>
			<CardHeader title={ title }/>
			
			<CardContent>
				<Grid container justifyContent="center">
					{ image }
				</Grid>
			</CardContent>
		</Card>
	);
};

export default AboutSkillSingle;
