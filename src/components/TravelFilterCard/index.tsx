import {
  Box,
  Card,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import airlines_photo from "./../../media/images/image 40.png";
import React from "react";
import { CheapPriseType } from "../../utils/response_types";
import { useAppSelector } from "../../redux/hooks";
import { getFromCity, getToCity } from "../../redux/slices/ticketSlice";
import { formatDate, formatTime } from "../../utils/dateTimeUtils";

const TravelFilterCard: React.FC<{ data: CheapPriseType[] }> = ({ data }) => {
  const toCity = useAppSelector(getToCity)
  const fromCity = useAppSelector(getFromCity)
  return (
    <Stack>
      {fromCity && toCity ? (

        data.map((item, index) => {
          if (!item?.departure_at) return null; // Skip if departure_at is missing
          return (
            <Paper
              key={index}
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
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: "#f9f9f9",
                  alignItems: "center",
                }}
              >
                {/* Airline Logo & Flight Info */}
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        overflow: "hidden",
                        background: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: 2,
                      }}
                    >
                      <img
                        src={airlines_photo}
                        alt="Airline Logo"
                        style={{ width: "70%", height: "auto" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "#0066cc" }}
                    >
                      {item?.airline}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {fromCity?.label} → {toCity?.label}
                    </Typography>
                  </Grid>

                  {/* Departure Info */}
                  <Grid item xs={2}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {formatTime(item?.departure_at as string)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {formatDate(item?.departure_at as string)}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Paper>
          );
        })
      ) : (
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
            alignItems: "center"
          }}
        >
          <Box margin="0 auto">Yo'nalish tanlang!!!</Box>
        </Paper>
      )}
    </Stack>

  );
};

export default TravelFilterCard;
