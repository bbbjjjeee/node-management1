import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Profile from '/Profile'

const jeong = {
  name: '배정은',
  age : 20,
  love : 'cats'
}

const apple = {
  name: '김사과',
  age : 30,
  love : 'dogs'
}

const listData = ['data1', 'data2', 'data3'];


class App extends Component {

  

  render(){
    
    return (
      <div>
        <p>Component</p>
        <ListEx data={listdata}></ListEX>
      <Hello name="Jeong"></Hello>
      <Profile data ={jeong}/>
      <Profile data ={apple}/>
      </div>
    );
  
  }
}

export default App;
