import React from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';

interface ProfileMenuProps {
  anchorEl: Element | null,
  onClose: (e: React.MouseEvent<HTMLElement>) => void,
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ anchorEl, onClose }) => {
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
      <MenuItem>
        <Typography textAlign="center" onClick={handleSignout}>Sign out</Typography>
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
