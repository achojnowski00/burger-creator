import React from 'react';
import clsx from 'clsx';

import './app-header.scss';

type IHeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type IProps = IComponent & {
  text: string;
  /**
   * @defaultValue `h1`
   */
  Component?: IHeaderType;
};

const AppHeader: React.FC<IProps> = ({ className, text, Component = 'h1' }) => {
  return <Component className={clsx('app-header', className)}>{text}</Component>;
};

export default AppHeader;
