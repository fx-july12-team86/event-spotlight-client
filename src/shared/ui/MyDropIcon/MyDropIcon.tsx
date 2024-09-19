import { Children, cloneElement, useRef, useState } from 'react';

import './MyDropIcon.scss';
import { useGetHeight } from '../../lib/hooks/useGetHeight';
import { useHideDrop } from '../../lib/hooks/useHideDrop';

type Props = {
  children: React.ReactNode;
  openedIcon: string;
  closedIcon: string;
};

export const MyDropIcon: React.FC<Props> = ({
  children,
  openedIcon,
  closedIcon,
  ...props
}) => {
  const [showDrop, setShowDrop] = useState(false);
  const [dropHeight, setDropHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const MyDropIconRef = useRef<HTMLDivElement>(null);

  useGetHeight(contentRef, setDropHeight);
  useHideDrop(MyDropIconRef, setShowDrop);

  return (
    <div className="MyDropIcon" ref={MyDropIconRef} {...props}>
      <img
        src={showDrop ? `icons/${openedIcon}.svg` : `icons/${closedIcon}.svg`}
        alt="profile"
        height={64}
        width={64}
        className="MyDropIcon__icon"
        onClick={() => setShowDrop(!showDrop)}
        style={{ backgroundColor: showDrop ? 'white' : '' }}
      />

      <div
        className="MyDropIcon__wraper"
        style={{ height: showDrop ? dropHeight : 0 }}
      >
        <div ref={contentRef}>
          {Children.map(children, (child) =>
            cloneElement(child as React.ReactElement, {
              showDrop,
              setShowDrop,
            })
          )}
        </div>
      </div>
    </div>
  );
};
