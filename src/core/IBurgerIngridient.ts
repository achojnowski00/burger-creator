import React from 'react';

export type IBurgerIngridient = {
  name: string;
  additionalStyles?: React.CSSProperties;
  url: string;
  /**
   * If the ingredient has other image on burger rathher than in the list
   * this field should be filled.
   */
  alternativeUrl?: string;
  count: number;
  maxCount?: number;
  /**
   * Wether the ingredient is top bun
   */
  isTop: boolean;
  /**
   * Wether the ingredient is bottom bun
   */
  isBottom: boolean;
};

export type IIngridientInBurger = Pick<
  IBurgerIngridient,
  'name' | 'url' | 'isTop' | 'isBottom' | 'additionalStyles'
>;

export type IFavoriteBurgerIngridient = Pick<IIngridientInBurger, 'name' | 'url'>;

export type IFavoriteBurger = {
  name: string;
  ingredients: IFavoriteBurgerIngridient[];
};
