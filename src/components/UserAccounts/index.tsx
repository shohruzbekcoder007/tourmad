import React, { useEffect, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
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
import { enqueueSnackbar } from "notistack";

const UserAccounts: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const statusUserInfo = useAppSelector(getUserStatus);
  const userInfo = useAppSelector(getAccountInfo);
  const [postData, setPostData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    gender: "",
    birth_date: "",
    phone_number: "",
  });

  useEffect(() => {
    // Redux orqali user ma'lumotlarini yuklash
    if (statusUserInfo === "idle") {
      dispatch(getAccount());
    }
  }, [statusUserInfo, dispatch]);

  useEffect(() => {
    // Redux'dan userInfo kelganda postData ni yangilash
    if (userInfo) {
      setPostData({
        first_name: userInfo.first_name || "",
        last_name: userInfo.last_name || "",
        middle_name: userInfo.middle_name || "",
        gender: userInfo.gender || "",
        birth_date: userInfo.birth_date || "",
        phone_number: userInfo.phone_number || "",
      });
    } else {
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
        enqueueSnackbar("Changes saved successfully!", { variant: "success" });
        // Success xabarini ko'rsatish mumkin
      })
      .catch((error: any) => {
        console.error("Failed to save changes:", error.message);
        enqueueSnackbar(`"Failed to save changes:", ${error.message}`, {
          variant: "error",
        });
        // Xatolik xabarini ko'rsatish mumkin
      });
  };

  return (
    <Stack>
      <GlobalParagraph fontSize="32px" fontWeight="700" paddingbottom="16px">
        {t("Account")}
      </GlobalParagraph>
      <BoxStyle>
        {[
          { label: "First name", field: "first_name" },
          { label: "Last name", field: "last_name" },
          { label: "Middle name", field: "middle_name" },
          { label: "Phone Number", field: "phone_number" },
          { label: "Gender", field: "gender" },
          { label: "Date of Birth", field: "birth_date" },
        ].map(({ label, field }) => (
          <Stack
            pb="32px"
            width="100%"
            display="flex"
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            key={field}
          >
            <TextField
              id={`outlined-${field}`}
              label={label}
              value={postData[field as keyof typeof postData]}
              sx={{ width: "350px" }}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </Stack>
        ))}
        <Stack pb="32px" width="100%">
          <TextField
            id="outlined-email"
            label="Email"
            value={userInfo?.email || ""}
            sx={{ width: "350px" }}
            InputProps={{ readOnly: true }}
          />
        </Stack>
        <Button onClick={handleSave} variant="outlined">
          Save Changes
        </Button>
      </BoxStyle>
    </Stack>
  );
};

export default UserAccounts;
