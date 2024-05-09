import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const SubLink = styled(NavLink)<{ isActive?: boolean }>`
    padding: 0px 4px 10px 4px;
    margin: 0px 5px 0px 10px;
    color: ${props => props.theme.blackish_green};
    font-size: 14px;
    font-weight: 500;
    &:hover{
        border-bottom: 2px solid ${props => props.theme.blackish_green};
    };
    ${props => props.isActive &&
    css`
      border-bottom: 2px solid ${props.theme.blackish_green};
    `};
`