import React from 'react';
import { getGenre } from '../../../utils/helperMethods';
import { MovieCard } from '../MovieCard/MovieCard';
import './SearchComponent.scss'

const SearchComponent = ({ searchData }) => {
  return (
    <div className='search-result-wrapper'>
      {searchData.map((tr) => {
        if (tr.media_type !== 'person') {
          const genre = getGenre(tr, tr.media_type);
          const voteAvg = tr.vote_average.toFixed(2);
          return (
            <MovieCard
              key={tr.id}
              id={tr.id}
              title={tr.title || tr.name}
              poster={tr.poster_path}
              releaseDate={tr.release_date || tr.first_air_date}
              ratings={voteAvg}
              genre={genre}
              type={tr.media_type}
            />
          );
        }
        return <></>
      })}
    </div>
  )
}

export default SearchComponent
