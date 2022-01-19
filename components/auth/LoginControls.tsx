import { signIn, signOut, useSession } from 'next-auth/react';
import {
  Avatar, Button, IconButton, Tooltip,
} from '@mui/material';
import React from 'react';
import ProfileMenu from './ProfileMenu';
import ProfileCard from './ProfileCard';

const LoginControls = () => {
  const { data: session } = useSession();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenProfileMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseProfileMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setAnchorElUser(null);
  };

  const handleSignin = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    signIn();
  };

  if (session && session.user) {
    const name = session.user.name || 'No name';
    const avatarImage = session.user.image || undefined;

    return (
      <>
        <Tooltip title="Profile menu">
          <IconButton onClick={handleOpenProfileMenu} sx={{ p: 0 }}>
            <Avatar alt={name} src={avatarImage} />
          </IconButton>
        </Tooltip>
        <ProfileMenu anchorEl={anchorElUser}
                     onClose={handleCloseProfileMenu}
                     UserCard={<ProfileCard user={session.user}/>} />
      </>
    );
  }

  return <Button color="inherit" onClick={handleSignin}>Sign in</Button>;
};

export default LoginControls;
