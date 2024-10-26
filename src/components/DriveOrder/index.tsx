import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import { Divider, Grid, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocalizationProvider, StaticDateTimePicker } from '@mui/x-date-pickers';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CustomAutocomplete } from '../../helper_components';
import dayjs from 'dayjs';
import SimpleMap from '../SimpleMap';
import { useTranslation } from 'react-i18next';

type PropsType = {
    btnText: string
}

type Anchor = 'right';

type Option = {
    label: string,
    value: string
}

const options: Option[] = [
    { label: 'The Shawshank Redemption', value: "1994" },
    { label: 'The Godfather', value: "1972" },
    { label: 'The Godfather: Part II', value: "1974" },
    { label: 'The Dark Knight', value: "2008" },
    { label: '12 Angry Men', value: "1957" },
    { label: "Schindler's List", value: "1993" },
    { label: 'Pulp Fiction', value: "1994" },
]

const DriveOrder: React.FC<PropsType> = (props) => {
    const {t} = useTranslation()
    const [state, setState] = React.useState({
        right: false,
    });

    const [from, setFrom] = useState<Option | null>(null)

    const getChangeOptionFrom = (newValue: Option | null) => {
        setFrom(newValue)
    }

    useEffect(() => { }, [from])

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
                Driver Order
            </WelcomeMainText>

            <Box pb="44px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>{t("Destination")}</GlobalParagraph>
                <SimpleMap />
            </Box>
            <Box pb="44px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Start Data</GlobalParagraph>
                <Grid container spacing={2}>
                    <Grid item xl={12} md={12} sm={12} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                                    'StaticDateTimePicker',
                                ]}
                            >
                                <DemoItem>
                                    <StaticDateTimePicker componentsProps={{
            actionBar: { actions: [] }
          }} defaultValue={dayjs('')} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Box>
            <Box pb="44px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>{t("Comment")}</GlobalParagraph>
                <TextField fullWidth type='text' variant='outlined' label="Comment" />
            </Box>
            <Divider />
            <Box py="44px" display="flex" justifyContent="space-between">
                <Button variant='outlined' sx={{
                    width: '120px',
                    height: "40px",
                    borderRadius: "25px"
                }}>{t("Cancel")}</Button>
                <Button variant='contained' sx={{
                    width: '120px',
                    height: "40px",
                    borderRadius: "25px"
                }}>Order Driver</Button>
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

export default DriveOrder