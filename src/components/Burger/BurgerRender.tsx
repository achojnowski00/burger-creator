import React from 'react';
import clsx from 'clsx';

import AppInfo from '../AppInfo';
import BurgerNameForm from './items/BurgerNameForm';
import AppHeader from '../AppHeader';
import BurgerConstruction from '../BurgerConstruction';

import { IIngridientInBurger } from 'src/core/IBurgerIngridient';
import { IHandleFormSubmit, IHandleInputChange } from 'src/core/IHandlers';

import './burger.scss';

type IProps = IComponent & {
  isCompleted: boolean;
  burger: IIngridientInBurger[];
  /**
   * Error message while creating burger
   */
  burgerError?: string;
  /**
   * Error message while submitting form
   */
  formError: string;
  inputValue: string;
  /**
   * Success message after submitting form
   */
  successMessage: string;

  onInputChange: IHandleInputChange;
  onSubmit: IHandleFormSubmit;
};

const BurgerRender: React.FC<IProps> = ({
  className,
  isCompleted,
  burger,
  burgerError,
  formError,
  inputValue,
  successMessage,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div className={clsx('burger', className)}>
      <AppHeader text="Your Burger" />

      {burgerError && !successMessage && <AppInfo text={burgerError} />}
      {successMessage && <AppInfo type="SUCCESS" text={successMessage} />}
      {burger.length === 0 && !successMessage && !burgerError && (
        <AppInfo
          type="INFO"
          text="Add items to create your burger. First item must be bottom bun. To finish your burger choose top bun"
        />
      )}

      <BurgerConstruction burger={burger} />

      {isCompleted && (
        <BurgerNameForm
          formError={formError}
          value={inputValue}
          onChange={onInputChange}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default BurgerRender;
