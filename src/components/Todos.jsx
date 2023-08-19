import React from "react";
import "./todos.css";

function Todos() {
	const [todos, setTodos] = React.useState([]);

	React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((json) => setTodos(json));
	}, []);

	return (
		<div>
			<h1>Todos</h1>
			<ul className="todos">
				{todos.map((todo) => (
					<li
						key={todo.id}
						className={`todo ${todo.completed ? 'completed': 'pending'}`}
					>
						{todo.title}
						{todo.completed ? (
							<span className="completed">Completed</span>
						) : (
							<span className="pending">Pending</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Todos;