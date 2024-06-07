import BottomBun from 'src/assets/bottom-bun.png';
import TopBun from 'src/assets/top-bun.png';
import Tomato from 'src/assets/tomato.png';
import MeatIcon from 'src/assets/ingredient-burger.png';
import Meat from 'src/assets/burger.png';
import FishIcon from 'src/assets/ingredient-fish.png';
import Fish from 'src/assets/fish.png';
import Lettuce from 'src/assets/lettuce.png';
import CheeseIcon from 'src/assets/ingredient-cheese.png';
import Cheese from 'src/assets/cheese.png';

import { IBurgerIngridient } from 'src/core/IBurgerIngridient';

export const IngirientsStateInitialState: IBurgerIngridient[] = [
  {
    name: 'bottom bun',
    count: 0,
    url: BottomBun,
    maxCount: 1,
    isBottom: true,
    isTop: false,
    additionalStyles: {
      marginBottom: '-11px',
    },
  },
  {
    name: 'top bun',
    count: 0,
    url: TopBun,
    maxCount: 1,
    isBottom: false,
    isTop: true,
    additionalStyles: {
      marginBottom: '-11px',
    },
  },
  {
    name: 'tomato',
    count: 0,
    url: Tomato,
    isBottom: false,
    isTop: false,
    additionalStyles: {
      marginBottom: '-35px',
    },
  },
  {
    name: 'meat',
    count: 0,
    url: Meat,
    alternativeUrl: MeatIcon,
    isBottom: false,
    isTop: false,
    additionalStyles: {
      marginBottom: '-8px',
    },
  },
  {
    name: 'fish',
    count: 0,
    url: Fish,
    alternativeUrl: FishIcon,
    isBottom: false,
    isTop: false,
    additionalStyles: {
      marginBottom: '-10px',
    },
  },
  {
    name: 'lettuce',
    count: 0,
    url: Lettuce,
    isBottom: false,
    isTop: false,
    additionalStyles: {
      marginBottom: '-19px',
    },
  },
  {
    name: 'cheese',
    count: 0,
    url: Cheese,
    alternativeUrl: CheeseIcon,
    isBottom: false,
    isTop: false,
    additionalStyles: {
      marginBottom: '-30px',
    },
  },
];
