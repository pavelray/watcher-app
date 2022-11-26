/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TopRated.scss";
import { getTopRatedMoviesUrl } from "../../../utils/apiUtills";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import { COLLECTION_TYPE } from "../../../utils/constants";

const TopRated = ({ title, type }) => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const url = getTopRatedMoviesUrl(type);
      const resp = await axios.get(url);
      const { data } = resp;
      setTopRated(data.results);
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <CardSlider
      data={topRated}
      type={type}
      title={title}
      dataType={COLLECTION_TYPE.TOP_RATED}
    />
  );
};

export default TopRated;
