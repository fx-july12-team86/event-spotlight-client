import { Children, cloneElement, useEffect, useState } from 'react';
import './MyDialog.scss';
import { createPortal } from 'react-dom';

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

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  const dialogRoot = document.getElementById('dialog');
  if (!dialogRoot) {
    console.error('Dialog root element not found');
    return null;
  }

  return createPortal(
    <div className={`MyDialog ${animation}`} onClick={handleOnClose}>
      <div className="MyDialog__content" onClick={(e) => e.stopPropagation()}>
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
    </div>,
    dialogRoot
  );
};
