import { Box } from "@mui/system";
import styled from "styled-components";

export const HeaderWrapper = styled(Box)`
    box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
    position: sticky;
    top: 0;
    z-index: 2000;
    background-color: ${props => props.theme.main_bg};
`