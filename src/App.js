import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        setPokemons(pokemonDetails);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesName = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType
      ? pokemon.types.some((type) => type.type.name === selectedType)
      : true;
    return matchesName && matchesType;
  });

  if (loading) return <h2 className="status-text">Loading Pokémon...</h2>;
  if (error) return <h2 className="status-text">Failed to load Pokémon. Try again later!</h2>;

  return (
    <div className="App">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {filteredPokemons.length > 0 ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <h2 className="status-text">No Pokémon found!</h2>
      )}
    </div>
  );
}

export default App;
