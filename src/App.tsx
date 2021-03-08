import React, {useState} from 'react';
import './App.css';
import {TodoList} from './TodoList';

export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  // const tasks: Array<TaskType> = [
  //   {id: 1, title: 'HTML & CSS', isDone: true},
  //   {id: 2, title: 'JS', isDone: true},
  //   {id: 3, title: 'React', isDone: false},
  //   {id: 4, title: 'Redux', isDone: false}
  // ]

  const [tasks, setTasks] = useState<Array<TaskType>>([
    {id: 1, title: 'HTML & CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React', isDone: false},
    {id: 4, title: 'Redux', isDone: false}
  ]);

  function removeTask(taskID: number) {
    setTasks(tasks.filter(task => task.id !== taskID));
  }

  // const todoListFilter: FilterValuesType = 'all';
  const [todoListFilter, setTodoListFilter] = useState<FilterValuesType>('all');

  function changeTodoListFilter(newFilterValue: FilterValuesType) {
    setTodoListFilter(newFilterValue);
  }

  function getTasksForTodoList() {
    switch (todoListFilter) {
      case 'active':
        return tasks.filter(task => !task.isDone);
      case 'completed':
        return tasks.filter(task => task.isDone);
      default:
        return tasks;
    }
  }

  return (
    <div className="App">
      <TodoList
        title={'What to learn'}
        tasks={getTasksForTodoList()}
        changeTodoListFilter={changeTodoListFilter}
        removeTask={removeTask}/>
    </div>
  );
}

export default App;
