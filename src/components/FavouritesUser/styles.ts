import styled from "styled-components";

export const FavouritesUserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
`

export const FavouritesText = styled.span`
    color: ${props => props.theme.blackish_green};
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media (max-width: 600px) {
        display: none;
    }
`

export const FavouriteWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding-right: 15px;
    cursor: pointer;
    border-right: 2px solid ${props => props.theme.blackish_green};

`