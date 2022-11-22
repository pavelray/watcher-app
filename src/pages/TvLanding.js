import React from 'react'
import Popular from '../component/Bussiness/Popular/Popular'
import TopRated from '../component/Bussiness/TopRated/TopRated'
import Trending from '../component/Bussiness/TrendingMovies/TrendingMovies'
import Layout from '../component/UI/Layout/Layout'
import { MEDIA_TYPE } from '../utils/constants'

const TvLanding = () => {
    return (
        <Layout>
            <TopRated title="Top Rated" type={MEDIA_TYPE.TV_SERIES} />
            <Popular title="Popular" type={MEDIA_TYPE.TV_SERIES} />
            <Trending title="Trending" type={MEDIA_TYPE.TV_SERIES} />
        </Layout>
    )
}

export default TvLanding
