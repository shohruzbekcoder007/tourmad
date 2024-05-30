import React from "react";
import { HeadeMenuList, HeaderMenuListItem, HeaderMenuListItemIconc, HeaderMenuListItemText, HeaderWrapper, WelcomeLogo } from "./styles";
import { Box, Divider } from "@mui/material";
import Logo from "./../../media/images/logo2.png";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CastleIcon from '@mui/icons-material/Castle';
import ResponsiveMenu from "../ResponsiveMenu";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
    auth?: React.ReactElement;
    logo: boolean,
    divider?: boolean,
    type?: "white" | "dark"
};

const Header: React.FC<HeaderProps> = ({ auth, logo, type="white", divider=false }: HeaderProps) => {
    const navigate = useNavigate()
    return (
        <HeaderWrapper>
            <Box display={{xl: "none", md: "none", sm: "block", xs: "block"}}>
                <ResponsiveMenu />
            </Box>

            {
                logo ?
                    <WelcomeLogo onClick={() => navigate("/")}>
                        <img src={Logo} alt="" />
                    </WelcomeLogo> :
                    <WelcomeLogo onClick={() => navigate("/")}>
                        <img src={Logo} alt="" />
                    </WelcomeLogo>
            }
            
           
            <HeadeMenuList>
                <HeaderMenuListItem to="/" type={type} 
                    className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                    <HeaderMenuListItemIconc>
                       <AirplaneTicketIcon />
                    </HeaderMenuListItemIconc>
                    <HeaderMenuListItemText>Trip Advisor</HeaderMenuListItemText>
                </HeaderMenuListItem>
                {
                    divider? <Divider orientation="vertical" variant="middle" flexItem/> : <></>
                }
                
                <HeaderMenuListItem to="/" type={type}>
                    <HeaderMenuListItemIconc>
                        <LocalTaxiIcon />
                    </HeaderMenuListItemIconc>
                    <HeaderMenuListItemText>My Driver</HeaderMenuListItemText>
                </HeaderMenuListItem>
                <HeaderMenuListItem to="/" type={type}>
                    <HeaderMenuListItemIconc>
                        <ManageAccountsIcon />
                    </HeaderMenuListItemIconc>
                    <HeaderMenuListItemText>Consulting</HeaderMenuListItemText>
                </HeaderMenuListItem>
                <HeaderMenuListItem to="/" type={type}>
                    <HeaderMenuListItemIconc>
                        <CastleIcon />
                    </HeaderMenuListItemIconc>
                    <HeaderMenuListItemText>History</HeaderMenuListItemText>
                </HeaderMenuListItem>
            </HeadeMenuList>
            {
                auth ?? <Box></Box>
            }
        </HeaderWrapper>
    );
};

export default Header;