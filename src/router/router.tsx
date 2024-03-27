import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {MoviesHomePage} from "../pages/Movie/MoviesHomePage/MoviesHomePage";
import {MovieDetailsPage} from "../pages/Movie/MovieDetailsPage/MovieDetailsPage";
import {GenresListPage} from "../pages/Genre/GenresListPage";
import {OneGenrePage} from "../pages/Genre/OneGenrePage/OneGenrePage";
import {SearchPage} from "../pages/Search/SearchPage";



const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>,children:[
            {
                index:true,element:<Navigate to={'home_page'}/>
            },
            {
                path:'home_page', element:<MoviesHomePage/>
            },
            {
                path:`/movies/movie_details/:id`, element:<MovieDetailsPage/>
            },
            {
                path:'/genres', element:<GenresListPage/>
            },
            {
                path:`/one_genre_movies/:id`,element:<OneGenrePage/>
            },
            {
                path:'/search_bar', element:<SearchPage/>
            }
        ]
    }
])

export {
    router
}