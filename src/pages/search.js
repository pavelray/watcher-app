import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { getSearchUrl } from '../utils/apiUtills';
import SearchComponent from '../component/Bussiness/SearchComponent/SearchComponent';
import Layout from '../component/UI/Layout/Layout';
import Pagination from '../component/UI/Pagination/Pagination';

const Search = () => {
    let { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const searchQuery = queryParams.get('query');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchData, setSearchData] = useState([]);
    const [totalResult, setTotalResults] = useState();
    const [totalPages, setTotalPages] = useState();


    const getSearchValues = useCallback(() => {
        const fetchSearchData = async () => {
            const searchUrl = getSearchUrl(searchQuery);
            const resp = await axios.get(searchUrl);
            const { data } = resp;
            setSearchData(data.results);
            setTotalResults(data.total_results);
            setCurrentPage(data.page);
            setTotalPages(data.total_pages);
        }
        return fetchSearchData();
    }, [searchQuery]);

    useEffect(() => {
        getSearchValues();
    }, [getSearchValues]);


    const handlePageClick = (page) => {
        console.log(page);
        if (page === ">") {
            setCurrentPage(currentPage + 1);
        } else if (page === "<") {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(page);
        }
    };

    return (
        <Layout>
            <div className='search-page-container'>
                <h2>Showing Results for: {searchQuery.toString()}</h2>
                <h5>Total found: {totalResult}</h5>
                <Pagination totalPages={totalPages} pages={searchData} selectedPage={currentPage} onPageClick={handlePageClick } />
                <SearchComponent searchData={searchData} />
            </div>
            <Pagination totalPages={totalPages} pages={searchData} selectedPage={currentPage} onPageClick={handlePageClick } />
        </Layout>
    )
}

export default Search
