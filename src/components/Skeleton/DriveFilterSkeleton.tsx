import { Box, Divider, Paper, Skeleton, Stack } from "@mui/material";
import React from "react";

const DriveFilterSkeleton: React.FC = () => {

  return (
    <Stack>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "12px",
          padding: "24px 16px",
          mb: "32px",
          "&:hover": {
            boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box  width={{xl: '30%', md: "30%", sm: "30%", xs: "100%"}}>
            <Skeleton variant="rectangular" sx={{height: {xl: "100%", md: '100%', sm: "100%", xs: "200px"}}} />
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: '65%', md: "65%", sm: "65%", xs: "100%"}}>
            <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
                <Skeleton variant="rectangular" width='150px' />
              <Box>
                <Skeleton variant="rectangular"  width='100px' />
                <Skeleton variant="rectangular" sx={{mt: '10px'}} width='150px' />
              </Box>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                <Skeleton variant="rectangular"  width='150px' />
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                <Skeleton variant="rectangular"  width='100px' />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
                <Skeleton variant="rectangular"  width='200px' />
            </Box>
            <Divider style={{
              marginTop: "24px"
            }}/>
            <Box pt="16px" display="flex" justifyContent="space-between">
                <Skeleton variant="rectangular"  width='50px' height='40px' />
              <Box width={{xl: "85%", md: "75%", sm: "75%", xs: "75%"}}>
                <Skeleton variant="rectangular"   height='40px' />
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
};

export default DriveFilterSkeleton;
