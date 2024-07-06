import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import { Divider, Rating, TextField } from '@mui/material';
import { DriveClientReviewType } from '../../utils/response_types';
import Alert from '@mui/material/Alert';

type PropsType = {
    btnText: string,
    id: string | undefined,
    message: string | null, 
    reviewSend: (data: {id: string, review: DriveClientReviewType}) => void
}

type Anchor = 'right';



const InputReview: React.FC<PropsType> = (props) => {
    const [state, setState] = React.useState({
        right: false,
    });
    const [value, setValue] = React.useState<number | null>(0);
    const [comment, setComment] = React.useState<string | "">("");

    function newReview () {
        props.reviewSend({id: props.id?props.id:"", review: {rate: value, review: comment}})
    }

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
            sx={{ width: { xl: 500, md: 400, sm: 350, xs: 300 } }}
            p="24px"
            pt="44px"
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <WelcomeMainText fontSize='32px' paddingbottom='44px' part="true" mediafontsize='24px'>
                Give your Review
            </WelcomeMainText>
            <Box pb="44px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Comment</GlobalParagraph>
                <TextField fullWidth value={comment} onChange={(e) => setComment(e.target.value)} type='text' variant='outlined' label="Comment" />
            </Box>
            <Box pb='44px'>
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Raiting</GlobalParagraph>
                <Rating  defaultValue={2} size="large"  name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}/>
            </Box>
                {
                    props.message === "" ? <></>  : <Box pb="44px"><Alert severity="error">{props.message}</Alert></Box>
                }
            <Divider />
            <Box py="44px" display="flex" justifyContent="space-between">
                <Button variant='outlined' onClick={toggleDrawer(anchor, false)} sx={{
                    width: '120px',
                    height: "40px",
                    borderRadius: "25px"
                }}>Cancel</Button>
                <Button variant='contained' onClick={newReview} sx={{
                    width: '120px',
                    height: "40px",
                    borderRadius: "25px",
                }}>Send</Button>
            </Box>
        </Box>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer("right", true)} sx={{ height: "48px" }} variant='contained'>{props.btnText}</Button>
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

export default InputReview