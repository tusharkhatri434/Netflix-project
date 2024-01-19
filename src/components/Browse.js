import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import Footer from './Footer'
import Home from './Home'
import { Outlet } from 'react-router-dom'
const Browse = () => {
   
   useNowPlayingMovies();
   usePopularMovies();

  return (
    <div>
      <Header />
       <Outlet />
      <Footer />
    </div>
  )
}

export default Browse