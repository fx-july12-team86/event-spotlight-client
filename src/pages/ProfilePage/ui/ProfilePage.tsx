import { useLocation } from 'react-router-dom';
import './ProfilePage.scss';
import { AddEvent } from '../components/AddEvent';
import { Settings } from '../components/Settings';
import { Favorite } from '../components/Favorite';
import { MyEvents } from '../components/MyEvents';

export const ProfilePage = () => {
  const { pathname } = useLocation();

  return (
    <div className="ProfilePage">
      {pathname === '/profile/add-event' && <AddEvent />}

      {pathname === '/profile/settings' && <Settings />}

      {pathname === '/profile/favorite' && <Favorite />}

      {pathname === '/profile/my-events' && <MyEvents />}
    </div>
  );
};
