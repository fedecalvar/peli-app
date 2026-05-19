// movie va a recibir un objeto con todos los datos de la película
// que nos manda a TMDB
function MovieCard({ movie }) {
  return (
    <div className="w-48 rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        // path para las imagenes que nos manda a la API
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full"
      />
      <div className="p-3">
        <h3 className="font-bold text-sm">{movie.title}</h3>
        {/* se toma la fecha "xxxx-xx-xx" y solamente se toman los primeros 4 caracteres para mostrar solo el año */}
        {/* el ? es por si la fecha viene vacia, evitamos que rompa la app */}
        <p className="text-gray-500 text-xs">{movie.release_date?.slice(0, 4)}</p>
        {/* Redondeamos la puntuación a un decimal */}
        <p className="text-yellow-500 text-xs">⭐ {movie.vote_average?.toFixed(1)}</p>
      </div>
    </div>
  )
}

export default MovieCard