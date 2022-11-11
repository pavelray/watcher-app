import React from 'react'
import { getGenre } from '../../../utils/helperMethods';
import { MovieCard } from '../../Bussiness/MovieCard/MovieCard';
import './CardSlider.scss';

const CardSlider = ({ title, data, type }) => {
    return (
        <div className="slide-container">
            <div className="slide-container__title--wrapper">
                <div className="slide-container__title">{title}</div>
                <div className="slide-container__sub">view all</div>
            </div>
            <div className="slide-container__scroll-wrapper">
                <div className="slide-container__content">
                    {data.map((tr) => {
                        const genre = getGenre(tr, type);
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
                                type={type}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CardSlider
