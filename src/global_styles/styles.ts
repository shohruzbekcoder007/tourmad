import styled from "styled-components";
import { WrapperPropsType } from "./types";

export const Wrapper = styled.div<WrapperPropsType>`
    width: 1440px;
    background: #FAFBFC;
    margin: 0 auto;
    min-height: ${props => props.height || 'auto'}; 
`

export const Container = styled.div`
    width: 1232px;
`