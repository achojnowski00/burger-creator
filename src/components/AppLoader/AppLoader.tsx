import clsx from 'clsx';

import './app-loader.scss';

type IProps = IComponent;

const AppLoader: React.FC<IProps> = ({ className }) => {
  return (
    <div className={clsx('app-loader', className)}>
      <span className="loader" />
    </div>
  );
};

export default AppLoader;
