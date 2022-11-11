import React from 'react'
import NowPlaying from '../component/Bussiness/NowPlaying/NowPlaying'
import Popular from '../component/Bussiness/Popular/Popular'
import TopRated from '../component/Bussiness/TopRated/TopRated'
import Trending from '../component/Bussiness/TrendingMovies/TrendingMovies'
import UpcomingMovies from '../component/Bussiness/UpcomingMovies/UpcomingMovies'
import Layout from '../component/UI/Layout/Layout'
import { MEDIA_TYPE } from '../utils/constants'

const MovieLanding = () => {
    return (
        <Layout>
            <TopRated title="Top Rated" type={MEDIA_TYPE.MOVIE} />
            <Popular title="Popular" type={MEDIA_TYPE.MOVIE} />
            <Trending title="Trending" type={MEDIA_TYPE.MOVIE} />
            <NowPlaying title="In Theatres" type={MEDIA_TYPE.MOVIE} />
            <UpcomingMovies title="Upcoming In Theatres" type={MEDIA_TYPE.MOVIE} />
        </Layout>
    )
}

export default MovieLanding
