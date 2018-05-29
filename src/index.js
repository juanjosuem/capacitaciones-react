import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Ejemplos from './components/tema3/BasicProps';
import Ejemplos2 from './components/tema3/AdvancedProps';

import registerServiceWorker from './registerServiceWorker';


/*
ReactDOM.render(
<Ejemplos.WelcomeChilden 
    name="Johan" 
    age={20} 
    telfs={[3232,33234]} 
    conduce="No"
    fuma={false}
    >
    <hr/>
    <strong>Algun otro elemento</strong>
    <Ejemplos.Welcome />
</Ejemplos.WelcomeChilden>, document.getElementById('root'));
registerServiceWorker();*/


ReactDOM.render(
    <Ejemplos2 saludo="Buenas Noches" />
    , document.getElementById('root'));
    registerServiceWorker();
