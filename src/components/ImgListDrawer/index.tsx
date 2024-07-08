import { Box, Button, Drawer } from '@mui/material'
import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { GlobalParagraph } from '../../global_styles/styles'

type Anchor = 'left'

function srcset(image: string | null, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

type PropsType = {
    galeryList: { image: string | null; title: string | null; rows: number; cols: number; }[]
    name?: string | null
}

const ImgListDrawer:React.FC<PropsType> = ({ galeryList, name }) => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
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
            sx={{ width: {xl: "600px", md: "500px", sm: "400px", xs: "300px"} }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box textAlign="center" py="32px">
                <GlobalParagraph fontWeight='700' fontSize='32px' mediafontsize='18px'>{name}</GlobalParagraph>
            </Box>
            <ImageList
                sx={{ width: "100%", height: "auto", pb: "16px" }}
                variant="quilted"
                cols={4}

                rowHeight={200}
            >
                {galeryList.map((item) => (
                    <ImageListItem key={item?.image} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item?.image, 200, item.rows, item.cols)}
                            alt={item?.title||"image of galery"}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button sx={{ position: "absolute", right: '16px', bottom: "16px" }} onClick={toggleDrawer("left", true)} variant='contained'>View All Photos</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}

export default ImgListDrawer