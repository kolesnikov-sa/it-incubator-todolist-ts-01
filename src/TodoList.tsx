import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from './App';

type TodoListPropsType = {
  title: string;
  tasks: Array<TaskType>;
  addTask: (title: string) => void;
  removeTask: (taskID: string) => void;
  changeTodoListFilter: (newFilterValue: FilterValuesType) => void;
}

export function TodoList(props: TodoListPropsType) {
  const [title, setTitle] = useState<string>('');
  const tasks = props.tasks.map((task) => {
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone}/>
        <span>{task.title}</span>
        <button onClick={() => props.removeTask(task.id)} className='btn-remove'>X</button>
      </li>
    );
  });
  const setAllFilterValue = () => {props.changeTodoListFilter('all')};
  const setActiveFilterValue = () => {props.changeTodoListFilter('active')};
  const setCompletedFilterValue = () => {props.changeTodoListFilter('completed')};
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
  const addTask = () => {
    props.addTask(title);
    setTitle('');
  }
  const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask();
    }
  }
  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <div>
          <input
            value={title}
            onChange={changeTitle}
            onKeyPress={onKeyPressAddTask}
          />
          <button onClick={addTask}>+</button>
        </div>
        <ul>
          {tasks}
        </ul>
        <div>
          <button onClick={setAllFilterValue}>All</button>
          <button onClick={setActiveFilterValue}>Active</button>
          <button onClick={setCompletedFilterValue}>Completed</button>
        </div>
      </div>
    </div>
  );
}