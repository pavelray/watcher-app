import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getViewAllUrl } from '../../../utils/apiUtills';
import { getGenre } from '../../../utils/helperMethods';
import { MovieCard } from '../MovieCard/MovieCard';
import './ViewAll.scss';


const ViewAllContainer = () => {
    let { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const dataType = queryParams.get('dataType');
    const type = queryParams.get('type');

    const [pageData, setPageData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    const getViewAllMovies = async (pageNo) => {
        const url = getViewAllUrl(dataType, type, pageNo);
        const resp = await axios.get(
            url
        );
        const { data } = resp;
        return data.results;
    }

    useEffect(() => {
        const fetchPageData = async () => {
            const data = await getViewAllMovies(currentPage);
            setPageData([...data]);

        };
        fetchPageData();
    }, []);

    const loadMoreData = async () => {
        const pageNo = currentPage + 1;
        setCurrentPage(pageNo);
        const data = await getViewAllMovies(pageNo);
        setPageData([...pageData, ...data]);
    }

    return (
        <div className='view-all-container'>
            <h2>Showing Results for: {dataType.toString()}</h2>
            <div className='view-all-wrapper'>
                {pageData.map((tr) => {
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
                                type={tr.media_type || type}
                            />
                        );
                    }
                    return <></>
                })}
            </div>

            <button onClick={loadMoreData}>Load More</button>
        </div>
    )
}

export default ViewAllContainer
