import React from "react";
import { Container } from "../../global_styles/styles";
import { Box, Grid, Button} from "@mui/material";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { WelcomeMainText, GlobalParagraph } from "../../global_styles/styles";
import { SliderCard, SliderShadow } from "./styles";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const HomeSlider: React.FC = () => {
    return (
        <Container>
            <Box pb="300px">
                <Grid container pb="40px">
                    <Grid item xl={8} md={8} sm={6} xs={6}>
                        <WelcomeMainText paddingbottom={"16px"} fontSize={"32px"} part="true">Reviews</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} fontWeight="400">What people says about Golobe facilities</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={6} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button variant="outlined" sx={{color: "#000"}} color="success">See All</Button>
                    </Grid>
                </Grid>
                <Carousel
                swipeable={false}
                draggable={false}
                autoPlay={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                        <SliderCard>
                            <SliderShadow></SliderShadow>
                            <WelcomeMainText fontSize="24px" paddingbottom="16px" part="true">“A real sense of community, nurtured”</WelcomeMainText>
                            <GlobalParagraph fontSize="14px" fontWeight="500" oposity="0.5">Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.</GlobalParagraph>
                        </SliderCard>

                        <SliderCard>
                            <SliderShadow></SliderShadow>
                            <WelcomeMainText fontSize="24px" paddingbottom="16px" part="true">“The facilities are superb. Clean, slick, bright.”</WelcomeMainText>
                        </SliderCard>

                    
                    
                </Carousel>
            </Box>
        </Container>
    );
};

export default HomeSlider;