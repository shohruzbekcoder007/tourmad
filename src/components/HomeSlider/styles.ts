import styled from "styled-components";

export const SliderCard = styled.div`
    position: relative;
    width: 425px;
    border-radius: 20px;
    box-shadow: 2px 4px 16px 0px rgba(17, 34, 17, 0.10);
    background-color: ${props => props.theme.neutrals};
    padding: 24px;
    height: 584px;
   
`

export const SliderShadow = styled.div`
    position: absolute;
    width: 425px;
    border-radius: 20px;
    opacity: 0.4;
    z-index: -1;
    top: 24px;
    left: 24px;
    height: 584px;
    background-color: ${props => props.theme.mint_green};
`