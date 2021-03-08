import React from "react";
import {FilterValuesType, TaskType} from './App';

type TodoListPropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskID: number) => void;
  changeTodoListFilter: (newFilterValue: FilterValuesType) => void;
}

export function TodoList(props: TodoListPropsType) {
  const tasks = props.tasks.map((task) => {
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone}/>
        <span>{task.title}</span>
        <button onClick={() => props.removeTask(task.id)} className='btn-remove'>X</button>
      </li>
    );
  });
  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <div>
          <input/>
          <button>+</button>
        </div>
        <ul>
          {tasks}
        </ul>
        <div>
          <button onClick={() => {props.changeTodoListFilter('all')}}>All</button>
          <button onClick={() => {props.changeTodoListFilter('active')}}>Active</button>
          <button onClick={() => {props.changeTodoListFilter('completed')}}>Completed</button>
        </div>
      </div>
    </div>
  );
}