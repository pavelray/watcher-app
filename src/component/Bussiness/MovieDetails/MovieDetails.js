/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Layout from "../../UI/Layout/Layout";
import {
  getMovieCastDetailsDataAPIUrl,
  getMovieDetailsDataAPIUrl,
} from "../../../utils/apiUtills";
import {
  API_IMAGE_URL,
  MEDIA_TYPE,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import Avatar from "../../UI/Avater/Avatar";
import WatchProvider from "../WatchProvider/WatchProvider";

import "./MovieDetails.scss";
import SimilarMovies from "../SimilarMovies/SimilarMovies";
import MovieVideos from "../MovieVideos/MovieVideos";

const movieDetailsStyle = {
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const MovieDetails = ({ type = MEDIA_TYPE.MOVIE, id }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCast, setMovieCast] = useState([]);
  const [movieCrew, setMovieCrew] = useState([]);
  const [totalRuntime, setTotalRunTime] = useState("");

  const getMovieDetails = useCallback(() => {
    const fetchMovieDetails = async (id) => {
      const url = getMovieDetailsDataAPIUrl(type, id);
      const resp = await axios.get(url);
      const { data } = resp;
      const { runtime } = data;
      const hours = Math.floor(runtime / 60);
      const minutes = runtime % 60;

      setTotalRunTime(`${hours}h ${minutes}m`);
      setMovieDetails(data);
    };
    fetchMovieDetails(id);
  }, [id]);

  const getMovieCast = useCallback(() => {
    const fetchMovieCast = async (id) => {
      const url = getMovieCastDetailsDataAPIUrl(type, id);
      const resp = await axios.get(url);
      const { data } = resp;
      const castData = data.cast.filter((cast) => cast.profile_path !== null);
      const crewData = data.crew.filter(
        (crew) => crew.job === "Director" || crew.job === "Producer"
      );
      setMovieCast(castData);
      setMovieCrew(crewData);
    };
    fetchMovieCast(id);
  }, [id]);

  useEffect(() => {
    getMovieDetails(id);
    getMovieCast(id);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Layout wide>
      <div
        className="movie-details-container"
        style={{
          ...movieDetailsStyle,
          backgroundImage: `url(${API_IMAGE_URL}/original/${movieDetails?.backdrop_path})`,
        }}
      >
        <div className="movie-details-container__main">
          <div className="movie-details-container__main-content">
            <div className="column">
              <div className="title">
                {type === MEDIA_TYPE.MOVIE
                  ? movieDetails.title
                  : movieDetails.name}
              </div>
              <div className="tagline">{movieDetails.tagline}</div>
              <div className="stats">
                <div>{movieDetails.vote_average?.toFixed(2)}</div>
                <div>/{movieDetails.vote_count}</div>
                <div className="stats__genre">
                  {movieDetails?.genres?.map((x) => x.name).join(", ")}
                </div>
              </div>
              <div className="stats">
                <div className="stats__other">{movieDetails.status}</div>
                <div className="stats__other">
                  &bull; {new Date(movieDetails.release_date).getFullYear()}
                </div>
                <div className="stats__other">&bull; {totalRuntime}</div>
              </div>
              <div className="description">{movieDetails.overview}</div>
              <MovieVideos id={id} type={type} />
              <div className="provider">
                <WatchProvider id={id} type={type} />
              </div>
            </div>
            <div className="column">
              <div className="cast-wrapper">
                <div className="cast-title">Cast</div>
                <div className="cast">
                  {movieCast?.slice(0, 6).map((cast) => (
                    <Avatar
                      imageSrc={`${API_IMAGE_URL}/w154/${cast.profile_path}`}
                      text={cast.name}
                      key={cast.id}
                    />
                  ))}
                </div>
              </div>
              <div className="cast-wrapper">
                <div className="cast-title">Crew</div>
                <div className="cast">
                  {movieCrew?.map((crew) => {
                    const { profile_path } = crew;

                    const avatarImg =
                      profile_path && profile_path !== null
                        ? `${API_IMAGE_URL}/w154/${crew.profile_path}`
                        : NO_IMG_PLACEHOLDER_USER;
                    return (
                        <Avatar
                          imageSrc={avatarImg}
                          text={`${crew.job} ${crew.name}`}
                          key={crew.id}
                        />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="similar-movies">
        <SimilarMovies title="Similar" type={type} id={id} />
      </div>
    </Layout>
  );
};

export default MovieDetails;
