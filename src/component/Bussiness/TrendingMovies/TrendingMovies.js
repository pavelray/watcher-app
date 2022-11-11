/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./TrendingMovies.scss";
import { getTrendingDataAPIUrl } from "../../../utils/apiUtills";
import CardSlider from "../../UI/CardCarousel/CardSlider";

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
        <CardSlider data={trending} type={type} title={title} />
    );
};

export default Trending;