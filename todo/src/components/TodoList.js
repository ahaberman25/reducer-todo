import React from 'react';


function TodoList(props) {
  console.log('list', props)

  return (
    <div>
      {props.todo.map(item => (
        <li className="li" key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}

export default TodoList;