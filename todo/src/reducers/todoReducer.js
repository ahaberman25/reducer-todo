export const initialState = {
    todoItems: [
        {
            name: 'Do The Dishes',
            id: 1,
            done: false
        }
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                todoItems: [...state.todoItems, {
                    name: action.payload,
                    id: Date.now(),
                    done: false                    
                }]
            }
        case "TOGGLE_ITEM":
            return {
                ...state,
                todoItems: state.todoItems.map(item => {
                    if (item.id === action.payload) {
                        return {...item, done: !item.done}
                    } else {
                        return item
                    }
                })
            }
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todoItems: state.todoItems.filter(item => !item.done)
            }
        default:
            return state;
    }
}