import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CastleIcon from '@mui/icons-material/Castle';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MapIcon from '@mui/icons-material/Map';
import Logo from './../../media/images/logo2.png'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Anchor = 'left';

const ResponsiveMenu: React.FC = () => {
  const {t} = useTranslation()
  const [state, setState] = React.useState({
    left: false,
  });
  const navigate = useNavigate();

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
      sx={{ width:  300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Box textAlign="center" pt="20px">
            <img src={Logo} width="120px" alt="" />
        </Box>
      <List>
          <ListItem disablePadding onClick={() => navigate('/protected/hotel')}>
            <ListItemButton>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Trip Advisor"  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate('/my-driver')}>
            <ListItemButton>
              <ListItemIcon>
                <LocalTaxiIcon />
              </ListItemIcon>
              <ListItemText primary={t("my_driver")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate('/consulting')}>
            <ListItemButton>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary={t("consulting")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate('/history')}>
            <ListItemButton>
              <ListItemIcon>
                <CastleIcon />
              </ListItemIcon>
              <ListItemText primary={t("history")} />
            </ListItemButton>
          </ListItem>
          <Box display={{xl: "none", md: "none", sm: "none", xs: "block"}}>
            <ListItem onClick={() => navigate('/sign-in')}  disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
                </ListItemButton>
            </ListItem>
            <ListItem onClick={() => navigate('/sign-up')} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <HowToRegIcon />
                </ListItemIcon>
                <ListItemText primary="Sign up" />
                </ListItemButton>
            </ListItem>
          </Box>
      </List>
      <Divider />
      <List>
        <ListItem onClick={() => navigate('/protected/daily')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HotelIcon />
              </ListItemIcon>
              <ListItemText primary="Daily" />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => navigate('/protected/hotel')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HotelIcon />
              </ListItemIcon>
              <ListItemText primary="Hotel" />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => navigate('/protected/ticket')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FlightTakeoffIcon />
              </ListItemIcon>
              <ListItemText primary="Ticket" />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => navigate('/protected/restaurant')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RestaurantMenuIcon />
              </ListItemIcon>
              <ListItemText primary="Restaurant" />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => navigate('/protected/drive')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalTaxiIcon />
              </ListItemIcon>
              <ListItemText primary="Drive" />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => navigate('/protected/plan')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkAddIcon />
              </ListItemIcon>
              <ListItemText primary="Plan" />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => navigate('/protected/map')} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Map" />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer("left", true)} sx={{ 
            padding: {xl: "15px 24px", md: "15px 24px", sm: "15px 24px", xs: "8px 10px"},  
            }} variant='contained'><MenuIcon /></Button>
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
  );
}

export default ResponsiveMenu;