import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MNMLink from './App';
import MWLink from './App';
import Main from './App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MNMLink />, document.getElementById('root'));
ReactDOM.render(<MWLink />, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
