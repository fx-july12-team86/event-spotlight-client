import { Fragment } from 'react/jsx-runtime';

import './ProductList.scss';
import { Event } from '../../../entities/Event';
import { EventType } from '../../../entities/Event/types';

type Props = {
  events: EventType[];
};

export const ProductList: React.FC<Props> = ({ events }) => {
  return (
    <ul className="ProductList">
      {events.map((event) => (
        <Fragment key={event.id}>
          <Event event={event} />
        </Fragment>
      ))}
    </ul>
  );
};
