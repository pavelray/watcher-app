import React from "react";
import Pagination from "../../UI/Pagination/Pagination";
import './PaginationComponent.scss';

const PaginationComponent = ({ children, ...pageProps }) => {
  return (
    <div className="pagination-wrapper">
      <Pagination {...pageProps} />
      {children}
      <Pagination {...pageProps} />
    </div>
  );
};

export default PaginationComponent;
