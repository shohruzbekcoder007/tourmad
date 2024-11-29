import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import img_gif from "../../media/images/successpayment.png";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const SuccessPayment: React.FC = () => {
  const {t} = useTranslation()
  return (
    <Box sx={{
      width: "40%",
      margin: "0 auto",
      border: "1px solid gray",
      borderRadius: "20px",
      paddingBottom: "50px",
      marginTop: "50px",
      boxShadow: "2px 10px 10px gray"
    }}>
      <Box display="flex" justifyContent="center">
        <img width="400px" height="400px" src={img_gif} alt="gif_ing" />
      </Box>
      <Box pb={2}>
        <Typography variant="h5" align="center" gutterBottom>
          {t("Success Payment")}
        </Typography>
        <Typography variant="h6" align="center" gutterBottom></Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link to="/">
          <Button variant="contained">{t("Go to Home")}</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SuccessPayment;
