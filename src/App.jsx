import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import './App.css'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

function App() {
  // useState('') guarda lo que ul usuario escribe en el buscador, arranca vacio
  const [query, setQuery] = useState('')
  // guarda la lista de películas que devuevle la API, arranca como array vacío
  const [movies, setMovies] = useState([])

  // usamos useEffect para que se ejecute cada vez que query se cambia
  useEffect(() => {
    // si el buscador esta vacio no hacemos nada
    if(query === '') return

    const fetchMovies = async () => {
      const response = await fetch(
        // pedimos los resultados en españon con language=es-ES
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=es-ES`
      )
      const data = await response.json()
      setMovies(data.results || [])
    }
    fetchMovies()
  }, [query])

  return (
    <div className='app'>
      <h1>🔍¿Qué se mira?</h1>
      {/* le pasamos setQuery como propiedad, cada vez que el usuario
      escribe se actualiza query */}
      <SearchBar onSearch={setQuery} />
      <div className='movies-grid'>
        {/* recorremos el array de las películas */}
        {movies.map((movie) => (
          // react necesita una key única en cada elemento de una lista
          // para saber cuál cambio. La API de TMDB nos da un id por película,
          // asi que usamos eso
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App
