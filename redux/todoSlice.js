import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
	todos: [{ id: "32", title: "First Todo", completed: false }],
	showAddForm: true,
};

const todoSlice = createSlice({
	initialState,
	name: "todos",
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		setCompleted: (state, action) => {
			const index = state.todos.findIndex(
				(todo) => todo.id === action.payload.id
			);
			if (index === -1) return;
			state.todos[index].completed = true;
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
		},
		updateTodo: (state, action) => {
			const index = state.todos.findIndex(
				(todo) => todo.id === action.payload.id
			);
			const todo = state.todos.find((todo) => todo.id === action.payload.id);
			const updatedTodo = {
				title: action.payload.title,
				completed: action.payload.completed,
				id: action.payload.id,
			};
			state.todos[index] = updatedTodo;
		},
		setShowAddForm: (state, action) => {
			state.showAddForm = action.payload;
		},
	},
});

export const { addTodo, setCompleted, deleteTodo, updateTodo, setShowAddForm } =
	todoSlice.actions;

export default todoSlice.reducer;
