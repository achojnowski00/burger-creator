import React from 'react';

import { useCreateBurgerContext } from 'src/context/CreateBurgerContext';
import useBurgerNameFormService from './hooks/useBurgerNameFormService';

import BurgerRender from './BurgerRender';

import './burger.scss';

type IProps = IComponent;

const Burger: React.FC<IProps> = ({ className }) => {
  const { burgerState, error } = useCreateBurgerContext();

  const BurgerNameFormService = useBurgerNameFormService();

  const isBurgerComplete = React.useMemo(
    () => burgerState.some((item) => item.isTop),
    [burgerState],
  );

  return (
    <BurgerRender
      className={className}
      isCompleted={isBurgerComplete}
      burger={burgerState}
      burgerError={error}
      {...BurgerNameFormService}
    />
  );
};

export default Burger;
