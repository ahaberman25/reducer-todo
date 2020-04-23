import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoForm(props) {
    console.log('form', props)
    const [todo, setTodo] = useState([]);
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
        addTodo(e, todo);
    };

    const toggleTodo = todoId => {
        console.log("todo id", todoId);
    
        setTodo(
            todo.map(item => {
            if (todoId === item.id) {
              return {
                ...item,
                done: !item.done
              };
            }
            return item;
          })
        );
      };

      const clearDone = e => {
        e.preventDefault();
    
        setTodo(
          todo.filter(todo => !todo.done)
        );
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
            <TodoList todo={todo} toggle={toggleTodo} clear={clearDone} />
        </div>
    )

}

export default TodoForm;