import { ReactNode } from 'react';
import Header from '../Header/Header.container';
import NavigationBar from '../NavigationBar/NavigationBar.container';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <div className="content">
      <NavigationBar />
      <main>{children}</main>
    </div>
    <footer>Pied de page</footer>
  </>
);

export default Layout;
