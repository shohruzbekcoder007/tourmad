import styled from "styled-components";
import { WelcomeMainTextType, WrapperPropsType } from "./types";

export const Wrapper = styled.div<WrapperPropsType>`
    width: 1440px;
    background: #FAFBFC;
    margin: 0 auto;
    min-height: ${props => props.height || 'auto'}; 
`

export const Container = styled.div`
    width: 1232px;
`

export const WelcomeMainText = styled.h2<WelcomeMainTextType>`
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    font-size: ${props => props.fontSize};
    padding-bottom: ${props => props.paddingbottom || "0px"};
    color: ${props => props.part ? props.theme.part_title : props.theme.neutrals};
`