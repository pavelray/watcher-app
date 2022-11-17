import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchUrl } from "../utils/apiUtills";
import SearchComponent from "../component/Bussiness/SearchComponent/SearchComponent";
import Layout from "../component/UI/Layout/Layout";
import PaginationComponent from "../component/Bussiness/PaginationComponent/PaginationComponent";

const Search = () => {
  let { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);
  const searchQuery = queryParams.get("query");
  const page = queryParams.get("page") || 1;
  const [currentPage, setCurrentPage] = useState(page);
  const [searchData, setSearchData] = useState([]);
  const [totalResult, setTotalResults] = useState();
  const [totalPages, setTotalPages] = useState();

  const getSearchValues = useCallback(() => {
    const fetchSearchData = async () => {
      const searchUrl = getSearchUrl(searchQuery, page);
      const resp = await axios.get(searchUrl);
      const { data } = resp;
      setSearchData(data.results);
      setTotalResults(data.total_results);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    };
    return fetchSearchData();
  }, [searchQuery, page]);

  useEffect(() => {
    getSearchValues();
  }, [getSearchValues, page]);

  const handlePageClick = (page) => {
    navigate(`/search?query=${searchQuery}&page=${page}`);
  };

  return (
    <Layout>
      <div className="search-page-container">
        <h2>Showing Results for: {searchQuery.toString()}</h2>
        <h5>Total found: {totalResult}</h5>
        <PaginationComponent
          totalPages={totalPages}
          selectedPage={currentPage}
          onPageClick={handlePageClick}
        >
          <SearchComponent searchData={searchData} />
        </PaginationComponent>
      </div>
    </Layout>
  );
};

export default Search;
