import cn from 'classnames';
import cls from './MyDropList.module.scss';
import { useState } from 'react';

interface Props {
  className?: string;
  title: string;
  children: React.ReactNode;
}

export const MyDropList: React.FC<Props> = (props) => {
  const { className, title, children, ...otherProps } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(cls.MyDropList, className)}
      {...otherProps}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={cls.title_box}>
        <p className={cls.title}>{title}</p>
        <img
          src={`icons/arrow-${isOpen ? 'up' : 'down'}-black.svg`}
          alt={`Скрити лист ${title}`}
        />
      </div>

      <div
        className={cn(cls.dropbox, {
          [cls['dropbox--open']]: isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};
