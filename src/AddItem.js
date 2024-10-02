import React, { useState } from 'react'

const AddItem = ({items,setItems}) => {
    const [newItem, setNewItem] = useState('')
    
    const handleSubmit = ()=>{
       
        const id = items[items.length-1].id +1
        const ListItems = [...items,{id : id, checked:false, name : newItem}]
        setItems(ListItems)
        setNewItem('')
    }
  return (
    <form>
        <label htmlFor="additem">Add Item:</label>
        <input
            type="text"
            id='additem'
            placeholder='Add Item'
            autoFocus
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}

            />
        <button onSubmit={(e)=>{e.preventDefault();handleSubmit()}} type='submit'>+</button>
    </form>
  )
}

export default AddItem