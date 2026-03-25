import Card from './card.jsx';

function App() {
	return (
		<div>
			<h1>Dashboard</h1>
			<p>Petrov Eduard </p>
			<Card />
			<Card title="Proiect 1" description="Pagina personala cu HTML si CSS" />
			<Card title="Proiect 2" description="Pagina interactiva cu JavaScript" />
			<Card title="Proiect 3" description="Dashboard cu React" />
		</div>
	);
}
export default App