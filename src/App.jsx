import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

function App() {
  // useState('') guarda lo que el usuario escribe en el buscador, arranca vacio
  const [query, setQuery] = useState('')
  // guarda la lista de películas que devuelve la API, arranca como array vacío
  const [movies, setMovies] = useState([])

  // usamos useEffect para que se ejecute cada vez que query se cambia
  useEffect(() => {
    // si el buscador esta vacio no hacemos nada
    if(query === '') return

    const fetchMovies = async () => {
      const response = await fetch(
        // pedimos los resultados en español con language=es-ES
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=es-ES`
      )
      const data = await response.json()
      setMovies(data.results || [])
    }
    fetchMovies()
  }, [query])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-8 py-6">
        <h1 className="text-4xl font-bold text-center mb-4">🔍 ¿Qué se mira?</h1>
        {/* le pasamos setQuery como propiedad, cada vez que el usuario
        escribe se actualiza query */}
        <SearchBar onSearch={setQuery} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
          {/* recorremos el array de las películas */}
          {movies.map((movie) => (
            // react necesita una key única en cada elemento de una lista
            // para saber cuál cambio. La API de TMDB nos da un id por película,
            // asi que usamos eso
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App