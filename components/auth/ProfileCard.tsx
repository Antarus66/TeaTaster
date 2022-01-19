import { Avatar } from '@mui/material';
import React from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  user: { // todo: move out
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const name = user.name || 'Unknown user';
  const image = user.image || undefined; // The MUI Avatar doesn't accept null

  return (
    <div className={styles.profileCard}>
      <Avatar className={styles.avatar} alt={name} src={image} />
      <div className={styles.userInfo}>
        <div className={styles.name}>{name}</div>
        <div className={styles.email}>{user.email}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
