import React, { useState } from 'react';
import TodoList from './TodoList';

const todoItems = [
    {
      name: 'dishes',
      id: 1,
      done: false
    }
  ]

function TodoForm(props) {
    console.log('form', props)
    const [todo, setTodo] = useState(todoItems);
    const [todoText, setTodoText] = useState('');

    const handleChanges = e => {
        setTodoText(e.target.value);
    };

    const addTodo = (e, todo) => {
        e.preventDefault();
        const newTodo = {
            name: todoText,
            id: Date.now(),
            done: false
        }

        setTodo([...todo, newTodo])
    }

    const submitTodo = e => {
        e.preventDefault();

        // setTodo({ toDo: "" });
        addTodo(e, todo);
    };


    return(
        <div>
            <form onSubmit={submitTodo}>
                <input
                    type="text"
                    name="toDo"
                    value={todoText}
                    onChange={handleChanges}
                />
                <button>Add Something To Do</button>
            </form>
            <TodoList todo={todo} />
        </div>
    )

}

export default TodoForm;