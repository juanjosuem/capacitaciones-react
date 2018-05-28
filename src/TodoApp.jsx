import React, { Component } from 'react';
import Item from './item'
import './App.css';

class TodoApp extends Component {

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
          <h1>Todo App</h1>
          <ul>
              {this.datos.map((v,i)=> <Item key={i} title={v.title} />  )}
          </ul>

      </section>
    );
  }
}

export default TodoApp;