import React from 'react'
import { useRouteError } from 'react-router-dom';
import Layout from '../component/UI/Layout/Layout'
import { ERROR_MESSAGE } from '../utils/constants';
import '../styles/errorPage.scss';

const ErrorPage = (props) => {
    let error = useRouteError();

    const errorMessage = error.status === 404 ? ERROR_MESSAGE.PAGE_NOT_FOUND : ERROR_MESSAGE.SERVER_ERROR;
    return (
        <Layout>
            <div className='error'>
                <div className='error-message'>
                    {errorMessage}
                </div>

            </div>
        </Layout>
    )
}

export default ErrorPage
