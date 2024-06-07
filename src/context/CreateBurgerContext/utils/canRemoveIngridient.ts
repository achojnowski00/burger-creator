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
      message: `You don't have ${name} in your burger`,
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
