import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { store } from '../app/configs/storeConfig';
import { Provider } from 'react-redux';

import './index.scss';
import App from './ui/App';
import { HomePage } from '../pages/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
