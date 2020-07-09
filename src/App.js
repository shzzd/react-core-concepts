import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const s = {name:"THE QUICK BROWN FOX JUMPED OVER THE LAZY DOGS"}
  const nayoks = ['Barry Allen - THE FLASH','Oliver Queen - THE GREEN ARROW'];
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
    {name:'Picsart', price:'$3.99'},
    {name:'Office19', price:'$112.99'},
    {name:'premier EI', price:'$212.99'},
    {name:'React', price:'$11.99'},
    {name:'Zoom', price:'$12.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color:'cyan'}}>REACT</h1>
        <h2>{s.name}</h2>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
        </ul>
        <div>
        <Person name='Shazzadur Rahman' job='Web developer' email='sajjadur57@gmail.com' home='Chittagong, Bangladesh'></Person>
        <Person name='Tom Cruise' job='Actor and producer' email='tomcruise@gmail.com' home='New york, United States'></Person>
        </div>
        
        <div style={{border:'none', margin:'70px 70px'}}>
          {
            products.map(p => <Product product={p}></Product>)
          }
          {/* <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
          <Product product={products[2]}></Product>
          <Product product={products[3]}></Product>
          <Product product={products[4]}></Product> */}
        </div>
      </header>
    </div>
  );
}

function Person(props){
  var company = {
    rt:"react"
  }
  var container={
    border:'none',
    borderRadius:'10px',
    padding:'5px 15px 5px 15px',
    margin:'15px',
    boxShadow: '1px 1px 10px 1px grey',
    color:'#7fff00',
    fontWeight:'460',
    float:'left',
    width:'550px'
  }
  return(
    <div style={container}>
          <p style={{fontSize:30}}>{props.name}</p>
          <p>{props.job}-{props.email}-{company.rt}</p>
          <p>{props.home}</p>
        </div>
  )
}

function Product(props) {
  const productStyle = {
    border:'none',
    borderRadius:'5px',
    margin:'10px',
    padding:'5px 5px 5px 5px',
    color:'black',
    backgroundColor:'lightgray',
    boxShadow: '1px 1px 10px 1px grey',
    width:'211px',
    float:'left'
  }
  const btnStyle = {
    border:'none',
    borderRadius:'5px',
    margin:'5px',
    padding:'5px 5px 5px 5px',
    color:'white',
    backgroundColor:'black',
    cursor: 'pointer'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button style={btnStyle}>Buy now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  // const increase = () => setCount(count+1);
  if(count>0){
    var decrease = () => setCount(count-1);
  }
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  },[]);

  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      {
        users.map(user => <ul>{user.name}-{user.email}</ul>)
      }
    </div>
  )
}
export default App;
