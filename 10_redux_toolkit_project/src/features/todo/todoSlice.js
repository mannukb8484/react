import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: "1", text: "hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            console.log("Deleting ID:", action.payload);
            state.todos = state.todos.filter((curr_todo) => (curr_todo.id !== action.payload));
        },
    }
})

// to be used in components individually
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

//to be used in the store coz store is restricted and 
//it only update value taken from the reducer that is registered inside it
//so we must register the reducer in the store, fir that we need to export it::
export default todoSlice.reducer //default export of this file, can be imported by any 
