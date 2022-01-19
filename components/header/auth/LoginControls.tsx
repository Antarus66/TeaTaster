import { signIn, signOut, useSession } from 'next-auth/react';
import {
  Avatar, Button, IconButton, Tooltip,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileMenu from './ProfileMenu';
import ProfileCard from './ProfileCard';

const LoginControls: React.FC<{className: string}> = ({ className }) => {
  const { data: session } = useSession();
  const { t } = useTranslation();
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
    const name = session.user.name || (t('navbar.noname') as string);
    const avatarImage = session.user.image || undefined;

    return (
      <>
        <Tooltip className={className} title={t('navbar.profile-menu') as string}>
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

  return <Button color="inherit" onClick={handleSignin}>{ t('navbar.signin') }</Button>;
};

export default LoginControls;
