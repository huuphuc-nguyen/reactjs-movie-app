import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Home from '../components/Home/home';
import MovieDetail from '../components/MovieDetail/movieDetail';
import PageNotFound from '../components/PageNotFound/pageNotFound';

const appRouter = () => {
  return (
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/movie/:imdbID' Component={MovieDetail}/>
        <Route path='*' Component={PageNotFound}/>
      </Routes>
  );
}

export default appRouter
