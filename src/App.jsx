import {useState, useEffect } from 'react'
import './App.css'
import Moviecard from './Moviecard'

//703cf5b8

const API_URL =  "http://www.omdbapi.com?apikey=703cf5b8"

function App() {
  const [movies,setMovies] = useState([])
  const [search,setSearch] = useState('')

  const searchMovies  = async(title)=>{
    const response  = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('spiderman')
  },[])


  return (
   <div className='app'>
    <h1>Movieland</h1>

    <div className='search'>
      <input placeholder='Search for movies'
      value= {search}
      onChange={(e)=>setSearch(e.target.value)}/>
      <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
      alt="search"
      onClick={() => searchMovies(search)}
    />
    </div>

    <div className='container'>
      {movies.map((movie)=>(
        <Moviecard Movie={movie}></Moviecard>
      ))}
   </div>
   </div>
  )
}

export default App
