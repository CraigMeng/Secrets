import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import configStore from './configStore'
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';



ReactDOM.render(
        <App />,
    document.getElementById('root'));
registerServiceWorker();
