import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  render() {
    const {key, item} = this.props
    //update item
    const handleChange = (event) => {
      event.persist();
      let value = event.target.value;
      let itemu =  { ...item,  [event.target.name]: value }
      this.props.item = itemu
    }

    const handleUpdateItem = () => {
      const taskTitle = this.refs.reftitle.value;
      const taskDesc = this.refs.refdesc.value;
      const taskDate = this.refs.refdate.value;
      const taskPior = this.refs.refpior.value;
      const todo = {
        title: taskTitle,
        description: taskDesc,
        date: taskDate,
        piority: taskPior
      }
      this.props.updateItem(todo);
    }

    return (
      <div key={key}>
        <div className="list_text" >
          <div className="list_text---left">
              <span><i class="fa fa-check-square-o" aria-hidden="true"></i></span>
              <h5>{item.title}</h5>
          </div>
          <div className="list_text---right">
            <div className="detail_button">
                <button onClick={() => this.setState({active: !this.state.active})}>Detail</button>
            </div>
            <div className="remove_button">
                <button onClick={() => this.props.deleteItem(item.title)}>Remove</button>
            </div>
        </div>
        </div>
        <form className={this.state.active ? "content display-block" : "content hide-block"}>
      <div className="top_content">
        <input type="text" value={item.title} name="title" onChange={event => handleChange(event)} ref="reftitle"/>
      </div>
      <div className="center_content">
        <label>Description</label>
        <textarea rows="10" cols="100%" value={item.description} ref="refdesc" required></textarea>
      </div>
      <div className="bottom_content">
        <div className="bottom_content---left">
        <label>Due date</label>
        <div className="icon_input">
          <input type="date" value={item.date} min="2018-01-01" max="2018-12-31" ref="refdate" required></input>
        </div>
        </div>
        <div className="bottom_content---right">
          <label>Piority</label>
          <select ref="refpior" value={item.piority}>
            <option>Normal </option>
            <option>Low</option>
            <option>High</option>
          </select>
        </div>
      </div>
        <div className="button_content">
          <button type="submit" onClick={() => handleUpdateItem()}>Update</button>
        </div>
    </form> 
      </div>
    )
  }
}


export default TodoItem;