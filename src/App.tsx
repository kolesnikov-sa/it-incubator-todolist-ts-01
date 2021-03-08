import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}

function App() {
  const tasksOne: Array<TaskType> = [
    {id: 1, title: "HTML & CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false}
  ]
  const tasksTwo: Array<TaskType> = [
    {id: 4, title: "Fruits", isDone: true},
    {id: 5, title: "Juice", isDone: false},
    {id: 6, title: "Wine", isDone: true}
  ]
  return (
    <div className="App">
      <TodoList title={"What to learn"} tasks={tasksOne}/>
      <TodoList title={"What to buy"} tasks={tasksTwo}/>
    </div>
  );
}

export default App;
