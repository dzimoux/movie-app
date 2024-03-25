import React from 'react';
import {SearchedMoviesInterface} from "../../interfaces/SearchedMoviesInterface";
import {Genres} from "../../interfaces/GenreListInterface";


interface MyComponentProps {
    requestedsearchresults: SearchedMoviesInterface | null;
}
const SearchedMovieResultDetails: React.FC<MyComponentProps> = ({requestedsearchresults}) => {

    return (
        <div>
            {}
        </div>
    );
};

export {SearchedMovieResultDetails};