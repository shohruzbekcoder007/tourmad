import styled from "styled-components";
import { WelcomeMainTextType, WrapperPropsType, GlobalParagraphType, GlobalLinkType } from "./types";

export const Wrapper = styled.div<WrapperPropsType>`
    /* width: 1440px; */
    background: #FAFBFC;
    margin: 0 auto;
    min-height: ${props => props.height || 'auto'};
    @media (max-width: 1440px) {
        width: 100%;
    }
`

export const Container = styled.div`
    width: 1232px;
    margin: 0 auto;
    @media (max-width: 1232px) {
        width: 100%;
        padding: 0 20px;
    }
`

export const WelcomeMainText = styled.h2<WelcomeMainTextType>`
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: ${props => props.texttransform || "uppercase"};
    font-size: ${props => props.fontSize};
    padding-bottom: ${props => props.paddingbottom || "0px"};
    color: ${props => props.part ? props.theme.part_title : props.theme.neutrals};
    @media (max-width: 768px) {
        font-size: ${props => props.mediafontsize};
    }
`
export const GlobalParagraph = styled.p<GlobalParagraphType>`
    font-size: ${props => props.fontSize};
    font-style: normal;
    padding-bottom: ${props => props.paddingbottom || "0px"};
    font-weight: ${props => props.fontWeight};
    line-height: normal;
    color: ${props => props.color || props.theme.blackish_green};
    opacity: ${props => props.oposity};
`

export const GlobalLink = styled.a<GlobalLinkType>`
    color: ${props => props.color || props.theme.slamon};
    font-size: ${props => props.fontSize};
    font-style: normal;
    cursor: pointer;
    text-decoration: none;
    font-weight: ${props => props.fontWeight};
    line-height: normal;
    padding-bottom: ${props => props.paddingbottom || "0px"};
    &:hover{
        color: ${props => props.color || props.theme.mint_green};
    }
`