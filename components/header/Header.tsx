import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';
import LoginControls from './auth/LoginControls';
import LangControls from './LangControls';
import styles from './Header.module.css';

const Header = () => (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <GrassIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tea Taster
        </Typography>
        <LangControls />
        <LoginControls className={styles.loginControls} />
      </Toolbar>
    </AppBar>
);

export default Header;
