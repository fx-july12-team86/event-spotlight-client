import { useRef, useState } from 'react';
import cn from 'classnames';

import './MySelect.scss';
import { useGetHeight } from '../../hooks/useGetHeight';

type Props = {
  title: string;
  list: string[];
};

export const MySelect: React.FC<Props> = ({ title, list }) => {
  const [value, setValue] = useState(title);
  const [showDrop, setShowDrop] = useState(false);
  const [dropHeight, setDropHeight] = useState(0);

  const dropRef = useRef<HTMLUListElement>(null);
  useGetHeight(dropRef, setDropHeight);

  function handleClick(v: string) {
    setValue(v);
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
        {value}
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
              key={ev}
              onClick={() => handleClick(ev)}
            >
              {ev}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
