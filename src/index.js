import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {getFirebase} from './firebase' 

getFirebase()


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


