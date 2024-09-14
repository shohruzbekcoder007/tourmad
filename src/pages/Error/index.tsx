import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import img_gif from '../../media/page-not-found-404.gif'
import { Button } from '@mui/material';

const Error: React.FC = () => {

	return (
		<Box>
			<Box
				display="flex"
				justifyContent="center"
			>
				<img src={img_gif} alt="gif_ing" />
			</Box>
			<Box
				pb={2}
			>
				<Typography variant="h5" align='center' gutterBottom>
					Oops! Page Not Be Found
				</Typography>
				<Typography variant="h6" align='center' gutterBottom>
				Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable
				</Typography>
			</Box>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Link to="/">
					<Button variant="contained">Go to Home</Button>
				</Link>
			</Box>
		</Box>
	)

}

export default Error