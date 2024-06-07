import clsx from 'clsx';

import { IButtonClickHandler } from 'src/core/IHandlers';

import './app-button.scss';

export type IAppButtonProps = IComponent & {
  disabled?: boolean;
  text: string;
  onClick?: IButtonClickHandler;
};

const AppButton: React.FC<IAppButtonProps> = ({ className, disabled, text, onClick }) => {
  return (
    <button className={clsx('app-button', className)} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default AppButton;
