import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const nayoks = ['anwar','jafor ikbal', 'salman shah']
  const products =[
    {name:'photoshop', price:'500'},
    {name:'illustrator', price:'600'}
  ]
  const productNames = products.map(product => product.name)
  const nayokNames = nayoks.map(nayok=> nayok)
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
        {
          nayoks.map(nayok =><li>{nayok}</li>)  
            
        }
        {
          products.map(product=><li>{product.name}</li>)
        }
           
        </ul>
        {
          products.map(product =><Product attribute={product}></Product> )
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          edit done
          
        </a>
        <Counter></Counter>
        <Users></Users>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product2 name={products[0]}></Product2>
        <Person name={nayoks[0]} nayika="moushumi"></Person>
        <Person name={nayoks[1]}></Person>
        <Ami name={nayoks[1]}></Ami>


      </header>
      
    </div>
  );
  
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>setUsers(data));
    
  },[])
  return(
    <div>
    <h3>dynamic users : {users.length}</h3>
    <ul>
    {
      console.log(users)
    }
    {
      users.map(user  => <li>{user.name}</li>)
        
    }
    </ul>
    </div>
  )
}
function  Counter(){
  const[count, setCount] = useState(0);
  const handleIncrease = () => setCount(count+1);
    
  
  return(
    <div>
    <h1>count increase : {count}</h1>
    <button onClick={() => setCount(count+1)}>Increase</button>
    <button onCLick={() =>setCount(count-1)}>Decrease</button>
    </div>
  )
}

//first function
function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10 px'
  }
  return (
    <div style={personStyle}>
  <h1>Name: {props.name} {props.nayika}</h1>
  <h3>Hero of the year</h3>
  </div>
  )
}
//second function
function Product(props){
  const productStyle={
    border : '1px solid gray',
    borderRadius: '5px',
    backgroundColor : 'lightgrey',
    height : '400px',
    width: '400px',
    float: 'left'
  }
  return(
    <div style={productStyle}>
      <h2>Name : {props.name}</h2>
      <h1>Price : {props.price}</h1>
      <button>Buy now</button>
    </div>
  )
}
function Product2(props){
  const productStyle={
    border : '1px solid gray',
    borderRadius: '5px',
    backgroundColor : 'lightgrey',
    height : '400px',
    width: '400px',
    float: 'left'
  }
  
  return(
    <div style={productStyle}>
      <h2>Name : {props.name.name}</h2>
      <h1>Price : {props.name.price}</h1>
      <button>Buy now</button>
    </div>
  )
}





function Ami(props){
  const personStyle={
    border: '2px solid red',
    margin: '10 px'}
  return(
    <div style={personStyle}>
    <h3>ami {props.name} </h3>
    <h2>amar mon valo nai</h2>
    </div>
  )

}

export default App;

