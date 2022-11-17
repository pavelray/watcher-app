import React from 'react'
import Trending from '../component/Bussiness/TrendingMovies/TrendingMovies'
import Layout from '../component/UI/Layout/Layout'
import { COLLECTION_TYPE, MEDIA_TYPE } from '../utils/constants'

const Home = () => {
  return (
      <Layout>
        <Trending title="Trending Movies" type={MEDIA_TYPE.MOVIE} dataType={COLLECTION_TYPE.TRENDING} />
        <Trending title="Trending Tv Series" type={MEDIA_TYPE.TV_SERIES} dataType={COLLECTION_TYPE.TRENDING} />
      </Layout>
  )
}

export default Home
