import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxStyle = styled(Box)`
    border-radius: 16px;
    background: ${props => props.theme.neutrals};
    padding: 32px 24px;
    box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
`