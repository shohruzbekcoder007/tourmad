import { Link } from "react-router-dom";
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

export const HeaderMenuListItem = styled(Link)`
    padding: 30px 0;
    display: flex;
    align-items: center;
    gap: 4px;
`

export const HeaderMenuListItemIconc = styled.span`
    fill: ${props => props.theme.neutrals};
`

export const HeaderMenuListItemText = styled.span`
    display: inline-block;
    color: ${props => props.theme.neutrals};
    padding-bottom: 6px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`