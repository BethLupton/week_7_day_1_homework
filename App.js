import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { name: "Buy shopping", priority : "low"},
    { name: "Clean bathroom", priority : "high"},
    { name: "Car's MOT", priority : "low" }
  ])

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} className={task.priority}>
        <span>{task.name}</span>
        </li>
    )
  })

  const [newTask, setNewTask] = useState('')
  const [newPriority, setNewPriority] = useState('')


  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handlePriority = (event) => {
    setNewPriority(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault()
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, priority: newPriority})
    setTasks(copyTasks)
    setNewTask("")
  }

  return (
    <div className="App">

      <h1>ToDo's</h1>
      <hr></hr>
    <form onSubmit={saveNewTask}>
    <label htmlFor='new-task'>Add a new Task</label>
    <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
    <input type="radio" value="high" name="priority" onChange={handlePriority}/> High
    <input type="radio" value="low" name="priority" onChange={handlePriority} /> Low
      <input type='submit' value='Save Item'/>

    </form>
      <ul>
        {taskNodes}
      </ul>

    </div>
  );
}

export default App;
