import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import img_gif from "../../media/images/failedpayment.png";
import { Button } from "@mui/material";

const FailedPayment: React.FC = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <img width="300px" height="300px" src={img_gif} alt="gif_ing" />
      </Box>
      <Box pb={2}>
        <Typography variant="h5" align="center" gutterBottom>
          Failed Payment
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Something went wrong!!!
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link to="/">
          <Button variant="contained">Go to Home</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default FailedPayment;
