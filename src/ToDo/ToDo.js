import React from 'react'
import { useState } from 'react'


function ToDo() {
    //hook for holding all the data
  const [todos, setTodos] = useState([]);
  //hook for getting all the data from the input field
  const [newTodo, setNewTodo] = useState();
  function Addtodo() {
    let newTask = [...todos, { todo: newTodo.trim() }]
    setTodos(newTask);
    setNewTodo("")
    console.log(newTask)
  }
  return (
    <div>
         <div className='container'>
        <h1 className='text-center display-3'>Enter your task</h1>
        <input type='text' className='form-control' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <br />
        <button className='btn btn-primary' onClick={Addtodo}>Add new Task</button>
        <hr />
        <table className='table'>
          <tr>
            <th>All Task</th>
          </tr>
          {
            todos.map((tod) => (
              <tr>
                <td>{tod.todo}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  )
}

export default ToDo