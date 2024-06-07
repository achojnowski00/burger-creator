import clsx from 'clsx';

import PlusIcon from 'assets/plus-icon.svg';
import MinusIcon from 'assets/minus-icon.svg';

import './ingredient-input.scss';

type IProps = IComponent & {
  count: number;
  title: string;
  imgUrl: string;
  onAdd: VoidFunction;
  onRemove: VoidFunction;
};

const IngredientInput: React.FC<IProps> = ({
  className,
  count,
  title,
  imgUrl,
  onAdd,
  onRemove,
}) => {
  return (
    <div className={clsx('ingredient-input', className)}>
      <div className="ingredient-input__header">
        <button
          onClick={onRemove}
          className="ingredient-input__button ingredient-input__button--red"
        >
          <img src={MinusIcon} alt="Remove" />
        </button>
        <div>{count}</div>
        <button
          onClick={onAdd}
          className="ingredient-input__button ingredient-input__button--green"
        >
          <img src={PlusIcon} alt="Remove" />
        </button>
      </div>
      <div className="ingredient-input__image">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="ingredient-input__title">{title}</div>
    </div>
  );
};

export default IngredientInput;
