import React, { Component } from 'react'
import { movies } from '../movieData'

export class MovieList extends Component {
  render() {
    return (
      <div>
          
              {movies.results.map((mvObj) =>{
                  return(
                    <h3>{mvObj.title}</h3>
                  )
                  
              })}
        
      </div>
    )
  }
}

export default MovieList