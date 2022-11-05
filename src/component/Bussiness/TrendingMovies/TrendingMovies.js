/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { MovieCard } from "../MovieCard/MovieCard";
import "./TrendingMovies.scss";
import { MEDIA_TYPE, MOVIE_GENRE, TV_GENRE } from "../../../utils/constants";
import { getTrendingDataAPIUrl } from "../../../utils/helperMethods";

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

    const getGenre = (media) => {
        if (type === MEDIA_TYPE.MOVIE) {
            return MOVIE_GENRE.filter((element) =>
                media.genre_ids.includes(element.id)
            )
                .map((g) => g.name)
                .toString();
        }

        return TV_GENRE.filter((element) =>
            media.genre_ids.includes(element.id)
        )
            .map((g) => g.name)
            .toString();
    };

    return (
        <div className="slide-container">
            <div className="slide-container__title">{title}</div>
            <div className="slide-container__scroll-wrapper">
                <div className="slide-container__content">
                    {trending.map((tr) => {
                        const genre = getGenre(tr);
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
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Trending;