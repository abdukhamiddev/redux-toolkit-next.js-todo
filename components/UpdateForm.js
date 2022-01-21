import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddForm, updateTodo } from "../redux/todoSlice";

const UpdateForm = ({ form, id, setForm }) => {
	const todos = useSelector(({ todos }) => todos.todos);

	const current = todos.find((item) => item.id === id);

	const [text, setText] = useState(current?.title);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateTodo({ title: text, completed: false, id: id }));
		setForm(false);
		dispatch(setShowAddForm(true));
	};
	return (
		<div>
			{form && (
				<form className="h-[200px]" onSubmit={submitHandler}>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						className="px-4 py-1 border-2 border-red-200 rounded-lg"
					/>
					<button
						type="submit"
						className="px-6 py-1 text-white bg-blue-600 border-2 rounded-lg text-[16px] ml-20 font-thin"
					>
						Update
					</button>
				</form>
			)}
		</div>
	);
};

export default UpdateForm;
