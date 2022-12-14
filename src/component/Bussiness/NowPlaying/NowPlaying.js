/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NowPlaying.scss";
import { getNowPlayingMoviesUrl } from "../../../utils/apiUtills";
import CardSlider from "../../UI/CardCarousel/CardSlider";
import { COLLECTION_TYPE } from "../../../utils/constants";

const NowPlaying = ({ title, type }) => {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      const url = getNowPlayingMoviesUrl(type);
      const resp = await axios.get(url);
      const { data } = resp;
      setNowPlaying(data.results);
    };

    fetchNowPlayingMovies();
  }, []);

  return (
    <CardSlider
      data={nowPlaying}
      type={type}
      title={title}
      dataType={COLLECTION_TYPE.NOW_PLAYING}
    />
  );
};

export default NowPlaying;
