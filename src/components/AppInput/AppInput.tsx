import clsx from 'clsx';

import { IHandleInputChange } from 'src/core/IHandlers';

import './app-input.scss';

export type IAppInputProps = IComponent & {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: IHandleInputChange;
};

const AppInput: React.FC<IAppInputProps> = ({
  value,
  onChange,
  className,
  placeholder,
  disabled,
}) => {
  return (
    <input
      className={clsx('app-input', className)}
      type="text"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default AppInput;
