import React from 'react'
import { useApp } from '../context/AppContext'
import {NavLink} from 'react-router-dom'

export const Movies = () => {

  const { movie,isError } = useApp()


  if (movie.length === 0) {
    return <div className='loading'>Loading...</div>; // You can show a loading indicator or some other UI
  }

  if (isError.show){
    return ""
  }

  return (
    <section className='movie-section'>
      <div className='movie-grid'>

        {
          movie.map(item => {
            return (

              <NavLink to={`movie/${item.imdbID}`} className='navLink' key={item.imdbID}>
              <div className='movie-card' style={{backgroundImage:`url(${item.Poster})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>

                <div className="movie-title">
                  <h2>{item.Title}</h2>
                </div>
                {/* <div className="movie-poster">
                  <img src={item.Poster} alt="poster" />
                </div> */}
              </div>
              </NavLink>
            )
          })
        }
      </div>
    </section>

  )
}
