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
import { useTranslation } from "react-i18next";

type HeaderProps = {
    auth?: React.ReactElement;
    logo: boolean,
    divider?: boolean,
    type?: "white" | "dark"
};

const Header: React.FC<HeaderProps> = ({ auth, logo, type="white", divider=false }: HeaderProps) => {
    const navigate = useNavigate()
    const {t} = useTranslation()
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
                    <HeaderMenuListItemText>{t("trip_advisor")}</HeaderMenuListItemText>
                </HeaderMenuListItem>
                {
                    divider? <Divider orientation="vertical" variant="middle" flexItem/> : <></>
                }
                
                <HeaderMenuListItem to="/my-driver" type={type}>
                    <HeaderMenuListItemIconc>
                        <LocalTaxiIcon />
                    </HeaderMenuListItemIconc>
                    <HeaderMenuListItemText>{t("my_driver")}</HeaderMenuListItemText>
                </HeaderMenuListItem>
                <HeaderMenuListItem to="/consulting" type={type}>
                    <HeaderMenuListItemIconc>
                        <ManageAccountsIcon />
                    </HeaderMenuListItemIconc>
                    <HeaderMenuListItemText>{t("consulting")}</HeaderMenuListItemText>
                </HeaderMenuListItem>
                <HeaderMenuListItem to="/history" type={type}>
                    <HeaderMenuListItemIconc>
                        <CastleIcon />
                    </HeaderMenuListItemIconc>
                    <HeaderMenuListItemText>{t("history")}</HeaderMenuListItemText>
                </HeaderMenuListItem>
            </HeadeMenuList>
            {
                auth ?? <Box></Box>
            }
        </HeaderWrapper>
    );
};

export default Header;