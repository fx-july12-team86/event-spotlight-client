import './MyButton.scss';
import cn from 'classnames';

type Props = {
  children: React.ReactNode;
  icon?: boolean;
};

export const MyButton: React.FC<Props> = ({
  children,
  icon = false,
  ...props
}) => {
  return (
    <button
      className={cn('MyButton', {
        'MyButton--withIcon': icon,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
