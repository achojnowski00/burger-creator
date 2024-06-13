import clsx from 'clsx';

import { MAX_INGREDIENTS } from 'src/CONSTANTS';

import { IBasicBurgerIngridient } from 'src/core/IBurgerIngridient';

import './burger-construction.scss';

type IProps = IComponent & {
  burger: IBasicBurgerIngridient[];
};

const BurgerConstruction: React.FC<IProps> = ({ className, burger }) => {
  return (
    <div className={clsx('burger-construction', className)}>
      {burger.map(({ url, name, additionalStyles }, index) => (
        <div
          className="burger-construction__ingridient"
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
