import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GlobalParagraph } from "../../global_styles/styles";
import { BoxStyle } from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getAccount,
  getAccountInfo,
  getUserStatus,
  putChanges,
} from "../../redux/slices/userSlice";
import { useTranslation } from "react-i18next";

const UserAccounts: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const statusUserInfo = useAppSelector(getUserStatus);
  const userInfo = useAppSelector(getAccountInfo);
  const [postData, setPostData] = useState({
    first_name: userInfo?.first_name || "",
    last_name: userInfo?.last_name || "",
    middle_name: userInfo?.middle_name || "",
    gender: userInfo?.gender || "",
    birth_date: userInfo?.birth_date || "",
    phone_number: userInfo?.phone_number || "",
  });

  useEffect(() => {
    if (statusUserInfo === "idle") {
      dispatch(getAccount())
    };
  }, [statusUserInfo,  dispatch]);
  
  
  useEffect(() => {
    if (!userInfo) {
      dispatch(getAccount());
    }
  }, [userInfo, dispatch]);

  const handleChange = (field: string, value: string) => {
    setPostData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    dispatch(putChanges(postData))
      .unwrap()
      .then(() => {
        console.log("Changes saved successfully!");
        // Optionally show a success message or update UI state
      })
      .catch((error: any) => {
        console.error("Failed to save changes:", error.message);
        // Optionally show an error message
      });
  };

  return (
    <Stack>
      <GlobalParagraph fontSize="32px" fontWeight="700" paddingbottom="16px">
        {t("Account")}
      </GlobalParagraph>
      <BoxStyle>
        <Stack
          pb="32px"
          width="100%"
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent={{
            xl: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "flex-end",
          }}
          alignItems="center"
        >
          <TextField
            id="outlined-read-only-input"
            label="First name"
            sx={{ width: "350px" }}
            defaultValue={postData?.first_name}
            onChange={(e) => handleChange("first_name", e.target.value)}
          />
        </Stack>
        <Stack
          pb="32px"
          width="100%"
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent={{
            xl: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "flex-end",
          }}
          alignItems="center"
        >
          <TextField
            id="outlined-read-only-input"
            label="Last name"
            sx={{ width: "350px" }}
            defaultValue={userInfo?.last_name}
            onChange={(e) => handleChange("last_name", e.target.value)}
          />
        </Stack>
        <Stack
          pb="32px"
          width="100%"
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent={{
            xl: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "flex-end",
          }}
          alignItems="center"
        >
          <TextField
            id="outlined-read-only-input"
            label="Middle name"
            sx={{ width: "350px" }}
            defaultValue={userInfo?.middle_name}
            onChange={(e) => handleChange("middle_name", e.target.value)}
          />
        </Stack>
        <Stack
          pb="32px"
          width="100%"
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent={{
            xl: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "flex-end",
          }}
          alignItems="center"
        >
          <TextField
            id="outlined-read-only-input"
            label="Email"
            sx={{ width: "350px" }}
            value={`${userInfo?.email}`}
          />
        </Stack>
        <Stack
          pb="32px"
          width="100%"
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent={{
            xl: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "flex-end",
          }}
          alignItems="center"
        >
          <TextField
            id="outlined-read-only-input"
            label="Phone Number"
            defaultValue={`${userInfo?.phone_number}`}
            sx={{ width: "350px" }}
            onChange={(e) => handleChange("phone_number", e.target.value)}
          />
        </Stack>
        <Stack
          pb="32px"
          width="100%"
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent={{
            xl: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "flex-end",
          }}
          alignItems="center"
        >
          <TextField
            id="outlined-read-only-input"
            label="Date of brith"
            defaultValue={`${userInfo?.gender}`}
            sx={{ width: "350px" }}
            onChange={(e) => handleChange("gender", e.target.value)}
          />
        </Stack>
        <Stack
          pb="32px"
          width="100%"
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent={{
            xl: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "flex-end",
          }}
          alignItems="center"
        >
          <TextField
            id="outlined-read-only-input"
            label="Date of brith"
            defaultValue={`${userInfo?.birth_date}`}
            sx={{ width: "350px" }}
            onChange={(e) => handleChange("birth_date", e.target.value)}
          />
        </Stack>
      <Button onClick={handleSave} variant="outlined">Save Changes</Button>
      </BoxStyle>
    </Stack>
  );
};

export default UserAccounts;
