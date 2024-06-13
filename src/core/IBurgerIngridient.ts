import React from 'react';

export type IBurgerIngridient = {
  name: string;
  additionalStyles?: React.CSSProperties;
  url: string;
  /**
   * If the ingredient has other image on burger rather than in the list
   * this field should be filled.
   */
  alternativeUrl?: string;
  /**
   * Number of specific ingredient in burger
   */
  count: number;
  /**
   * Maximum number of specific ingredient in burger
   */
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

export type IBasicBurgerIngridient = Pick<IIngridientInBurger, 'name' | 'url' | 'additionalStyles'>;

export type IFavoriteBurger = {
  name: string;
  ingredients: IBasicBurgerIngridient[];
};
