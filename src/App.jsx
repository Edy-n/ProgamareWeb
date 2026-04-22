import Card from './Card.jsx';
import { useState } from 'react';
import QuickNote from './QuickNote';
import TodoList from './TodoList.jsx';
import ContactForm from './ContactForm.jsx';


function App() {
	const projects = [
		{ title: "Proiect 1", description: "Pagina personala" },
		{ title: "Proiect 2", description: "Calculator buget" },
		{ title: "Proiect 3", description: "Dashboard React" },
	];
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Petrov Eduard</p>

			{projects.map(function (item, index) {
				return (
					<Card
						key={index}
						title={item.title}
						description={item.description}
					/>
				);
			})}
			<p>Ai apasat pe {count} ori</p>
			<button onClick={() => setCount(count + 1)}>Increment </button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={() => setCount(count - count)}>reset</button>
			<QuickNote />
			<TodoList />
			<ContactForm />
		</div>
	);
}

export default App;