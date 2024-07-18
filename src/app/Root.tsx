import { HomePage } from '../pages/Home';
import { EventPage } from '../pages/EventPage';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import App from './ui/App';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="/event/:id" element={<EventPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
