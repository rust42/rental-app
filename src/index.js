import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './ui/App';
import { Provider } from 'react-redux';
import store from './reducers/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

