import { HomePage } from '../pages/Home';
import { EventPage } from '../pages/EventPage';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import App from './ui/App';
import { CatalogPage } from '../pages/CatalogPage';
import { ProfilePage } from '../pages/ProfilePage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<h1>Page not found</h1>} />

          <Route path="profile">
            <Route path="settings" element={<ProfilePage />} />

            <Route path="add-event" element={<ProfilePage />} />

            <Route path="favorite" element={<ProfilePage />} />

            <Route path="my-events" element={<ProfilePage />} />
          </Route>

          <Route index element={<HomePage />} />

          <Route path="/catalog">
            <Route index element={<CatalogPage />} />

            <Route path=":category" element={<CatalogPage />} />
          </Route>

          <Route path="/event/:id" element={<EventPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
