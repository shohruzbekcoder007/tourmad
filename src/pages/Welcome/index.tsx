import React from 'react'
import { TicketTable, TripPlan, Welcome as WelcomeComponent, ShowService, Footer } from '../../components';

import { Box } from '@mui/system';

const Welcome: React.FC = () => {
    return (
        <>
            <WelcomeComponent />
            <TicketTable />
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