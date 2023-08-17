import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/movieCard';
import './movieListing.css';
import '../../common/color.css';
import Loader from '../Loading/loading';

const MovieListing = () => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, renderShows = "";

  renderMovies = 
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />
      })
    ) : (
      <div className='movies-error font-primary'>
        <h3>{movies.Error}</h3>
      </div>
    )

    renderShows = 
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />
      })
    ) : (
      <div className='movies-error font-primary'>
        <h3>{movies.Error}</h3>
      </div>
    )
  
  return (
    <div className='movie-wrapper'>

    {Object.keys(movies).length === 0 ? <div className='loader-container'><Loader /></div> : (
      <>
        <div className='movie-list'>
          <h2 className='font-secondary'>Movies</h2>
          <div className='movie-container'>{renderMovies}</div>
        </div>
        <div className='show-list'>
          <h2 className='font-secondary'>Shows</h2>
          <div className='movie-container'>{renderShows}</div>
        </div>
      </>
    )}

    </div>
  )
}

export default MovieListing
