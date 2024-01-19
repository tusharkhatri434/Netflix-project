import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TvShows from './TvShows';
import Browse from './Browse';
import Login from './Login';
import Home from './Home';
import NewAndPopular from './NewAndPopular';
import Movies from './Movies';
import Search from './Search';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />,
            children:[
                {
                    path:"/browse",
                    element:<Home />
                },
                {
                    path:"/browse/tvshows",
                    element:<TvShows />
                },
                {
                    path:"/browse/movies",
                    element:<Movies />
                },
                {
                    path:"/browse/new-and-popular",
                    element:<NewAndPopular />
                },
                {
                    path:"/browse/search",
                    element:<Search />
                },

            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body