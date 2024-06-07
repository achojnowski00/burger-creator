import React from 'react';
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
  const [isSelected, setIsSelected] = React.useState(false);

  const hanbleFocus = () => setIsSelected(true);
  const handleBlur = () => setIsSelected(false);
  return (
    <div
      className={clsx(
        'app-input',
        {
          'app-input--selected': isSelected,
        },
        className,
      )}
    >
      <input
        className="app-input__inner"
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onFocus={hanbleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default AppInput;
