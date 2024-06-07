import React from 'react';

import canAddIngridient from '../utils/canAddIngridient';
import canRemoveIngridient from '../utils/canRemoveIngridient';

import { IBurgerIngridient, IIngridientInBurger } from 'src/core/IBurgerIngridient';
import { IngirientsStateInitialState } from '../core/IngirientsStateInitialState';
import { ICreateBurgerContext } from '../CreateBurgerContext';

export default function useCreateBurgerContextService(): ICreateBurgerContext {
  const [ingridientsState, setIngridientsState] = React.useState<IBurgerIngridient[]>(
    IngirientsStateInitialState,
  );
  const [burgerState, setBurgerState] = React.useState<IIngridientInBurger[]>([]);
  const [error, setError] = React.useState<string | undefined>();

  const resetErrorMessage = () => {
    setError(undefined);
  };

  const onResetBurger = () => {
    setBurgerState([]);
    setIngridientsState(IngirientsStateInitialState);
  };

  const onAddIngridient = (ingridient: IBurgerIngridient) => {
    resetErrorMessage();

    const canAdd = canAddIngridient(ingridient, burgerState);
    if (!canAdd.possible) {
      setError(canAdd.message);
      return;
    }

    const newIngridientsState = ingridientsState.map((item) => {
      if (item.name === ingridient.name) {
        return {
          ...item,
          count: item.count + 1,
        };
      }

      return item;
    });

    setIngridientsState(newIngridientsState);

    const newBurgerState: IIngridientInBurger[] = [
      {
        name: ingridient.name,
        url: ingridient.url,
        isBottom: ingridient.isBottom,
        isTop: ingridient.isTop,
        additionalStyles: ingridient.additionalStyles,
      },
      ...burgerState,
    ];
    setBurgerState(newBurgerState);
  };

  const onRemoveIngridient = (ingridient: IBurgerIngridient) => {
    resetErrorMessage();

    const canRemove = canRemoveIngridient(ingridient, burgerState);
    if (!canRemove.possible) {
      setError(canRemove.message);
      return;
    }

    const newIngridientsState = ingridientsState.map((item) => {
      if (item.name === ingridient.name) {
        return {
          ...item,
          count: item.count - 1,
        };
      }

      return item;
    });

    setIngridientsState(newIngridientsState);

    setBurgerState((prev) => {
      const index = prev.findIndex((item) => item.name === ingridient.name);
      if (index === -1) {
        return prev;
      }

      const newBurgerState = [...prev];
      newBurgerState.splice(index, 1);

      return newBurgerState;
    });
  };

  return {
    ingridientsState,
    burgerState,
    error,
    onAddIngridient,
    onRemoveIngridient,
    onResetBurger,
  };
}
