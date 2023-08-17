import React, {useEffect} from 'react'
import MoviesListing from '../MovieListing/movieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { Input } from 'antd';
import './home.css'

const Home = () => {
  
  const dispatch = useDispatch();
  const {Search} = Input;

  useEffect(() => {
    dispatch(fetchAsyncMovies()); 
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  
  const onSearch = (value) => {
    dispatch(fetchAsyncMovies(value)); 
    dispatch(fetchAsyncShows(value));
  }

  return (
    <div>
      <div className='banner-image'></div>

      <Search
      className = 'search-bar'
      placeholder="Search movies..."
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
      <MoviesListing />
    </div>    
  )
}

export default Home
