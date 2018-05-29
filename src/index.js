import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<App id="aaa" colores="verde" foo="bar" telfs={[223,3232,4434]} >
    <h3>titulo h3</h3>
    <h4>titulo h4</h4>
</App>, document.getElementById('root'));
registerServiceWorker();
