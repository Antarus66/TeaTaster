import React from 'react';
import { Container } from '@mui/material';
import Header from './header/Header';

export interface LayoutProps {
  example?: null
}

const Layout: React.FC<LayoutProps> = (props) => (
  <>
    <Header />
    <Container maxWidth="lg">
      {props.children}
    </Container>
  </>
);

export default Layout;
