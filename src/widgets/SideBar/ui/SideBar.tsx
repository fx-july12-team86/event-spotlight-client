import { useState } from 'react';
import cn from 'classnames';

import './SideBar.scss';
import { SideMenu } from './components/SideMenu/SideMenu';

type Props = {
  onClose: (v: boolean) => void;
  isOpen: boolean;
};

export const SideBar: React.FC<Props> = ({ onClose }) => {
  const [defferedOpen, setDefferedOpen] = useState(true);

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
      <SideMenu isOpen={defferedOpen} onClose={closeSibebar} />
    </div>
  );
};
