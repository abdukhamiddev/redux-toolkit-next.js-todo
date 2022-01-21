import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
import { setShowAddForm } from "../redux/todoSlice";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div>
				<Todos />
			</div>

			<AddTodo />
		</div>
	);
}
