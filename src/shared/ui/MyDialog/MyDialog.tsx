import { useState } from 'react';
import './MyDialog.scss';

type Props = {
  children: React.ReactNode;
  onClose: (v: boolean) => void;
};

export const MyDialog: React.FC<Props> = ({ children, onClose }) => {
  const [animation, setAnimation] = useState('scale-in-center');

  function handleOnClose() {
    setAnimation('scale-out-center');
    setTimeout(() => {
      onClose(false);
    }, 300);
  }
  return (
    <div className={`MyDialog ${animation}`}>
      <div className="MyDialog__content" onClick={(e) => e.stopPropagation()}>
        <img
          src="icons/close_black.svg"
          alt="close icon"
          className="MyDialog__close"
          width={24}
          height={24}
          onClick={handleOnClose}
        />

        {children}
      </div>
    </div>
  );
};
