import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {MoviesHomePage} from "../pages/MoviesHomePage";
import {MovieDetails} from "../components/Movie/MovieDetails";
import {GenresListPage} from "../pages/GenresListPage";
import {OneGenrePage} from "../pages/OneGenrePage";
import {SearchPage} from "../pages/SearchPage";

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
                path:`/movies/movie_details/:id`, element:<MovieDetails/>
            },
            {
                path:'/genres', element:<GenresListPage/>
            },
            {
                path:`/one_genre_page/:id`,element:<OneGenrePage/>
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