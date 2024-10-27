import { Avatar, Box, Button } from "@mui/material";
import facebook from "./../../media/images/facebook.svg";
import google from "./../../media/images/google.svg";
import apple from "./../../media/images/apple.svg";
import React from "react";
import { host } from "../../utils/API_urls";

const LoginWith: React.FC = () => {
  return (
    <Box pb="40px" display="flex" justifyContent="space-between">
      <Button sx={{ width: "30%", height: "50px" }} variant="outlined">
        <Avatar sx={{ width: 24, height: 24 }} src={facebook} alt="Facebook" />
      </Button>
      <a
        href={`${host}/api/v1/accounts/social_auth/google/`}
        style={{ width: "30%" }}
      >
        <Button sx={{ width: "100%", height: "50px" }} variant="outlined">
          <Avatar sx={{ width: 24, height: 24 }} src={google} alt="Google" />
        </Button>
      </a>

      <Button sx={{ width: "30%", height: "50px" }} variant="outlined">
        <Avatar sx={{ width: 24, height: 24 }} src={apple} alt="Apple" />
      </Button>
    </Box>
  );
};

export default LoginWith;
