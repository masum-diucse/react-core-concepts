import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const productCollection=[
    {name:'Adobe Photoshop',price:'$99.99'},
    {name:'Adobe Design',price:'$89.99'},
  ]
  const nameArray=["Alam","Falam","Jalam","Kalam","Nalam"];
  return (
    <div>
      {productCollection.map(pr=><Product product={pr}></Product>)}
      <ul>
        {nameArray.map(name=><li>{name}</li>)}
      </ul>
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

function Users() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  console.log(users);
  return (
    <div>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count,setCount]=useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={()=>setCount(count+1)}>Increase</button>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    margin:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float:'left'
  }
  
  const {name,price}=props.product;
  return (
    <div style={productStyle}>
      
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

export default App;
