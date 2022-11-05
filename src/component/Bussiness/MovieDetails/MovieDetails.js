/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

import Layout from '../../UI/Layout/Layout';
import { getMovieCastDetailsDataAPIUrl, getMovieDetailsDataAPIUrl } from '../../../utils/helperMethods';
import { API_IMAGE_URL, MEDIA_TYPE } from '../../../utils/constants';
import Avatar from '../../UI/Avater/Avatar';
import WatchProvider from '../WatchProvider/WatchProvider';

import "./MovieDetails.scss";

const MovieDetails = ({ type = MEDIA_TYPE.MOVIE, id }) => {
 
  const [movieDetails, setMovieDetails] = useState({})
  const [movieCast, setMovieCast] = useState([])
  const [totalRuntime, setTotalRunTime] = useState('');

  const getMovieDetails = useCallback(() => {
    const fetchMovieDetails = async () => {
      const url = getMovieDetailsDataAPIUrl(type, id)
      const resp = await axios.get(
        url
      );
      const { data } = resp;
      document.querySelector('.movie-details-container').style.backgroundImage = `url(${API_IMAGE_URL}/original/${data.backdrop_path})`;

      const { runtime } = data;
      const hours = Math.floor(runtime / 60);
      const minutes = runtime % 60;

      setTotalRunTime(`${hours}h ${minutes}m`);
      setMovieDetails(data);
    }
    fetchMovieDetails();
  }, []);

  const getMovieCast = useCallback(() => {
    const fetchMovieCast = async () => {
      const url = getMovieCastDetailsDataAPIUrl(type, id)
      const resp = await axios.get(
        url
      );
      const { data } = resp;
      const castData = data.cast.filter((cast) => cast.profile_path !== null)
      setMovieCast(castData);
    }
    fetchMovieCast();
  }, []);

  useEffect(() => {
    getMovieDetails();
    getMovieCast();
  }, []);


  return (
    <div>
      <Layout wide>
        <div className='movie-details-container'>
          <div className='movie-details-container__main'>
            <div className='movie-details-container__main-content'>
              <div className='column'>
                <div className='title'>{type === MEDIA_TYPE.MOVIE ? movieDetails.title : movieDetails.name}</div>
                <div className='tagline'>{movieDetails.tagline}</div>
                <div className='stats'>
                  <div>{movieDetails.vote_average?.toFixed(2)}</div>
                  <div>/{movieDetails.vote_count}</div>
                  <div className="stats__genre">
                    {movieDetails?.genres?.map((x) => x.name).join(', ')}
                  </div>
                </div>
                <div className='stats'>
                  <div className="stats__other">{movieDetails.status}</div>
                  <div className="stats__other">&bull; {new Date(movieDetails.release_date).getFullYear()}</div>
                  <div className="stats__other">&bull; {totalRuntime}</div>
                </div>
                <div className='description'>{movieDetails.overview}</div>
                <div className='provider'>
                  <WatchProvider id={id} />
                </div>
              </div>
              <div className='column'>
                <div className='cast-wrapper'>
                  <div className='cast-title'>Cast</div>
                  <div className='cast'>
                    {
                      movieCast?.slice(0, 6).map((cast) => (
                        <Avatar imageSrc={`${API_IMAGE_URL}/w154/${cast.profile_path}`} text={cast.name} key={cast.id} />
                      ))
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default MovieDetails
