import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from './App';

type TodoListPropsType = {
  key: string;
  id: string;
  title: string;
  todoListActiveFilter: FilterValuesType;
  tasks: Array<TaskType>;
  addTask: (title: string, todoListID: string) => void;
  removeTask: (taskID: string, todoListID: string) => void;
  removeTodoList: (todoListId: string) => void;
  changeTodoListFilter: (newFilterValue: FilterValuesType, todoListID: string) => void;
  changeTaskStatus: (taskID: string, newIsDoneValue: boolean, todoListID: string) => void;
}

export function TodoList(props: TodoListPropsType) {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const tasks = props.tasks.map((task) => {
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(task.id, e.currentTarget.checked, props.id);
    return (
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={changeStatus}
        />
        <span>{task.title}</span>
        <button onClick={() => props.removeTask(task.id, props.id)} className='btn-remove'>X</button>
      </li>
    );
  });
  const setAllFilterValue = () => {
    props.changeTodoListFilter('all', props.id)
  };
  const setActiveFilterValue = () => {
    props.changeTodoListFilter('active', props.id)
  };
  const setCompletedFilterValue = () => {
    props.changeTodoListFilter('completed', props.id)
  };
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setTitle(e.currentTarget.value);
  }
  const addTask = () => {
    if (title.trim()) {
      props.addTask(title.trim(), props.id)
    } else {
      setError('Title is required!');
    }
    setTitle('');
  }
  const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask();
    }
  }
  const removeTodoList = () => props.removeTodoList(props.id);
  return (
    <div>
      <div>
        <h3>{props.title}<button onClick={removeTodoList}>X</button></h3>
        <div>
          <input
            value={title}
            onChange={changeTitle}
            onKeyPress={onKeyPressAddTask}
            className={error ? 'error' : ''}
          />
          <button onClick={addTask}>+</button>
          {error && <div>{error}</div>}
        </div>
        <ul>
          {tasks}
        </ul>
        <div>
          <button
            className={props.todoListActiveFilter === 'all' ? 'active-filter' : ''}
            onClick={setAllFilterValue}>
            All
          </button>
          <button
            className={props.todoListActiveFilter === 'active' ? 'active-filter' : ''}
            onClick={setActiveFilterValue}>
            Active
          </button>
          <button
            className={props.todoListActiveFilter === 'completed' ? 'active-filter' : ''}
            onClick={setCompletedFilterValue}>
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}