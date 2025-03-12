import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // in addTodo, I will get the todoObj in action.payload
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        // in removeTodo, I will get id
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((prevTodoObj) => (
                prevTodoObj.id !== action.payload
            ))
        },
        // in updateTodo, I will get id and updated text 
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todoObj) => todoObj.id === action.payload.id
                ? { ...todoObj, text: action.payload.text }
                : todoObj)
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer