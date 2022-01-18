import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@mui/material';
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

  if (session) {
    return <Button color="inherit" onClick={handleSignout}>Sign out</Button>;
  }

  return <Button color="inherit" onClick={handleSignin}>Sign in</Button>;
};

export default LoginControls;
