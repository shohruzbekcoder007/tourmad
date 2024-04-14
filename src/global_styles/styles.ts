import styled from "styled-components";
import { WelcomeMainTextType, WrapperPropsType, GlobalParagraphType } from "./types";

export const Wrapper = styled.div<WrapperPropsType>`
    width: 1440px;
    background: #FAFBFC;
    margin: 0 auto;
    min-height: ${props => props.height || 'auto'}; 
`

export const Container = styled.div`
    width: 1232px;
    margin: 0 auto;
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
export const GlobalParagraph = styled.p<GlobalParagraphType>`
    font-family: Montserrat;
    font-size: ${props => props.fontSize};
    font-style: normal;
    padding-bottom: ${props => props.paddingbottom || "0px"};
    font-weight: ${props => props.fontWeight};
    line-height: normal;
    color: ${props => props.color || "#121"};
`