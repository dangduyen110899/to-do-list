import React, { Component } from 'react'

class NewTodo extends Component {
  handleInput = e => {
    e.preventDefault()
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
    this.props.addItem(todo);

    // reset and focus again on input form
    this.refs.reftitle.value = ''
    this.refs.refdate.value = ''
    this.refs.refdesc.value = ''
    this.refs.refpior.value = 'Normal'
    this.refs.reftitle.focus()
  }

  render() {
    return (
      <div className="web_wrap---left">
        <div className="header_top">
          <h4>New Task</h4>
        </div>
        <form className="content" onSubmit={this.handleInput}>
          <div className="top_content">
            <input type="text" placeholder="Add new task ..." ref="reftitle" required></input>
          </div>
          <div className="center_content">
            <label>Description</label>
            <textarea rows="10" cols="100%" ref="refdesc" required></textarea>
          </div>
          <div className="bottom_content">
            <div className="bottom_content---left">
            <label>Due date</label>
            <div className="icon_input">
              <input type="date" min="2018-01-01" max="2018-12-31" ref="refdate" required></input>
            </div>
            </div>
            <div className="bottom_content---right">
              <label>Piority</label>
              <select ref="refpior">
                <option>Normal </option>
                <option>Low</option>
                <option>High</option>
              </select>
            </div>
          </div>
            <div className="button_content">
              <button type="submit">Add</button>
            </div>
        </form>
      </div>
    )
  }
}

export default NewTodo