import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconButton, Menu, MenuItem, Tooltip,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const LangControls: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const getChangeLanguage = (language: string) => () => {
    closeMenu();
    i18n.changeLanguage(language);
  };

  const languageList = [...i18n.languages].sort();
  const languageOptions = languageList.map((lang) => (
    <MenuItem key={lang} onClick={getChangeLanguage(lang)}>{ lang.toUpperCase() }</MenuItem>
  ));

  return (
    <>
      <Tooltip title={t('navbar.change-language') as string}>
        <IconButton
          size="large"
          color="inherit"
          onClick={openMenu}
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        { languageOptions }
      </Menu>
    </>
  );
};

export default LangControls;
