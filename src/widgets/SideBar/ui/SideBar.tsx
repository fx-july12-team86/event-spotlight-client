import cn from 'classnames';
import './SideBar.scss';
import { useState } from 'react';

type Props = {
  onClose: (v: boolean) => void;
  open: boolean;
};

export const SideBar: React.FC<Props> = ({ onClose, open }) => {
  const [defferedOpen, setDefferedOpen] = useState(open);

  function closeSibebar() {
    setDefferedOpen(false);
    setTimeout(() => {
      onClose(false);
    }, 300);
  }
  return (
    <div
      className={cn('SideBar', {
        'SideBar--close': !defferedOpen,
      })}
      onClick={() => closeSibebar()}
    >
      <button onClick={() => closeSibebar()}>close</button>
    </div>
  );
};
