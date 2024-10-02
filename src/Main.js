 import {FaTrashAlt} from 'react-icons/fa'
import './App.css'
const Main = ({items,handleCheck,handleDelete}) => {
   
  return (
    <div className="main">
      {items.length ?  (
       <ul>
          {items.map((item)=>(
            <li key={item.id}>
                <input
                  type="checkbox" 
                  checked={item.checked}
                  onChange={()=>handleCheck(item.id)}
                  
                />
                <label 
                  style={item.checked ? {textDecoration: "line-through"}:{textDecoration : "none"}}
                  onDoubleClick={()=>handleCheck(item.id)}
                  >{item.name}</label>
                 
                <FaTrashAlt
                  className="deletebtn"
                  onClick={()=>handleDelete(item.id)}
                />
                 
            </li>
          ))}
       </ul>
       ) : (
        <h2 style={{marginTop:'80%', fontSize:'25px'}}>Your list is Empty!</h2>
       )}
    </div>
  )
}

export default Main