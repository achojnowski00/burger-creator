import { IBurgerIngridient, IIngridientInBurger } from 'src/core/IBurgerIngridient';

export type IRemoveAddIngridient = {
  possible: boolean;
  message?: string;
};

export default function canRemoveIngridient(
  ingridientToRemove: IBurgerIngridient,
  currentBurgerState: IIngridientInBurger[],
): IRemoveAddIngridient {
  const { name, count } = ingridientToRemove;

  if (count === 0) {
    return {
      possible: false,
      message: `There is no ${name} in your burger`,
    };
  }

  /**
   * Check if user tries to remove any ingredient when top bun is on top of burger
   */
  if (currentBurgerState.some((ing) => ing.isTop) && !ingridientToRemove.isTop) {
    return {
      possible: false,
      message: `Cannot remove ${ingridientToRemove.name} when top bun is on top`,
    };
  }

  /**
   * Check when user tries to remove bottom bun, but there is another product on it
   */
  if (name === 'bottom bun') {
    const firstBottomBunIndex = currentBurgerState.findIndex(
      (ingridient) => ingridient.name === 'bottom bun',
    );

    // -1 due to reverse order
    const ingredientAbove = currentBurgerState[firstBottomBunIndex - 1];

    if (ingredientAbove) {
      return {
        possible: false,
        message: 'Cannot remove bottom bun when there is another product on it',
      };
    }
  }

  return {
    possible: true,
  };
}
