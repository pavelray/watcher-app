/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { getSimilarDataAPIUrl } from "../../../utils/apiUtills";

import "./SimilarMovies.scss";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import { COLLECTION_TYPE } from "../../../utils/constants";


const SimilarMovies = ({ title, type, id }) => {
    const [similar, setSimilar] = useState([]);

    const getSimilarValues = useCallback(() => {
        const fetchSimilarMovies = async (id) => {
            const url = getSimilarDataAPIUrl(type, id)
            const resp = await axios.get(
                url
            );
            const { data } = resp;
            setSimilar(data.results);
        };

        fetchSimilarMovies(id);
    }, [id]);

    useEffect(() => { getSimilarValues(id); window.scrollTo(0, 0); }, [id]);

    
    return (
        <CardSlider data={similar} type={type} title={title}  dataType={COLLECTION_TYPE.SIMILAR} />
    );
};

export default SimilarMovies;