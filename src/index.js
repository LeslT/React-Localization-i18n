import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {I18nextProvider} from 'react-i18next';
// import i18next from 'i18next';
import './i18n.js';

// ReactDOM.render(  <I18nextProvider i18n={i18next}><App /></I18nextProvider>, document.getElementById('root'));
ReactDOM.render( <App />, document.getElementById('root'));
serviceWorker.unregister();
