
// onSearch, se va ejecutar cada vez que el usuario escriba algo
function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Que vamos a ver hoy?"
        className="w-96 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        // on change se va a disparar cada vez que el input cambia
        onChange={(e) => onSearch(e.target.value)}
        // e.target.value, es el texto que escribió el usuario en ese momento
      />
    </div>
  );
}

export default SearchBar
