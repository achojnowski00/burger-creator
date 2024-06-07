import { useCallback } from 'react';

import { useCreateBurgerContext } from 'src/context/CreateBurgerContext';

import IngredientInput from '../IngredientInput';

import { IBurgerIngridient } from 'src/core/IBurgerIngridient';

import './controll-panel.scss';

const ControllPanel: React.FC = () => {
  const { ingridientsState, onAddIngridient, onRemoveIngridient } = useCreateBurgerContext();

  const onAdd = useCallback(
    (ingridient: IBurgerIngridient) => () => {
      onAddIngridient(ingridient);
    },
    [onAddIngridient],
  );

  const onRemove = useCallback(
    (ingridient: IBurgerIngridient) => () => {
      onRemoveIngridient(ingridient);
    },
    [onRemoveIngridient],
  );

  return (
    <div className="controll-panel">
      {ingridientsState.map((ingredient) => {
        const { name, count, url, alternativeUrl } = ingredient;
        return (
          <IngredientInput
            className="controll-panel__ingredient-input"
            key={name}
            count={count}
            title={name}
            imgUrl={alternativeUrl || url}
            onAdd={onAdd(ingredient)}
            onRemove={onRemove(ingredient)}
          />
        );
      })}
    </div>
  );
};

export default ControllPanel;
