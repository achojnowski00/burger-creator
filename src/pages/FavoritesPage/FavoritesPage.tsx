import React from 'react';

import { useFavouriteBurgersContext } from 'src/context/FavouriteBurgersContext';

import AppHeader from 'src/components/AppHeader';
import MaxWidthContentWrapper from 'src/components/MaxWidthContentWrapper';
import FavoriteBurgerTile from 'src/components/FavoriteBurgerTile';
import EmptyState from 'src/components/EmptyState';

import { MAX_APP_WIDTH } from 'src/CONSTANTS';

import './favorites-page.scss';

const FavoritesPage = () => {
  const { favoriteBurgers, onRemoveBurger } = useFavouriteBurgersContext();

  const handleRemoveBurger = React.useCallback(
    (name: string) => () => {
      onRemoveBurger(name);
    },
    [onRemoveBurger],
  );

  return (
    <div className="favorites-page">
      <MaxWidthContentWrapper maxWidth={MAX_APP_WIDTH}>
        <AppHeader text="Favuorite Burgers" className="favorites-page__header" />

        {favoriteBurgers.length === 0 && (
          <EmptyState text="You don’t have any favourites burgers" />
        )}

        <div className="favorites-page__list">
          {favoriteBurgers.map((burger) => (
            <FavoriteBurgerTile
              className="list__item"
              key={burger.name}
              burger={burger}
              onRemove={handleRemoveBurger(burger.name)}
            />
          ))}
        </div>
      </MaxWidthContentWrapper>
    </div>
  );
};

export default FavoritesPage;
