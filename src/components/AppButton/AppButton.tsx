import clsx from 'clsx';

import { IButtonClickHandler } from 'src/core/IHandlers';

import './app-button.scss';

export type IAppButtonProps = IComponent & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: IButtonClickHandler;
};

const AppButton: React.FC<IAppButtonProps> = ({ className, disabled, children, onClick }) => {
  return (
    <button className={clsx('app-button', className)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default AppButton;
