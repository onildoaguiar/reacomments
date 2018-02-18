import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import base from './base';

ReactDOM.render(<App base={base} />, document.getElementById('root'));
registerServiceWorker();
