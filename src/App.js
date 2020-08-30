import React, { useEffect, useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

const App = () => {

  const [items, setItems] = useState([])

  // add new todo into todolist
  const addItem = (item) => {
    const itemNew = { ...item, id: items.length }
    const itemsNew = [...items, itemNew]
    setItems(itemsNew)
    localStorage.setItem('items', JSON.stringify(itemsNew))
  }

  // update todo into todolist
  const updateItem = (itemUpdate) => {
    const itemsNew = [...items]
    itemsNew.map( (item,index) => {
      if(itemUpdate.id === item.id){
        itemsNew.splice(index,1,itemUpdate)
      }
    })
    setItems(itemsNew)
    localStorage.setItem('items', JSON.stringify(itemsNew))
  }

  //delete item
  const deleteItem = (idItem) => {
    const itemsNew = [...items]
    itemsNew.forEach((item,index) => {
      if(item.id === idItem) {
        itemsNew.splice(index,1)
      }
    })
    setItems(itemsNew)
    localStorage.setItem('items', JSON.stringify(itemsNew))
  }

  //save localstorage
  useEffect(()=> {
    const items = localStorage.getItem('items')
    if (items) {
      setItems(JSON.parse(items))
    }
  },[])

  return (
    <div>
      <div className="left_right">
        <NewTodo addItem={addItem} />
        <TodoList
          entries={items}
          deleteItem={deleteItem}
          updateItem={updateItem} />
      </div>
    </div>
  )
}

export default App
