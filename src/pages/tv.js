import React from 'react'
import { useParams } from 'react-router-dom';
import MovieDetails from '../component/Bussiness/MovieDetails/MovieDetails'
import { MEDIA_TYPE } from '../utils/constants'

const TvShow = () => {
    let { id } = useParams();
    return (
        <MovieDetails type={MEDIA_TYPE.TV_SERIES} id={id} />
    )
}

export default TvShow
