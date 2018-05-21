import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Practica1 from './components/practica1/Practica1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Practica1 />, document.getElementById('root'));
registerServiceWorker();
