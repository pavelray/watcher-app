/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./UpcomingMovies.scss";
import { getUpcomingMoviesUrl } from "../../../utils/apiUtills";
import CardSlider from "../../UI/CardCarousel/CardSlider";

const UpcomingMovies = ({ title, type }) => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const getUpcomingMoviesValues = useCallback(() => {
        const fetchUpcomingMovies = async () => {
            const url = getUpcomingMoviesUrl(type)
            const resp = await axios.get(
                url
            );
            const { data } = resp;
            setUpcomingMovies(data.results);
        };

        fetchUpcomingMovies();
    }, []);

    useEffect(() => getUpcomingMoviesValues, []);


    return (
        <CardSlider data={upcomingMovies} type={type} title={title} />
    );
};

export default UpcomingMovies;