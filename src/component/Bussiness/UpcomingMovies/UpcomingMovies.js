/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UpcomingMovies.scss";
import { getUpcomingMoviesUrl } from "../../../utils/apiUtills";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import { COLLECTION_TYPE } from "../../../utils/constants";

const UpcomingMovies = ({ title, type }) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const url = getUpcomingMoviesUrl(type);
      const resp = await axios.get(url);
      const { data } = resp;
      setUpcomingMovies(data.results);
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <CardSlider
      data={upcomingMovies}
      type={type}
      title={title}
      dataType={COLLECTION_TYPE.UP_COMING}
    />
  );
};

export default UpcomingMovies;
