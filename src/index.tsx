import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import './firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const store = setupStore();

ReactDOM.render(
  
  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
