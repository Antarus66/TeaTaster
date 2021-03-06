import React from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

interface ProfileMenuProps {
  anchorEl: Element | null,
  onClose: (e: React.MouseEvent<HTMLElement>) => void,
  UserCard: React.ReactNode,
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ anchorEl, onClose, UserCard }) => {
  const { t } = useTranslation();

  const handleSignout = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    signOut();
    onClose(event);
  };

  return (
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {UserCard}
      <MenuItem>
        <Typography textAlign="center" onClick={handleSignout}>{t('navbar.signout')}</Typography>
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
