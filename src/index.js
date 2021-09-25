import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import RootStore from './store/rootStore'

ReactDOM.render(
    <Provider store={RootStore}>
        <App />
    </Provider>,
  document.getElementById('root')
);
