/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { MovieCard } from "../MovieCard/MovieCard";
import "./TrendingMovies.scss";
import { getGenre, getTrendingDataAPIUrl } from "../../../utils/helperMethods";

const Trending = ({ title, type }) => {
    const [trending, setTrending] = useState([]);

    const getTrendingValues = useCallback(() => {
        const fetchTrendingMovies = async () => {
            const url = getTrendingDataAPIUrl(type)
            const resp = await axios.get(
                url
            );
            const { data } = resp;
            setTrending(data.results);
        };

        fetchTrendingMovies();
    }, []);

    useEffect(() => getTrendingValues, []);


    return (
        <div className="slide-container">
            <div className="slide-container__title">{title}</div>
            <div className="slide-container__scroll-wrapper">
                <div className="slide-container__content">
                    {trending.map((tr) => {
                        const genre = getGenre(tr, type);
                        const voteAvg = tr.vote_average.toFixed(2);
                        return (
                            <MovieCard
                                key={tr.id}
                                id={tr.id}
                                title={tr.title || tr.name}
                                poster={tr.poster_path}
                                releaseDate={tr.release_date || tr.first_air_date}
                                ratings={voteAvg}
                                genre={genre}
                                type={type}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Trending;