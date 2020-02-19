import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, SET_LOADING } from "./types";
import axios from "axios";

import { APIKey } from "./../ApiKey";

export const searchMovie = (text) => (dipatch) => {
    dipatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = (text) => (dispatch) => {
    axios
        .get(`http://www.omdbapi.com/?apiKey=${APIKey}&s=${text}`)
        .then((response) => {
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
    axios
        .get(`https://www.omdbapi.com/?apiKey=${APIKey}&i=${id}`)
        .then((response) =>
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            })
        )
        .catch((err) => console.log(err));
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
