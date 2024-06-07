import { Outlet } from 'react-router-dom';

import Navigator from '../Navigator';

import './layout.scss';

const Layout = () => {
  return (
    <div className="layout">
      <Navigator className="layout__navigator" />

      <Outlet />
    </div>
  );
};

export default Layout;
