import React, {useState, useReducer} from 'react'
import {initialState, todoReducer} from '../reducers/todoReducer'
import TodoList from './TodoList';

function TodoForm(props) {
    console.log('form', props)
    // const [todo, setTodo] = useState([]);
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const [todoText, setTodoText] = useState('');
    console.log('state', state)

    const handleChanges = e => {
        setTodoText(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_ITEM', payload: todoText});
        setTodoText('');
        // setTodo([...todo, newTodo])
    }

    // const submitTodo = e => {
    //     e.preventDefault();
    //     addTodo(e, todo);
    // };

    const toggleTodo = todoId => {
        console.log("todo id", todoId);    
        dispatch({type: 'TOGGLE_ITEM', payload: todoId})
      };

      const clearDone = e => {
        e.preventDefault();    
        dispatch({type: 'CLEAR_COMPLETED'})
      };


    return(
        <div>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    name="toDo"
                    value={todoText}
                    onChange={handleChanges}
                />
                <button>Add Something To Do</button>
            </form>
            <TodoList todo={state.todoItems} toggle={toggleTodo} clear={clearDone} />
        </div>
    )

}

export default TodoForm;