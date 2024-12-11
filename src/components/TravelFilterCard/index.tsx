import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import airlines_photo from "./../../media/images/image 40.png";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GlobalParagraph } from "../../global_styles/styles";
import { CheapPriseType } from "../../utils/response_types";

const TravelFilterCard: React.FC<{ data: CheapPriseType[] }> = ({ data }) => {
  return (
    <Stack>
      {data?.map((item, index) => {
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
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Uzbekistan_Airways_logo.svg/256px-Uzbekistan_Airways_logo.svg.png"
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
                    HY 51
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Toshkent → Urganch
                  </Typography>
                </Grid>

                {/* Departure Info */}
                <Grid item xs={2}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    07:00
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    25 Dekabr, Ch, 2024y.
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Terminal 3
                  </Typography>
                </Grid>

                {/* Flight Details */}
                <Grid item xs={4} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#0066cc", fontWeight: 600 }}
                  >
                    TAS
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        flexGrow: 1,
                        height: 1,
                        backgroundColor: "#0066cc",
                        marginX: 1,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#0066cc",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Airbus 320 Neo
                    </Typography>
                    <Box
                      sx={{
                        flexGrow: 1,
                        height: 1,
                        backgroundColor: "#0066cc",
                        marginX: 1,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "textSecondary", fontWeight: "bold" }}
                  >
                    1s. 30d.
                  </Typography>
                </Grid>

                {/* Arrival Info */}
                <Grid item xs={2}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    08:30
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    25 Dekabr, Ch, 2024y.
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Terminal UGC
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Paper>
        );
      })}
    </Stack>
  );
};

export default TravelFilterCard;
