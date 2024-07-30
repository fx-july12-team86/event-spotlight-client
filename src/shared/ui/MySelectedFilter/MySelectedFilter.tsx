import { useState } from 'react';

import './MySelectedFilter.scss';

type Props = {
  filter: string;
  addFilter: () => void;
};

export const MySelectedFilter: React.FC<Props> = ({ filter, addFilter }) => {
  const [animation, setAnimation] = useState('scale-in-center');
  return (
    <li className={`MySelectedFilter ${animation}`}>
      <p className="MySelectedFilter__name">{filter}</p>

      <img
        src="icons/close.svg"
        alt="remove filter"
        height={24}
        width={24}
        className="MySelectedFilter__remove"
        onClick={() => {
          setAnimation('scale-out-center');
          setTimeout(() => {
            addFilter();
          }, 300);
        }}
      />
    </li>
  );
};
