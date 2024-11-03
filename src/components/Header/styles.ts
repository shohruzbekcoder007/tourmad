import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
    @media (max-width: 600px) {
        background-color: white;
        width: 100%;
        margin-left: -40px;
        border-radius: 16px;
        position: fixed;
        z-index: 100;
        top: 0;
    }

`

export const HeadeMenuList = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
    @media (max-width: 900px) {
        display: none;
    }
`

export const HeaderMenuListItem = styled(NavLink)<{ type?: "white" | "dark" }>`
    padding: 15px 0;
    display: flex;
    align-items: center;
    gap: 4px;
    fill: ${props => props.type === "white"? props.theme.neutrals: props.theme.blackish_green};
    color: ${props => props.type === "white"? props.theme.neutrals: props.theme.blackish_green};
    &.active {
        position: relative;
        &::after{
            position: absolute;
            content: '';
            width: 100%;
            height: 3px;
            background-color: ${props => props.theme.mint_green};
            z-index: 1;
            bottom: 0;
            left: 0;
        }
    }
`


export const HeaderMenuListItemIconc = styled.span`
    display: inline-block;
`

export const HeaderMenuListItemText = styled.span`
    display: inline-block;
    padding-bottom: 6px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media (max-width: 1200px) {
        font-size: 12px;
    }
`

export const WelcomeLogo = styled.div`
    img {
        display: inline-block;
        width: 200px;
        object-fit: cover;
        @media (max-width: 1200px) {
            width: 120px;
        }
        @media (max-width: 600px) {
            width: 90px;
            display: none;
        }
    }
`