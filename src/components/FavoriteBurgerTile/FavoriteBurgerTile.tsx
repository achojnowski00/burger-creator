import clsx from 'clsx';

import BurgerConstruction from '../BurgerConstruction';
import AppButton from '../AppButton';

import TrashIcon from 'src/assets/trash-icon.svg';

import { IFavoriteBurger } from 'src/core/IBurgerIngridient';

import './favorite-burger-tile.scss';

type IProps = IComponent & {
  burger: IFavoriteBurger;
  onRemove: VoidFunction;
};

const FavoriteBurgerTile: React.FC<IProps> = ({ burger, onRemove, className }) => {
  return (
    <div className={clsx('favorite-burger-tile', className)}>
      <BurgerConstruction burger={burger.ingredients} />
      <p className="favorite-burger-tile__name">{burger.name}</p>
      <AppButton onClick={onRemove} className="favorite-burger-tile__button">
        <img src={TrashIcon} alt="Trash" />
        Remove
      </AppButton>
    </div>
  );
};

export default FavoriteBurgerTile;
