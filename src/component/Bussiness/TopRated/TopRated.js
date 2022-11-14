/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./TopRated.scss";
import { getTopRatedMoviesUrl } from "../../../utils/apiUtills";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import { COLLECTION_TYPE } from "../../../utils/constants";

export const TopRatedContext = React.createContext();

const TopRated = ({ title, type }) => {
    const [topRated, setTopRated] = useState([]);
    const getTopRatedValues = useCallback(() => {
        const fetchTopRatedMovies = async () => {
            const url = getTopRatedMoviesUrl(type)
            const resp = await axios.get(
                url
            );
            const { data } = resp;
            setTopRated(data.results);
        };

        fetchTopRatedMovies();
    }, []);

    useEffect(() => getTopRatedValues, []);


    return (
        <TopRatedContext.Provider data={topRated}>
            <CardSlider data={topRated} type={type} title={title} dataType={COLLECTION_TYPE.TOP_RATED} />
        </TopRatedContext.Provider>
    );
};

export default TopRated;