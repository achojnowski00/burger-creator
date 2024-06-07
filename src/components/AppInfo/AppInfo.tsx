import clsx from 'clsx';

import { IAppInfoType } from 'src/core/IAppInfoType';

import './app-info.scss';

type IProps = IComponent & {
  text: string;
  /**
   * @default 'ERROR'
   */
  type?: IAppInfoType;
};

const AppInfo: React.FC<IProps> = ({ text, className, type = 'ERROR' }) => {
  return <p className={clsx('app-info', `app-info--${type.toLowerCase()}`, className)}>{text}</p>;
};

export default AppInfo;
