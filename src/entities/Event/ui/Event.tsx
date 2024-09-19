import { Link } from 'react-router-dom';
import { EventType } from '../types';

import './Event.scss';
import { EventSceleton } from './EventSceleton';

type Props = {
  event: EventType;
};

export const Event: React.FC<Props> = ({ event }) => {
  if (!event) {
    return <EventSceleton />;
  }

  const { id, img, title, category, options } = event;
  const { address, date, time, price } = options;

  return (
    <Link to={`event/${id}`} className="Event">
      <div className="Event__img-box">
        <img
          src={img}
          alt="event img"
          className="Event__img"
          width={300}
          height={314}
        />
      </div>

      <div className="Event__descr">
        <div className="Event__category-box">
          <p className="Event__category">{category}</p>

          <img
            src="icons/empty_heart.svg"
            className="Event__favorite"
            alt="fevorite"
            height={44}
            width={44}
          />
        </div>

        <div className="Event__title-box">
          {event ? (
            <h3 className="Event__title">{title}</h3>
          ) : (
            <div className="Event__sceleton-title">
              <div className="Event__sceleton" />

              <div className="Event__sceleton" />
            </div>
          )}

          <ul className="Event__options">
            <li className="Event__option Event__option--date">
              <p>{date}</p>

              <p>{time}</p>
            </li>

            <li className="Event__option Event__option--place">{address}</li>

            <li className="Event__option Event__option--price">{price}₴</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
