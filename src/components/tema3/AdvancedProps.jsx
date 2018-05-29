import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Item from './item'


class AdvancedProps extends Component {

  static defaultProps = {
    saludo:'Buen dia'
  };

  static propTypes = {
    saludo: PropTypes.string
   
  };



  datos=[
    {completed:true,title:'aprende react'},
    {completed:false,title:'aprende es6'},
    {completed:false,title:'aprende vanillajs'}
  ];
  estilo={
    height:500,width:'300px',borderStyle:'solid',borderColor:'red'
  };

  render() {
    return (
      <section style={this.estilo} className="todoapp">
         {this.props.saludo}
      </section>
    );
  }
}

export default AdvancedProps;