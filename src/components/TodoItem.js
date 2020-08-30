import React, { useRef, useState } from 'react'

const TodoItem = (props) => {
  const [active, setActive] = useState(false)
  const {item} = props
  const reftitle = useRef()
  const refdesc = useRef()
  const refdate = useRef()
  const refpior = useRef()

  const handleUpdateItem = () => {
    const todo = {
      id: item.id,
      title: reftitle.current.value,
      description: refdesc.current.value,
      date: refdate.current.value,
      piority: refpior.current.value
    }
    props.updateItem(todo)
  }

  return (
    <div key={item.id}>
      <div className="list_text" >
        <div className="list_text---left">
            <span>
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </span>
            <h5>{item.title}</h5>
        </div>
        <div className="list_text---right">
          <div className="detail_button">
              <button
                onClick={() => setActive(!active)}>Detail
              </button>
          </div>
          <div className="remove_button">
              <button
                onClick={() => props.deleteItem(item.id)} >Remove
              </button>
          </div>
      </div>
      </div>
      {/* form detail */}
      <form className={active ? "content display-block" : "content hide-block"}>
        <div className="top_content">
          <input
            type="text"
            defaultValue={item.title}
            name="title"
            ref={reftitle}/>
        </div>
        <div className="center_content">
          <label>Description</label>
          <textarea
            rows="10"
            cols="100%"
            defaultValue={item.description}
            ref={refdesc} required>
          </textarea>
        </div>
        <div className="bottom_content">
          <div className="bottom_content---left">
          <label>Due date</label>
          <div className="icon_input">
            <input
              type="date"
              defaultValue={item.date}
              ref={refdate}>
            </input>
          </div>
          </div>
          <div className="bottom_content---right">
            <label>Piority</label>
            <select
              ref={refpior}
              defaultValue={item.piority}>
              <option>Normal </option>
              <option>Low</option>
              <option>High</option>
            </select>
          </div>
        </div>
        <div className="button_content">
          <button
            type="submit"
            onClick={() => handleUpdateItem()}>Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoItem