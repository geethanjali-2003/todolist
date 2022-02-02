import React from 'react';
import TodoItem from './TodoItem';

const Todolist = (props) => {
  return (
    <div className='container'>
      <h2>Todo List</h2>
      {props.todos.map((todoitems)=> {
        return <TodoItem todos={todoitems} key={todoitems.srno} onDelete={props.onDelete}/>
        })}
    </div>
  );
}

export default Todolist;
