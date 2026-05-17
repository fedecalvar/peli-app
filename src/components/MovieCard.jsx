import "./MovieCard.css";
// movie va a recibir un objeto con todos los datos de la película
// que nos manda a TMDB

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        // path para las imagenes que nos manda a la API
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`movie.title`}
      />
      <div className="movie-card-info">
        <h3>{movie.title}</h3>
        {/* se toma la fecha "xxxx-xx-xx" y solamente se toman los primeros 4 caracteres para mostrar solo el año */}
        {/* el ? es por si la fecha viene vacia, evitamos que rompa la app */}
        <p>{movie.release_date?.slice(0, 4)}</p>
        {/* Redondeamos la puntuación a un decimal */}
        <p>⭐ {movie.vote_average?.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default MovieCard;
