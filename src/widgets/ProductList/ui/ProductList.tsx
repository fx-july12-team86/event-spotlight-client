import { Fragment } from 'react/jsx-runtime';

import './ProductList.scss';
import { Event } from '../../../entities/Event';
import { EventType } from '../../../entities/Event/types';
import { Link } from 'react-router-dom';

type Props = {
  events: EventType[];
  addButton?: boolean;
};

export const ProductList: React.FC<Props> = ({ events, addButton = false }) => {
  return (
    <ul className="ProductList">
      {events.map((event) => (
        <Fragment key={event.id}>
          <Event event={event} />
        </Fragment>
      ))}

      {addButton && (
        <li className="ProductList__extra">
          <Link to="/profile/add-event" className="ProductList__extra-btn">
            <p className="ProductList__extra-text"> Додати подію</p>
          </Link>
        </li>
      )}
    </ul>
  );
};
