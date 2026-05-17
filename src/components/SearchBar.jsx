import './SearchBar.css';
// onSearch, se va ejecutar cada vez que el usuario escriba algo
function SearchBar({ onSearch }) {
  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Que vamos a ver hoy?"
        // on change se va a disparar cada vez que el input cambia
        onChange={(e) => onSearch(e.target.value)}
        // e.target.value, es el texto que escribió el usuario en ese momento
      />
    </div>
  );
}

export default SearchBar
