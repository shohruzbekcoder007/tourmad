import React from 'react'
import "./styles.css";
// import Particles from 'react-tsparticles';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error: React.FC = () => {
	const naigate = useNavigate();
  return (
	<div className="container">
		<div className="error-page">
			{/* Commented out elements */}
			{/* <h1 data-h1="400">400</h1>
			<p data-p="BAD REQUEST">BAD REQUEST</p>
			<h1 data-h1="401">401</h1>
			<p data-p="UNAUTHORIZED">UNAUTHORIZED</p>
			<h1 data-h1="403">403</h1>
			<p data-p="FORBIDDEN">FORBIDDEN</p> */}

			<h1 data-h1="404">404</h1>
			<p data-p="NOT FOUND">NOT FOUND</p>

			{/* Uncomment this if you want to display a 500 error */}
			{/* <h1 data-h1="500">500</h1>
			<p data-p="SERVER ERROR">SERVER ERROR</p> */}
			

			<div id="particles-js">
			{/* <Particles
				id="tsparticles"
				options={{
				particles: {
					number: {
					value: 5,
					density: {
						enable: true,
						value_area: 800
					}
					},
					color: {
					value: "#fcfcfc"
					},
					shape: {
					type: "circle",
					},
					opacity: {
					value: 0.5,
					random: true,
					animation: {
						enable: false,
						speed: 1,
						opacity_min: 0.2,
						sync: false
					}
					},
					size: {
					value: 140,
					random: false,
					animation: {
						enable: true,
						speed: 10,
						size_min: 40,
						sync: false
					}
					},
					line_linked: {
					enable: false,
					},
					move: {
					enable: true,
					speed: 8,
					direction: "none",
					random: false,
					straight: false,
					out_mode: "out",
					bounce: false,
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 1200
					}
					}
				},
				interactivity: {
					detect_on: "canvas",
					events: {
					onhover: {
						enable: false
					},
					onclick: {
						enable: false
					},
					resize: true
					}
				},
				retina_detect: true
				}}
			/> */}
			</div>
			<Button sx={{width: "100%"}} onClick={() => naigate("/")}>Back to homepage</Button>
		</div>
	</div>

    // <div id="notfound">
	// 	<div classNameName="notfound">
	// 		<div classNameName="notfound-404"></div>
	// 		<h1>404</h1>
	// 		<h2>Oops! Page Not Be Found</h2>
	// 		<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
	// 		<Link to="/">Back to homepage</Link>
	// 	</div>
	// </div>
  )
}

export default Error