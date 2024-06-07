import React from 'react';

import useCreateBurgerContextService from './hooks/useCreateBurgerContextService';

import { IBurgerIngridient, IIngridientInBurger } from 'src/core/IBurgerIngridient';

export type ICreateBurgerContext = {
  /**
   * State of all available ingredients
   */
  ingridientsState: IBurgerIngridient[];
  burgerState: IIngridientInBurger[];
  error?: string;
  onAddIngridient: (ingridient: IBurgerIngridient) => void;
  onRemoveIngridient: (ingridient: IBurgerIngridient) => void;
  onResetBurger: () => void;
};

const CreateBurgerContext = React.createContext<ICreateBurgerContext | null>(null);

export const useCreateBurgerContext = (): ICreateBurgerContext => {
  const context = React.useContext(CreateBurgerContext);
  if (!context) {
    throw new Error('useCreateBurgerContext must be used within a CreateBurgerContext');
  }

  return context;
};

export const CreateBurgerContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const createBurgerContextService = useCreateBurgerContextService();

  return (
    <CreateBurgerContext.Provider value={createBurgerContextService}>
      {children}
    </CreateBurgerContext.Provider>
  );
};
