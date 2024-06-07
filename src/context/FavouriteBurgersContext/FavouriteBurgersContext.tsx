import React from 'react';

import useFavouriteBurgersContextService from './hooks/useFavouriteBurgersContextService';

import { IFavoriteBurger } from 'src/core/IBurgerIngridient';

export type IRemoveBurgerHandler = (name: string) => void;
export type IAddBurgerHandler = (burger: IFavoriteBurger) => Promise<void>;

export type IFavouriteBurgersContext = {
  favoriteBurgers: IFavoriteBurger[];
  error: string;
  onAddBurger: IAddBurgerHandler;
  onRemoveBurger: IRemoveBurgerHandler;
};

const FavouriteBurgersContext = React.createContext<IFavouriteBurgersContext | null>(null);

export const useFavouriteBurgersContext = (): IFavouriteBurgersContext => {
  const context = React.useContext(FavouriteBurgersContext);
  if (!context) {
    throw new Error('useFavouriteBurgersContext must be used within a FavouriteBurgersContext');
  }

  return context;
};

export const FavouriteBurgersContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const FavouriteBurgersContextService = useFavouriteBurgersContextService();

  return (
    <FavouriteBurgersContext.Provider value={FavouriteBurgersContextService}>
      {children}
    </FavouriteBurgersContext.Provider>
  );
};
