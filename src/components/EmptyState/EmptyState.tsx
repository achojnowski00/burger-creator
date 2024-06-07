import clsx from 'clsx';

import './empty-state.scss';

type IProps = IComponent & {
  text: string;
};

const EmptyState: React.FC<IProps> = ({ className, text }) => {
  return (
    <div className={clsx('empty-state', className)}>
      <p className="empty-state__text">{text}</p>
    </div>
  );
};

export default EmptyState;
