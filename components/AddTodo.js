import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo({ title, id: nanoid(2), completed: false }));
		setTitle("");
	};
	const showAddForm = useSelector((state) => state.todos.showAddForm);
	const showUpdateForm = useSelector((state) => state.todos.showUpdateForm);
	return (
		<div>
			{showAddForm === true && (
				<form onSubmit={submitHandler} className="py-[50px]">
					<div className="flex flex-col items-center space-y-2 ">
						<input
							placeholder="Add your todo "
							className="px-2 border-2 border-gray-300 rounded-md outline-none"
							type="text"
							onChange={(e) => setTitle(e.target.value)}
							id="text"
							required
							value={title}
						/>

						<button
							type="submit"
							className="pl-[30px] border-2 w-[100px] flex  rounded-md"
						>
							Add
						</button>
					</div>
				</form>
			)}
			{showUpdateForm && {}}
		</div>
	);
};

export default AddTodo;
