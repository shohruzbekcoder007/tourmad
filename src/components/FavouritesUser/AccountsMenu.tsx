import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { logOut } from '../../redux/slices/userSlice';
import { useTranslation } from 'react-i18next';

interface AccountMenuI {
    children: React.ReactNode
}

const AccountsMenu:React.FC<AccountMenuI> = ({children}) => {
  const {t} = useTranslation()
  let navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutF = () => {
    dispatch(logOut())
    navigate('/')
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {children}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { handleClose(); navigate('/users/users-account')}}>{t("Profile")}</MenuItem>
        <MenuItem onClick={() => { handleClose(); navigate('/my-trip') }}>{t("My trips")}</MenuItem>
        <MenuItem onClick={logOutF}>{t("Logout")}</MenuItem>
      </Menu>
    </div>
  );
}

export default AccountsMenu
