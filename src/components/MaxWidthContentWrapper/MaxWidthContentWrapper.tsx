import clsx from 'clsx';

import './max-width-content-wrapper.scss';

type IProps = IComponent & {
  children: React.ReactNode;
  /**
   * @defaultValue `1920`
   */
  maxWidth?: number;
};

const MaxWidthContentWrapper: React.FC<IProps> = ({ className, children, maxWidth = 1920 }) => {
  const style: React.CSSProperties = {
    maxWidth,
  };

  return (
    <div style={style} className={clsx('max-width-content-wrapper', className)}>
      {children}
    </div>
  );
};

export default MaxWidthContentWrapper;
