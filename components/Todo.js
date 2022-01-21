import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setCompleted, setShowAddForm } from "../redux/todoSlice";
import UpdateForm from "./UpdateForm";
import dynamic from "next/dynamic";
const Trash = dynamic(() => import("../public/trash.svg"));
const Pencil = dynamic(() => import("../public/pencil.svg"));

const Todo = ({ title, id, completed }) => {
	const [marked, setMarked] = useState(false);

	const [form, setForm] = useState(false);
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(setCompleted({ id: id }));

		setMarked(true);
	};
	const deleteHandler = () => {
		dispatch(deleteTodo({ id: id }));
	};

	const updateHandler = () => {
		setForm(!form);
		dispatch(setShowAddForm(false));
	};
	return (
		<div className="w-[500px]">
			<div className="flex items-center justify-between px-5 py-4 border-red-500 rounded-lg bg-slate-100">
				<div className={`${marked ? "line-through" : ""}`}>{title}</div>

				<div className="flex items-center space-x-6">
					<input type="checkbox" onClick={clickHandler} disabled={completed} />
					<button onClick={deleteHandler}>
						<Trash className="w-[20px] " />
					</button>
					<button onClick={updateHandler}>
						<Pencil className="w-[20px]" />
					</button>
				</div>
			</div>
			<div className="flex items-center justify-center pt-10">
				<UpdateForm id={id} form={form} setForm={setForm} />
			</div>
		</div>
	);
};

export default Todo;
