import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';  
import { getDetail, fetchAsyncDetail } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { IoFilmOutline } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import './movieDetail.css';
import '../../common/color.css'
import { removeSelectedItem } from '../../features/movies/movieSlice';
import Loader from '../Loading/loading';

const MovieDetail = () => {
  
  const dispatch = useDispatch();
  const {imdbID} = useParams();
  const data = useSelector(getDetail);
  
  useEffect(()=>{

    dispatch(fetchAsyncDetail(imdbID));

    return () => {
      dispatch(removeSelectedItem());
    }

  }, [imdbID, dispatch]);

  return (
    <div className='movie-section font-primary'>
    {Object.keys(data).length === 0 ? (
      <Loader />
    ):(
      <>
      <div className='section-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating font-secondary'>
          <span>
            IMDB Rating  <FaStar className="star-icon" /> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes  <FaThumbsUp className="thumbs-up" /> : {data.imdbVotes}
          </span>
          <span>
            RunTime  <IoFilmOutline  className="film-icon" /> : {data.Runtime}
          </span>
          <span>
            Year  <BiCalendar className="calendar-icon" /> : {data.Year}
          </span>
        </div>
        <div className='movie-plot'>
          {data.Plot}
        </div>
        <div className='movie-info font-secondary'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className='section-right'>
        <img src={data.Poster} alt={data.Title}/>
      </div>
    </>
    )}
    </div>
  )
}

export default MovieDetail
