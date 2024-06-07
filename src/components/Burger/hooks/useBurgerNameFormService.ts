import React from 'react';

import { useCreateBurgerContext } from 'src/context/CreateBurgerContext';
import { useFavouriteBurgersContext } from 'src/context/FavouriteBurgersContext';

import { IHandleFormSubmit, IHandleInputChange } from 'src/core/IHandlers';

export default function useBurgerNameFormService() {
  const { onAddBurger } = useFavouriteBurgersContext();
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

      setInputValue((prev) => prev.trim());

      onAddBurger({
        name: inputValue.trim(),
        ingredients: burgerState.map(({ url, name, additionalStyles }) => ({
          name,
          url,
          additionalStyles,
        })),
      })
        .then(() => {
          onResetBurger();
          setInputValue('');
          setFormError('');
          setSuccessMessage('Burger added to favourites');
        })
        .catch(() => {
          setFormError("Couldn't add burger to favourites");
        });
    },
    [burgerState, inputValue, onAddBurger, onResetBurger],
  );

  return {
    inputValue,
    successMessage,
    formError,
    onInputChange,
    onSubmit,
  };
}
