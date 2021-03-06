import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import { Provider } from 'mobx-react';
import App from './components';
import AppModel from './models/AppModel';

const store = new AppModel();

ReactDOM.render(
  <>
    <DevTools />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('app'),
);

window.store = store;
