import clsx from 'clsx';

import AppInput from 'src/components/AppInput';
import AppButton from 'src/components/AppButton';
import AppInfo from 'src/components/AppInfo';

import { IHandleFormSubmit, IHandleInputChange } from 'src/core/IHandlers';

import './burger-name-form.scss';

type IProps = IComponent & {
  value: string;
  formError: string;
  onChange: IHandleInputChange;
  onSubmit: IHandleFormSubmit;
};

const BurgerNameForm: React.FC<IProps> = ({ className, onChange, formError, value, onSubmit }) => {
  return (
    <form className={clsx('burger-name-form', className)} action="submit" onSubmit={onSubmit}>
      <AppInput
        className="burger-name-form__input"
        value={value}
        onChange={onChange}
        placeholder="input space"
      />
      {formError && <AppInfo text={formError} />}
      <AppButton>save</AppButton>
    </form>
  );
};

export default BurgerNameForm;
