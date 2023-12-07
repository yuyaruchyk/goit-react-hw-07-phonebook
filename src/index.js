import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
