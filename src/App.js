import { useState } from 'react';
import AddItem from './AddItem.js';
import './App.css';
import Footer from './Footer.js';
import Head from './Head.js';
import Main from './Main.js';
 

function App() {
  const [items,setItems] = useState(
    [
      {
        id:1,
        checked:false,
        name: "study "
      },
      {
        id:2,
        checked:false,
        name:'coding'
      },
      {
        id:3,
        checked:false,
        name:'playing'
      }
    ])
  const handleCheck = (id)=>{
    const ListItems = items.map((item)=> (item.id === id ? {...item, checked :!item.checked} : item))
    setItems(ListItems)
    localStorage.setItem("todolist",JSON.stringify(ListItems))
  }

  const handleDelete = (id)=>{
    const ListItems = items.filter((item)=> item.id !== id)
    setItems(ListItems)
    localStorage.setItem("todolist",JSON.stringify(ListItems))
  }
  return (
    <div>
      <Head />
      <AddItem 
        items = {items}
        setItems = {setItems}
      />
      <Main 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
