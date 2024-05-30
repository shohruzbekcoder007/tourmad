import styled from "styled-components";

export const TripPlanCard = styled.div`
    width: 389px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
    background-color: ${props => props.theme.neutrals};
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: flex-start;
    &:hover{
        box-shadow: 0px 4px 4px 0px rgba(17, 34, 17, 0.05); 
        cursor: pointer;
    }
    @media (max-width: 1233px) {
        width: 31%;
        margin-top: 32px;
    }
    @media (max-width: 900px) {
        width: 48%;
        margin-top: 32px;
    }
    @media (max-width: 600px) {
        width: 100%;
        margin-top: 32px;
    }
`

export const CardPhoto = styled.div`
    img {
        display: inline-block;
        width: 90px;
        height: 90px;
        border-radius: 8px;
    }
`

export const TripCardTitle = styled.h3`
    color: ${props => props.theme.blackish_green};
    opacity: 0.7;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 8px;
`