import React, { useRef } from 'react'

const NewTodo = (props) => {
  const curr = new Date()
  curr.setDate(curr.getDate())
  const time = curr.toISOString().substr(0,10)
  const reftitle = useRef()
  const refdesc = useRef()
  const refdate = useRef()
  const refpior = useRef()
  const handleInput = () => {
    const todo = {
      title: reftitle.current.value,
      description: refdesc.current.value,
      date: refdate.current.value,
      piority: refpior.current.value
    }
    props.addItem(todo)
  }

  return (
    <div className="web_wrap---left">
      <div className="header_top">
        <h4>New Task</h4>
      </div>
      <form className="content" onSubmit={() => handleInput()}>
        <div className="top_content">
          <input
            type="text"
            placeholder="Add new task ..."
            ref={reftitle} required >
          </input>
        </div>
        <div className="center_content">
          <label>Description</label>
          <textarea
            rows="10"
            cols="100%"
            ref={refdesc} required >
          </textarea>
        </div>
        <div className="bottom_content">
          <div className="bottom_content---left">
          <label>Due date</label>
          <div className="icon_input">
            <input
              type="date"
              defaultValue={time}
              ref={refdate} required>
            </input>
          </div>
          </div>
          <div className="bottom_content---right">
            <label>Piority</label>
            <select ref={refpior}>
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

export default NewTodo