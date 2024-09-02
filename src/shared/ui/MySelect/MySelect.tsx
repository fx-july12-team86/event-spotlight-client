import { useRef, useState } from 'react';
import cn from 'classnames';

import './MySelect.scss';
import { useGetHeight } from '../../hooks/useGetHeight';

type Props = {
  list: { id: number; name: string }[];
  setter: (v: string) => void;
  value: string;
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

  function handleClick(v: string) {
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
        {value === '' ? placeholder : value}
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
              onClick={() => handleClick(ev.name)}
            >
              {ev.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
