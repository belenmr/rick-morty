import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from "react";
import Characters from './components/Characters';

function App() {
	const [characters, setCharacters] = useState(null);
	const reqApi = async () => {
		const api = await fetch('https://rickandmortyapi.com/api/character');
		//console.log(api);
		const characterApi = await api.json();
		//console.log(characterApi);
		setCharacters(characterApi.results);
	}
	//console.log(characters);

	return (
		<div className="App">
			<header className="App-header">
				<h1 className='tittle'>Rick & Morty</h1>

				{characters ? (
				<Characters characters={characters} setCharacters={setCharacters}/>
				) : (
					<>
						<img src={imageRickMorty} className="img-home" alt="Ricky & Morty" />
						<button onClick={reqApi} className="btn-search">
							Search characters
						</button>
					</>
				)}

			</header>
		</div>
	);
}

export default App;
