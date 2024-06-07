import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { NavigatorRoutes } from './NavigatorRoutes';

import './navigator.scss';

type IProps = IComponent;

const Navigator: React.FC<IProps> = ({ className }) => {
  return (
    <div className={clsx('navigator', className)}>
      {NavigatorRoutes.map(({ path, icon, title }) => (
        <Link to={path} key={path} title={title} className="navigator__tile">
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Navigator;
