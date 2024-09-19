import { useRef, useState } from 'react';
import cn from 'classnames';

import './MyLocation.scss';
import { useGetHeight } from '../../lib/hooks/useGetHeight';
import { useHideDrop } from '../../lib/hooks/useHideDrop';
import { MyDialog } from '../MyDialog/MyDialog';
import { SelectCity } from '../../../features/SelectCity';
import { THEME } from 'src/shared/lib/types/themesTypes';

type Props = {
  city?: string;
  theme?: THEME;
};

export const MyLocation: React.FC<Props> = (props) => {
  const { city = '', theme = THEME.LIGHT } = props;
  const [showDrop, setShowDrop] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dropHeight, setDropHeight] = useState(0);
  const dropContentRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  useGetHeight(dropContentRef, setDropHeight);
  useHideDrop(dropRef, setShowDrop);

  return (
    <div
      className="MyLocation"
      onClick={() => setShowDrop(!showDrop)}
      ref={dropRef}
    >
      <img
        src={`icons/location${theme === THEME.LIGHT ? '' : '_black'}.svg`}
        alt="місто"
        height={24}
        width={24}
      />
      <p className="MyLocation__header-text">{city}</p>

      <div
        className="MyLocation__drop"
        style={{ height: showDrop ? dropHeight : 0 }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={cn('MyLocation__drop-content', {
            'MyLocation__drop-content--hidden': !showDrop,
          })}
          ref={dropContentRef}
        >
          <p>Ми визначили твоє місто</p>

          <p className="MyLocation__city">{city}</p>

          <button
            className="MyLocation__btn"
            onClick={() => {
              setShowDialog(true);
              setShowDrop(false);
            }}
          >
            Обрати інше місто
          </button>
        </div>
      </div>

      {showDialog && (
        <MyDialog onClose={setShowDialog}>
          <SelectCity handleOnClose={() => {}} />
        </MyDialog>
      )}
    </div>
  );
};
