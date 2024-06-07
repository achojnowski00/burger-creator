import clsx from 'clsx';

import { MAX_INGREDIENTS } from 'src/CONSTANTS';

import { IIngridientInBurger } from 'src/core/IBurgerIngridient';

type IProps = IComponent & {
  burger: IIngridientInBurger[];
};

const BurgerConstruction: React.FC<IProps> = ({ className, burger }) => {
  return (
    <div className={clsx('burger-construction', className)}>
      {burger.map(({ url, name, additionalStyles }, index) => (
        <div
          className="burger__ingridient"
          key={`${name}_${index}`}
          style={{ ...additionalStyles, zIndex: MAX_INGREDIENTS - index }}
        >
          <img src={url} alt="burger" />
        </div>
      ))}
    </div>
  );
};

export default BurgerConstruction;
