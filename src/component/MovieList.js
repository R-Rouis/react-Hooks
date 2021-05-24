import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

const MovieList = ({movieList,search}) => {
    return (
        
        <div className='movie-list'>
          {movieList.map(movie=><MovieCard movieCard={movie}></MovieCard>)}
        </div>
    )
}

export default MovieList;