/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { getPopularMoviesUrl } from '../../../utils/apiUtills';
import { COLLECTION_TYPE } from '../../../utils/constants';
import CardSlider from '../../UI/CardCarousel/CardSlider';

const Popular = ({type, title}) => {
    const [popularMovies, setPopularMovies] = useState([]);

    const getPopularMoviesValues = useCallback(() => {
        const fetchPopularMoviesMovies = async () => {
            const url = getPopularMoviesUrl(type)
            const resp = await axios.get(
                url
            );
            const { data } = resp;
            setPopularMovies(data.results);
        };

        fetchPopularMoviesMovies();
    }, []);

    useEffect(() => getPopularMoviesValues, []);


    return (
        <CardSlider data={popularMovies} type={type} title={title} dataType={COLLECTION_TYPE.POPULAR} />
    );
}

export default Popular
