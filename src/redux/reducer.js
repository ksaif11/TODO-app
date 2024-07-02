import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
  } from './actions';
  
  const initialState = { todos: [] };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          todos: [...state.todos, { text: action.payload.text, completed: false }]
        };
  
      case TOGGLE_TODO:
        return {
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
          ),
        };
  
      case REMOVE_TODO:
        return {
          todos: state.todos.filter((todo, index) => index !== action.payload.id)
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;