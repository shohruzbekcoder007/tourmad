import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeadeMenuList = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
`

export const HeaderMenuListItem = styled(NavLink)<{ type?: "white" | "dark" }>`
    padding: 30px 0;
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
            height: 5px;
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
`

export const WelcomeLogo = styled.div`
    img {
        display: inline-block;
    }
`