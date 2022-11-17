import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getViewAllUrl } from "../../../utils/apiUtills";
import { getGenre } from "../../../utils/helperMethods";
import { MovieCard } from "../MovieCard/MovieCard";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import "./ViewAll.scss";

const ViewAllContainer = ({ dataType, type, page }) => {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState([]);
  const [totalResult, setTotalResults] = useState();
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState();

  const getViewAllMovies = useCallback(() => {
    const fetchData = async () => {
      const url = getViewAllUrl(dataType, type, page);
      const resp = await axios.get(url);
      const { data } = resp;
      setTotalResults(data.total_results);
      setTotalPages(data.total_pages);
      setCurrentPage(data.page);
      return data.results;
    };
    return fetchData();
  }, [dataType, page, type]);

  useEffect(() => {
    const fetchPageData = async () => {
      const data = await getViewAllMovies();
      setPageData([...data]);
    };
    fetchPageData();
  }, [getViewAllMovies, page]);

  const handlePageClick = (page) => {
    navigate(`/viewAll?dataType=${dataType}&type=${type}&page=${page}`);
  };

  return (
    <div className="view-all-container">
      <h2>Showing Results for: {dataType}</h2>
      <h5>Total Found: {totalResult}</h5>
      <PaginationComponent
        totalPages={totalPages}
        selectedPage={currentPage}
        onPageClick={handlePageClick}
      >
        <div className="view-all-wrapper">
          {pageData.map((tr) => {
            if (tr.media_type !== "person") {
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
            return <></>;
          })}
        </div>
      </PaginationComponent>
    </div>
  );
};

export default ViewAllContainer;
