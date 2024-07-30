import { Children, cloneElement, useState } from 'react';
import './MyDialog.scss';

type Props = {
  children: React.ReactNode;
  onClose: (v: boolean) => void;
};

export const MyDialog: React.FC<Props> = ({ children, onClose }) => {
  const [animation, setAnimation] = useState('scale-in-center');

  function handleOnClose(e?: React.MouseEvent) {
    e?.stopPropagation();

    setAnimation('scale-out-center');

    setTimeout(() => {
      onClose(false);
    }, 300);
  }

  return (
    <div className={`MyDialog ${animation}`} onClick={handleOnClose}>
      <div className="MyDialog__content">
        <img
          src="icons/close_black.svg"
          alt="close icon"
          className="MyDialog__close"
          width={24}
          height={24}
          onClick={handleOnClose}
        />

        {Children.map(children, (child) =>
          cloneElement(child as React.ReactElement, {
            handleOnClose,
          })
        )}
      </div>
    </div>
  );
};
