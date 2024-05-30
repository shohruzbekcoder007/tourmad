import {
  Stack,
  Box,
  Button,
  List,
  ListItemButton,
  Collapse,
  ListItemText,
  Slider,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { GlobalParagraph } from "../../global_styles/styles";
import HotelFilterCard from "../HotelFilterCard";

const MAX = 1200;
const MIN = 50;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const HotelFilters: React.FC = () => {
  const [openPrice, setOpenPrice] = React.useState(true);
  const [openRating, setOpenRating] = React.useState(true);
  const [openAirlines, setOpenAirlines] = React.useState(true);
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const [checkedAirlines, setCheckedAirlines] = React.useState([0]);
  const [age, setAge] = React.useState("");

  const handleChangeSort = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleToggleAirlines = (value: number) => () => {
    const currentIndex = checkedAirlines.indexOf(value);
    const newChecked = [...checkedAirlines];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedAirlines(newChecked);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleClickPrice = () => {
    setOpenPrice(!openPrice);
  };

  const handleClickRating = () => {
    setOpenRating(!openRating);
  };

  const handleClickAirlines = () => {
    setOpenAirlines(!openAirlines);
  };

  return (
    <Stack>
      <Box display="flex" justifyContent="space-between">
        <Box width="343px">
          <GlobalParagraph fontSize="20px" fontWeight="600">
            Filters
          </GlobalParagraph>
          <Box width="100%" py="32px">
            <List
              sx={{ width: "100%", maxWidth: 360 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickPrice}>
                <ListItemText primary="Prise" />
                {openPrice ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openPrice} timeout="auto" unmountOnExit>
                <List component="div" sx={{ pt: "16px" }} disablePadding>
                  <Slider
                    marks={marks}
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body2" sx={{ cursor: "pointer" }}>
                      ${MIN}
                    </Typography>
                    <Typography variant="body2" sx={{ cursor: "pointer" }}>
                      ${MAX}
                    </Typography>
                  </Box>
                </List>
              </Collapse>
            </List>
          </Box>
          <Divider />
          <Box width="100%" py="32px">
            <List
              sx={{ width: "100%", maxWidth: 360 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickRating}>
                <ListItemText primary="Rating" />
                {openRating ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openRating} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Button
                    sx={{ mr: "16px", mt: "16px" }}
                    size="small"
                    variant="outlined"
                  >
                    1+
                  </Button>
                  <Button
                    sx={{ mr: "16px", mt: "16px" }}
                    size="small"
                    variant="outlined"
                  >
                    2+
                  </Button>
                  <Button
                    sx={{ mr: "16px", mt: "16px" }}
                    size="small"
                    variant="outlined"
                  >
                    3+
                  </Button>
                  <Button
                    sx={{ mr: "16px", mt: "16px" }}
                    size="small"
                    variant="outlined"
                  >
                    4+
                  </Button>
                  <Button
                    sx={{ mr: "16px", mt: "16px" }}
                    size="small"
                    variant="outlined"
                  >
                    5+
                  </Button>
                </List>
              </Collapse>
            </List>
          </Box>
          <Divider />
          <Box width="100%" py="32px">
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickAirlines}>
                <ListItemText primary="Freebies" />
                {openAirlines ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openAirlines} timeout="auto" unmountOnExit>
                <List component="div" sx={{ pt: "16px" }} disablePadding>
                  {[
                    "Free breakfast",
                    "Free parking",
                    "Free internet",
                    "Free airport shuttle",
                    "Free cancellation",
                  ].map((value, index) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem key={index} disablePadding>
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggleAirlines(index)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checkedAirlines.indexOf(index) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={`${value}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </Box>
          <Divider />
          <Box width="100%" py="32px">
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickAirlines}>
                <ListItemText primary="Amenities" />
                {openAirlines ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openAirlines} timeout="auto" unmountOnExit>
                <List component="div" sx={{ pt: "16px" }} disablePadding>
                  {[
                    "24hr front desk",
                    "Air-conditioned",
                    "Fitness",
                    "Pool",
                  ].map((value, index) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem key={index} disablePadding>
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggleAirlines(index)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checkedAirlines.indexOf(index) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={`${value}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
            <Button
              sx={{
                color: "#FF8682",
                background: "none",
                border: "none",
                boxShadow: "none",
                fontSize: "14px",
                fontWeight: "700"
              }}
            >
              +24 more
            </Button>
          </Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box width="792px">
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pb="24px"
          >
            <GlobalParagraph fontSize="14px" fontWeight="600">
              Showing 4 of <span style={{ color: `#FF8682` }}>257 places</span>
            </GlobalParagraph>
            <Box width="250px">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-select-small-label">
                  Sort by Recommended
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Sort by Recommended"
                  onChange={handleChangeSort}
                >
                  <MenuItem value={10}>Sort 1</MenuItem>
                  <MenuItem value={20}>Sort 2</MenuItem>
                  <MenuItem value={30}>Sort 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <HotelFilterCard />
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button sx={{ width: "792px" }} color="success" variant="contained">
          Show more results
        </Button>
      </Box>
    </Stack>
  );
};

export default HotelFilters;
