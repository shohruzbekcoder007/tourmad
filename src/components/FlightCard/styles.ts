import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxStyle = styled(Box)`
    background-color: ${props => props.theme.main_bg};
    box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 40px;
    &:hover{
        box-shadow: 0px 4px 16px 0px rgba(164, 168, 167, 0.413);
    }
`