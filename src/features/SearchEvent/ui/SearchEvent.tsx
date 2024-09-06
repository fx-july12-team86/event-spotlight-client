import { useMediaQuery } from '@mui/material';

import './SearchEvent.scss';

import { StyleType } from 'src/shared/lib/types/styleTypes';
import { MySearch } from 'src/shared/ui';
import { MyButtonLarge } from 'src/shared/ui/MyButtonLarge/MyButtonLarge';
import { BreakPoints } from 'src/shared/lib/types/breakPoints';

import { useAppDispatch } from 'src/shared/lib/hooks/reduxHooks';
import * as sidebarAction from 'src/shared/store/sideBarReducer';

type Props = {
  setShowFilters: (v: boolean) => void;
  showFilters: boolean;
  style: StyleType;
};

export const SearchEvent: React.FC<Props> = (props) => {
  const { setShowFilters, showFilters, ...otherProps } = props;
  const isTablet = useMediaQuery(BreakPoints.TABLET);
  const dispatch = useAppDispatch();

  function handleShowFilters() {
    if (isTablet) {
      dispatch(
        sidebarAction.setContentType(sidebarAction.SidebarContentType.FILTERS)
      );

      dispatch(sidebarAction.setShowSitebar(true));
    } else {
      setShowFilters(!showFilters);
    }
  }

  return (
    <div className="SearchEvent" {...otherProps}>
      <div className="SearchEvent__wrapper">
        <MySearch style={{ marginRight: '6px', height: '64px' }} />

        <button className="SearchEvent__filters" onClick={handleShowFilters}>
          <p>Фільтри</p>
        </button>

        <button className="SearchEvent__location">Київ</button>
      </div>

      <MyButtonLarge className="SearchEvent__btn">Пошук</MyButtonLarge>
    </div>
  );
};
