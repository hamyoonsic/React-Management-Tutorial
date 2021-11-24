import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '함윤식',
  'birthday': '960205',
  'gender':'남자',
  'job': '개발자'  
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '최미영',
  'birthday': '961224',
  'gender':'여자',
  'job': '개발자'  
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '엄영순',
  'birthday': '611012',
  'gender':'여자',
  'job': '자영업자'  
}
]

class App extends Component {
  render() {
    return (
      <div>
        { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);}) }        
      </div>
    );
  }
}

export default App;
