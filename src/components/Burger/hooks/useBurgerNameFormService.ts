import React from 'react';
import { useCreateBurgerContext } from 'src/context/CreateBurgerContext';
import { IHandleFormSubmit, IHandleInputChange } from 'src/core/IHandlers';

export default function useBurgerNameFormService() {
  const { onResetBurger, burgerState, error } = useCreateBurgerContext();
  const [inputValue, setInputValue] = React.useState<string>('');
  const [formError, setFormError] = React.useState<string>('');
  const [successMessage, setSuccessMessage] = React.useState<string>('');

  /**
   * Hide success message when burger is changed
   */
  React.useEffect(() => {
    if ((burgerState.length > 0 || error?.length) && successMessage !== '') {
      setSuccessMessage('');
    }
  }, [burgerState, error, successMessage]);

  const onInputChange: IHandleInputChange = React.useCallback(
    (event) => {
      setFormError('');
      setInputValue(event.target.value);
    },
    [setInputValue],
  );

  const onSubmit: IHandleFormSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      if (inputValue.trim() === '') {
        setFormError('Burger name cannot be empty');
        return;
      }

      setInputValue('');
      setSuccessMessage('Burger saved successfully');
      // eslint-disable-next-line no-console
      console.log('Save burger', inputValue);

      onResetBurger();
    },
    [inputValue, onResetBurger],
  );

  return {
    inputValue,
    successMessage,
    formError,
    onInputChange,
    onSubmit,
  };
}
