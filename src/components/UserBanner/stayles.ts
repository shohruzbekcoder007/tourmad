import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxStyle = styled(Box)`
    width: 160px;
    height: 160px;
    border-radius: 160px;
    position: relative;
    border: 4px solid ${props => props.theme.slamon};
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
`