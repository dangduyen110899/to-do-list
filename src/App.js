import React, { Component } from 'react'
import './App.css'
import NewTodo from './Components/Components/NewTodo';
import TodoList from './Components/Components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          title: "taskTitle1",
          description: "taskDesc",
          date: "taskDate",
          piority: "taskPior"
        },
        {
          title: "taskTitle2",
          description: "taskDesc",
          date: "taskDate",
          piority: "taskPior"
        }
      ]
    }
  }

  // add new tab into todolist
  addItem = (item) => {
    const items = [...this.state.items, item]
    this.setState({
      items,
    },() => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  updateItem = (item) => {
    const items = [...this.state.items, item]
    this.setState({
      items,
    },() => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  //delete item
  deleteItem = (titleItem) => {
    console.log(titleItem)
    const items = this.state.items
    items.forEach( (element,index) => {
      if(element.title == titleItem) {
        items.splice(index,1)
      }
    });
    this.setState({items}, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }
  //luu vao localstorage
  componentDidMount() {
    const items = localStorage.getItem('items');
    if (items) {
      this.setState({ items: JSON.parse(items)});
    }
  }
  render() {
    return (
      <div>
        <div className="left_right">
          <NewTodo addItem={this.addItem} />
          <TodoList entries={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
        </div>
      </div>
    )
  }
}



export default App
