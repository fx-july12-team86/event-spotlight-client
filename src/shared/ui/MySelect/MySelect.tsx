import { useRef, useState } from 'react';
import cn from 'classnames';

import './MySelect.scss';
import { useGetHeight } from '../../hooks/useGetHeight';
import { OptionType } from './types';

type Props = {
  list: OptionType[];
  setter: (v: OptionType) => void;
  value: OptionType | null;
  placeholder: string;
};

export const MySelect: React.FC<Props> = ({
  list,
  setter,
  value,
  placeholder,
}) => {
  const [showDrop, setShowDrop] = useState(false);
  const [dropHeight, setDropHeight] = useState(0);

  const dropRef = useRef<HTMLUListElement>(null);
  useGetHeight(dropRef, setDropHeight);

  function handleClick(v: OptionType) {
    setter(v);
    setShowDrop(false);
  }

  return (
    <div className="MySelect">
      <div
        className={cn('MySelect__main', {
          'MySelect__main--opened': showDrop,
        })}
        onClick={() => setShowDrop(!showDrop)}
      >
        {!value ? placeholder : value.name}
      </div>

      <div
        className="MySelect__drop"
        style={{
          height: showDrop ? dropHeight : 0,
        }}
      >
        <ul
          className={cn('MySelect__drop-list', {
            'MySelect__drop-list--hidden': !showDrop,
          })}
          ref={dropRef}
        >
          {list.map((ev) => (
            <li
              className="MySelect__drop-item"
              key={ev.id}
              onClick={() => handleClick(ev)}
            >
              {ev.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
