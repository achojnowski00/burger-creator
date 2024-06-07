import { MAX_INGREDIENTS } from 'CONSTANTS';
import { IBurgerIngridient, IIngridientInBurger } from 'src/core/IBurgerIngridient';

export type ICanAddIngridient = {
  possible: boolean;
  message?: string;
};

export default function canAddIngridient(
  newIngridient: IBurgerIngridient,
  currentBurgerState: IIngridientInBurger[],
): ICanAddIngridient {
  const { isBottom, maxCount, name } = newIngridient;

  if (currentBurgerState.length === MAX_INGREDIENTS) {
    return {
      possible: false,
    };
  }

  /**
   * Check if user tries to add an ingredient without bottom bun
   */
  if (!isBottom && currentBurgerState.length === 0) {
    return {
      possible: false,
      message: 'First item must be bottom bun',
    };
  }

  /**
   * Check if user tries to overfill the ingredient max count
   */
  if (maxCount && currentBurgerState.filter((item) => item.name === name).length >= maxCount) {
    return {
      possible: false,
      message: `You can add only ${maxCount} ${name}`,
    };
  }

  /**
   * Check if user tries to add an ingredient on top bun
   */
  if (currentBurgerState.length && currentBurgerState[0].isTop) {
    return {
      possible: false,
      message: `You cannot add ingredients on ${currentBurgerState[0].name}`,
    };
  }

  /**
   * Check if user tries to add any other ingredient as the last item than top bun
   */
  if (currentBurgerState.length === MAX_INGREDIENTS - 1 && !newIngridient.isTop) {
    return {
      possible: false,
      message: `the maximum number of items is 9 including buns. Last item must be top bun.`,
    };
  }

  return {
    possible: true,
  };
}
