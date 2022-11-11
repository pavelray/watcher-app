/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./NowPlaying.scss";
import { getNowPlayingMoviesUrl } from "../../../utils/apiUtills";
import CardSlider from "../../UI/CardCarousel/CardSlider";

const NowPlaying = ({ title, type }) => {
    const [nowPlaying, setNowPlaying] = useState([]);

    const getNowPlayingValues = useCallback(() => {
        const fetchNowPlayingMovies = async () => {
            const url = getNowPlayingMoviesUrl(type)
            const resp = await axios.get(
                url
            );
            const { data } = resp;
            setNowPlaying(data.results);
        };

        fetchNowPlayingMovies();
    }, []);

    useEffect(() => getNowPlayingValues, []);


    return (
        <CardSlider data={nowPlaying} type={type} title={title} />
    );
};

export default NowPlaying;