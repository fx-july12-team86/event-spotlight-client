import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from '../app/configs/storeConfig';
import { Provider } from 'react-redux';

import './index.scss';
import { Root } from './Root';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);
