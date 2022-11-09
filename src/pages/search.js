import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { getSearchUrl } from '../utils/helperMethods';
import SearchComponent from '../component/Bussiness/SearchComponent/SearchComponent';
import Layout from '../component/UI/Layout/Layout';

const Search = () => {
    let { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const searchQuery = queryParams.get('query');
    const [searchData, setSearchData] = useState([]);
    const [totalResult, setTotalResults] = useState();


    const getSearchValues = useCallback(() => {
        const fetchSearchData = async () => {
            const searchUrl = getSearchUrl(searchQuery);
            const resp = await axios.get(searchUrl);
            const { data } = resp;
            setSearchData(data.results);
            setTotalResults(data.total_results)
        }
        return fetchSearchData();
    }, [searchQuery]);

    useEffect(() => {
        getSearchValues();
    }, [getSearchValues]);

    return (
        <Layout>
            <div className='search-page-container'>
                <h2>Showing Results for: {searchQuery.toString()}</h2>
                <h5>Total found: {totalResult}</h5>
                <SearchComponent searchData={searchData} />
            </div>

        </Layout>
    )
}

export default Search
