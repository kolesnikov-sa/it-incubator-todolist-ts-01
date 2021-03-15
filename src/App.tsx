import React, {useState} from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {v1} from 'uuid';

export type TaskType = {
  id: string,
  title: string,
  isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  console.log(v1());
  // BLL
  const [tasks, setTasks] = useState<Array<TaskType>>([
    {id: v1(), title: 'HTML & CSS', isDone: true},
    {id: v1(), title: 'JS', isDone: true},
    {id: v1(), title: 'React', isDone: false},
    {id: v1(), title: 'Redux', isDone: false}
  ]);

  function removeTask(taskID: string) {
    setTasks(tasks.filter(task => task.id !== taskID));
  }

  function addTask(title: string) {
    const task: TaskType = {
      id: v1(),
      title,
      isDone: false
    };
    const newTasks = [...tasks, task];
    setTasks(newTasks);
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

  // UI
  return (
    <div className="App">
      <TodoList
        title={'What to learn'}
        tasks={getTasksForTodoList()}
        addTask={addTask}
        removeTask={removeTask}
        changeTodoListFilter={changeTodoListFilter}
      />
    </div>
  );
}

export default App;
