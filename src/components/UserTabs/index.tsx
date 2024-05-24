import { Divider, Paper, Tab, Tabs } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserTabs: React.FC = () => {
  const [valueTab, setValueTab] = React.useState(0);
  const navigate = useNavigate();

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  

  return (
    <Paper elevation={0}
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)",
        borderRadius: "12px",
        padding: "16px 24px",
        mb: "40px",
        mt: "-40px",
      }}>
      <Tabs value={valueTab} centered onChange={handleChangeTab} aria-label="icon label tabs example">
        <Tab onClick={() => navigate("users-account")} sx={{ width: "30%", fontSize: "16px", textTransform: "capitalize"  }} label="Account" />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tab onClick={() => navigate("users-history")} sx={{ width: "30%", fontSize: "16px", textTransform: "capitalize"  }} label="History" />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tab onClick={() => navigate("users-payment")} sx={{ width: "30%", fontSize: "16px", textTransform: "capitalize"  }} label="Payment methods" />
      </Tabs>
    </Paper>
  )
}

export default UserTabs