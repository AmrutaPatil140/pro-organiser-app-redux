import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import axe from 'react-axe';
import {Provider} from "react-redux";
import GlobalStore from './Redux/GlobalStore/Store';

if(process.env.NODE_ENV!=="production"){
  axe(React,ReactDOM,1000);
}
ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Provider store={GlobalStore}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
