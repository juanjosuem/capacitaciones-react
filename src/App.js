import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  
  
  static defaultProps={
    cantidad:300  
  };

  static propTypes={
    cantidad:PropTypes.number,
    foo:PropTypes.string.isRequired,
    telfs:PropTypes.arrayOf(PropTypes.number),
    colores:PropTypes.oneOf(['verde','rojo']).isRequired
  };


  render() {
    return (
      
      <div className="App">
          hola mundo  
          <h2 {...this.props} >{this.props.foo}</h2>
          {this.props.children}
      </div>
    );
  }
}

export default App;
