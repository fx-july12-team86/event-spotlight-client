import { HomePage } from '../pages/Home';
import { EventPage } from '../pages/EventPage';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import App from './ui/App';
import { CatalogPage } from '../pages/CatalogPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
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
