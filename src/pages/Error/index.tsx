import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import img_gif from '../../media/page-not-found-404.gif'
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Error: React.FC = () => {
	const {t} = useTranslation()

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
					{t("Oops! Page Not Be Found")}
				</Typography>
				<Typography variant="h6" align='center' gutterBottom>
				{t("Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable")}
				</Typography>
			</Box>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Link to="/">
					<Button variant="contained">{t("Go to Home")}</Button>
				</Link>
			</Box>
		</Box>
	)

}

export default Error