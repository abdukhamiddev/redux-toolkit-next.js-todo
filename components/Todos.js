import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
const Todos = () => {
	const todos = useSelector(({ todos }) => todos.todos);
	console.log(todos);

	return (
		<div>
			<div className="pt-[40px]">
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						title={todo.title}
						id={todo.id}
						completed={todo.completed}
					/>
				))}
			</div>
		</div>
	);
};

export default Todos;
