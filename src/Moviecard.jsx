import React from 'react'

function Moviecard({Movie}) {
  return (
    <div className='movie'>
        <div>
          <p>{Movie.Year}</p>
        </div>

        <div>
          <img src={Movie.Poster} alt={Movie.Title} />
        </div>

        <div>
          <span>{Movie.Type}</span>
          <h3>{Movie.Title}</h3>
        </div>
      </div>
    
  )
}

export default Moviecard