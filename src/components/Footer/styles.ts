import styled from "styled-components";

export const FooterBox = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.mint_green};
`

export const FooterBottom = styled.div`
    width: 100%;
    padding-top: 200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const FooterLogo = styled.div`
    width: 236px;
    margin-top: 24px;
    @media (max-width: 800px) {
        width: 175px;
    }
`

export const FooterLink = styled.div`
    width: 175px;
    margin-top: 24px;
`

export const FooterList = styled.a`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: inline-block;
    padding-bottom: 12px;
    color: ${props => props.theme.blackish_green};
    text-decoration: none;
    opacity: 0.7;
    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`

export const FooterLogoImg = styled.div`
    img{
        display: inline-block;
        width: 165px;
        object-fit: cover;
        margin-left: -15px;
    }
`

export const FooterTop = styled.div`
    position: absolute;
    top: -150px;
    width: 100%;
    height: auto;
    padding: 24px;
    margin-bottom: 40px;
    border-radius: 20px;
    background-color: ${props => props.theme.medium_green};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const FooterSubscribe = styled.div`
    width: 593px;
    @media (max-width: 1100px) {
        width: 100%;
    }
`

export const FooterTopPhoto = styled.div`
    width: 400px;
    position: relative;
    @media (max-width: 1100px) {
        display: none;
    }
    img{
        width: 300px;
        position: absolute;
        bottom: -24px;
    }
`