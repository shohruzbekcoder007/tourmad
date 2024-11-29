import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import img_gif from "../../media/images/failedpayment.png";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const FailedPayment: React.FC = () => {
  const {t} = useTranslation()
  return (
    <Box sx={{
      width: "40%",
      margin: "0 auto",
      border: "1px solid gray",
      borderRadius: "20px",
      paddingBottom: "50px",
      paddingTop: "30px",
      marginTop: "50px",
      boxShadow: "2px 10px 10px gray"
    }}>
      <Box display="flex" justifyContent="center">
        <img width="300px" height="300px" src={img_gif} alt="gif_ing" />
      </Box>
      <Box pb={2}>
        <Typography variant="h5" align="center" gutterBottom>
          {t("Failed Payment")}
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          {t("Something went wrong!!!")}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link to="/">
          <Button variant="contained">{t("Go to Home")}</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default FailedPayment;
