import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


type Anchor = 'right';

const SwipeDrawer = () => {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 500 }}
            p="24px"
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <WelcomeMainText fontSize='32px' paddingbottom='24px' part="true" mediafontsize='24px'>
                Create a Trip
            </WelcomeMainText>
            <Box pb="24px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Trip Name</GlobalParagraph>
                <TextField fullWidth type='text' variant='outlined' label="Trip Name" />
            </Box>
            <Box pb="24px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Destination</GlobalParagraph>
                <TextField fullWidth InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} type='text' variant='outlined' label="Where to?" />
            </Box>
            <Box pb="24px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Dates or Length of stay</GlobalParagraph>

            </Box>
        </Box>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer("right", true)}>{anchor}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                        onOpen={toggleDrawer("right", true)}
                    >
                        {list("right")}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    )
}

export default SwipeDrawer