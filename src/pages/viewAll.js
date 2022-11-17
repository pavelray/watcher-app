import React from 'react'
import { useLocation } from 'react-router-dom';
import ViewAllContainer from '../component/Bussiness/ViewAll/ViewAll'
import Layout from '../component/UI/Layout/Layout'

const ViewAll = () => {
  let { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const dataType = queryParams.get('dataType');
  const type = queryParams.get('type');
  const page = queryParams.get('page');

  return (
    <Layout>
        <ViewAllContainer dataType={dataType}  type={type} page={page}/>
    </Layout>
  )
}

export default ViewAll
