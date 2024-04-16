import styled from "styled-components"
import { Button } from "@mui/material"

export const CustomButtonStyle = styled(Button)`
    background-color: ${props => props.theme.mint_green};
    color: ${props => props.theme.blackish_green};
`