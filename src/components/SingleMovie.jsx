import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Api_url } from '../App'
import { NavLink } from 'react-router-dom'


export const SingleMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true)




  const getMovie = async (url) => {
    try {

      let data = await fetch(url)
      let jsonData = await data.json()
      setIsLoading(false)

      setMovie(jsonData)

      console.log(jsonData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovie(Api_url + `&i=${id}`)

  }, [])


  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className='onemovie-section'>
      <div className='onemovie-subsection'>
        <div className="onemovie-card">
          <div className="movie-poster">
            <img src={movie.Poster} alt="Movie-Poster" />
          </div>
          <div className="movie-info">
            <p><span>Title: </span>{movie.Title}</p>
            <p><span>Released: </span>{movie.Released}</p>
            <p><span>Director: </span>{movie.Director}</p>
            <p><span>IMDB Rating: </span>{movie.imdbRating}</p>
            <p><span>Runtime: </span>{movie.Runtime}</p>
            <p><span>Actors: </span>{movie.Actors}</p>
          </div>
        </div>
      </div>
      <NavLink to="/" className="back-btn">
        Go Back
      </NavLink>
    </div>
  )
}
