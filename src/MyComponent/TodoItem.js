import React from 'react';

const TodoItem = ({todos,onDelete}) => {
  return (
    <div>
      <h6>This is my Todo Items</h6>
      <h3>{todos.srno}</h3>
      <h3>{todos.title}</h3>
      <h3>{todos.desc}</h3>
      <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todos)}}>Delete</button>
    </div>
  );
}

export default TodoItem;
