import { signIn, signOut, useSession } from 'next-auth/react';
import {
  Avatar, Button, IconButton, Tooltip,
} from '@mui/material';
import React from 'react';

const LoginControls = () => {
  const { data: session } = useSession();

  const handleSignout = (event: React.MouseEvent) => {
    event.preventDefault();
    signOut();
  };

  const handleSignin = (event: React.MouseEvent) => {
    event.preventDefault();
    signIn();
  };

  if (session && session.user) {
    const name = session.user.name || 'No name';
    const avatarImage = session.user.image || undefined;

    return (
      <Tooltip title="Sign Out">
        <IconButton onClick={handleSignout} sx={{ p: 0 }}>
          <Avatar alt={name} src={avatarImage} />
        </IconButton>
      </Tooltip>
    );
  }

  return <Button color="inherit" onClick={handleSignin}>Sign in</Button>;
};

export default LoginControls;
