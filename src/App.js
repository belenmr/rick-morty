import imageRickMorty from './img/rick-morty.png';
import './App.css';

function App() {
	const reqApi = () => {
		console.log("Clicking");
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1 className='tittle'>Rick & Morty</h1>
				<img src={imageRickMorty} className="img-home" alt="Ricky & Morty" />
				<button onClick={reqApi} className="btn-search">
					Buscar personajes
				</button>
			</header>
		</div>
	);
}

export default App;
