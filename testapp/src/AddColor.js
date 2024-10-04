import React, { useState } from 'react'
 
import './App.css';
function Addcolor(){
    const [color, setColor] = useState("white")
    
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <div style={color === "black" ||color === "darkblue" ? {backgroundColor : color,color:'white'}: {backgroundColor : color,color:'black'} }><p>{ color }</p></div>
            <input 
                type="text"
                placeholder='Add color name' 
                onChange = {(e)=>setColor(e.target.value)}
                onSubmit={(e)=>e.preventDefault()}
            />    
        </form>
    )
}
export default Addcolor;