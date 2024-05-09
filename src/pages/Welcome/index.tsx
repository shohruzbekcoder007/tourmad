import React from 'react'
import { TripPlan, Welcome as WelcomeComponent, ShowService, Footer, ServicesLink } from '../../components';

import { Box } from '@mui/system';

const Welcome: React.FC = () => {
    return (
        <>
            <WelcomeComponent />
            {/* <TicketTable /> */}
            <ServicesLink/>
            <TripPlan />
            <ShowService />
            <Box
                paddingTop="120px"
            >
                <Footer />
            </Box>
        </>
    )
}

export default Welcome