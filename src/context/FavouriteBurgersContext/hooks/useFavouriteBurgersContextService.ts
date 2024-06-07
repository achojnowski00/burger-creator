import React from 'react';

import { LOCAL_STORAGE_FAVORITES_BURGERS_KEY } from 'src/CONSTANTS';

import {
  IAddBurgerHandler,
  IFavouriteBurgersContext,
  IRemoveBurgerHandler,
} from '../FavouriteBurgersContext';
import { IFavoriteBurger } from 'src/core/IBurgerIngridient';

export default function useFavouriteBurgersContextService(): IFavouriteBurgersContext {
  const favoriteBurgersFromLocalStorage: IFavoriteBurger[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_FAVORITES_BURGERS_KEY) || '[]',
  );
  const [favoriteBurgers, setFavoriteBurgers] = React.useState<IFavoriteBurger[]>(
    favoriteBurgersFromLocalStorage,
  );
  const [error, setError] = React.useState<string>('');

  const onResetError = () => setError('');

  const onAddBurger: IAddBurgerHandler = (burger) => {
    return new Promise((resolve, reject) => {
      onResetError();
      const isBurgerAlreadyAdded = favoriteBurgers.some(
        (favoriteBurger) => favoriteBurger.name === burger.name,
      );
      if (isBurgerAlreadyAdded) {
        setError('Burger already added to favorites');
        reject();
        return;
      }

      const newFavoriteBurgers = [...favoriteBurgers, burger];
      setFavoriteBurgers(newFavoriteBurgers);
      localStorage.setItem(LOCAL_STORAGE_FAVORITES_BURGERS_KEY, JSON.stringify(newFavoriteBurgers));
      resolve();
    });
  };

  const onRemoveBurger: IRemoveBurgerHandler = (name) => {
    onResetError();
    const newFavoriteBurgers = favoriteBurgers.filter((burger) => burger.name !== name);
    setFavoriteBurgers(newFavoriteBurgers);
    localStorage.setItem(LOCAL_STORAGE_FAVORITES_BURGERS_KEY, JSON.stringify(newFavoriteBurgers));
  };

  return {
    favoriteBurgers,
    error,
    onAddBurger,
    onRemoveBurger,
  };
}
