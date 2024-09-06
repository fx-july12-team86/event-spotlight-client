import { useState } from 'react';
import cn from 'classnames';
import './SideBar.scss';

import {
  useAppDispatch,
  useAppSelector,
} from 'src/shared/lib/hooks/reduxHooks';
import { SidebarContentType } from 'src/shared/store/sideBarReducer';
import * as sidebarAction from 'src/shared/store/sideBarReducer';

import { SideMenu } from './components/SideMenu/SideMenu';
import { SideBarFilters } from 'src/widgets/SideBar/ui/components/SideFilters';

export const SideBar = () => {
  const dispatch = useAppDispatch();
  const { content } = useAppSelector((state) => state.sidebar);

  const [defferedOpen, setDefferedOpen] = useState(true);

  function closeSibebar() {
    setDefferedOpen(false);

    setTimeout(() => {
      dispatch(sidebarAction.setShowSitebar(false));
    }, 300);
  }

  return (
    <div
      className={cn('SideBar', {
        'SideBar--close': !defferedOpen,
      })}
      onClick={() => closeSibebar()}
    >
      {content === SidebarContentType.NAVIGATION ? (
        <SideMenu isOpen={defferedOpen} onClose={closeSibebar} />
      ) : (
        <SideBarFilters isOpen={defferedOpen} onClose={closeSibebar} />
      )}
    </div>
  );
};
