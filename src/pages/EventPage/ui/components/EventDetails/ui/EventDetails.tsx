import { useState } from 'react';
import cn from 'classnames';

import './EventDetails.scss';
import { Navigation } from '../types';
import { nav } from '../consts';
import { EventDescription } from '../../EventDescription/EventDescription';
import { EventLocation } from '../../EventLocation/EventLocation';
import { EventContacts } from '../../EventContacts/EventContacts';

export const EventDetails = () => {
  const [section, setSection] = useState<Navigation>(Navigation.detail);

  function setNavigation(e: React.MouseEvent<HTMLButtonElement>) {
    const id = (e.target as HTMLButtonElement).id as Navigation;

    setSection(id);
  }

  return (
    <div className="EventDetails">
      <nav className="EventDetails__nav" onClick={setNavigation}>
        {nav.map((btn) => (
          <button
            key={btn.id}
            className={cn('EventDetails__nav-item', {
              'EventDetails__nav-item--active': section === btn.id,
            })}
            id={btn.id}
          >
            {btn.title}
          </button>
        ))}
      </nav>

      <div className="EventDetails__items">
        {section === Navigation.detail && <EventDescription />}

        {section === Navigation.location && <EventLocation />}

        {section === Navigation.contacts && <EventContacts />}
      </div>
    </div>
  );
};
