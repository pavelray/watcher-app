/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Pagination.scss";

const Pagination = ({
  totalPages = 10,
  selectedPage = 1,
  pagesToShow = 4,
  onPageClick,
}) => {
  const [pageData, setPageData] = useState([]);
  const pages = Array(totalPages)
    .fill(0)
    .map((_, i) => 1 * i + 1);

  const getPageArray = () => {
    if (selectedPage < pagesToShow) {
      return [...pages.slice(0, pagesToShow - 1), "..", ...pages.slice(-1)];
    }
    if (
      selectedPage >= pagesToShow &&
      selectedPage <= totalPages - pagesToShow
    ) {
      return [
        ...pages.slice(0, 1),
        "..",
        ...pages.slice(
          selectedPage - pagesToShow / 2,
          selectedPage + pagesToShow / 2
        ),
        "..",
        ...pages.slice(-1),
      ];
    }
    if (selectedPage > totalPages - pagesToShow) {
      return [
        ...pages.slice(0, 1),
        "..",
        ...pages.slice(totalPages - pagesToShow),
      ];
    }
  };

  const handleClick = (event) => {
    const { textContent } = event.target;
    console.log(textContent);
    onPageClick(+textContent);
  };

  useEffect(() => {
    const result = getPageArray();
    setPageData(result);
  }, [totalPages]);

  return (
    <div className="pagination">
      <ul>
        <li onClick={handleClick} value="<">
          &lt;
        </li>
        {pageData.map((page, index) => {
          return (
            <li
              onClick={handleClick}
              className={page === selectedPage ? "active" : ""}
            >
              <span onClick={handleClick} value={page}>
                {page}
              </span>
            </li>
          );
        })}
        <li onClick={handleClick} value=">">
          &gt;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
