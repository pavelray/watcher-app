import React from 'react';
import './Pagination.scss';

const Pagination = ({ totalPage, currentPage=1, pages }) => {

    return (
        <div class='pagination'>
            <ul>
                <li onClick={handleClick}>
                    < </li>
                {
                    pages.map((page, index) => {
                        if (index > 4 && totalPage !== index) {
                            return (
                                <li><span>...</span></li>
                            )
                        }
                        return (
                            <li onClick={handleClick} className={index === currentPage ? 'active': ''}><span>{index + 1}</span></li>
                        )
                    })
                } 
                <li onClick={handleClick}>></li>
            </ul>
        </div>
    )
}

export default Pagination
