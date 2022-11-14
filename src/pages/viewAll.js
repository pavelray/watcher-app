import React from 'react'
import ViewAllContainer from '../component/Bussiness/ViewAll/ViewAll'
import Layout from '../component/UI/Layout/Layout'

const ViewAll = (props) => {
  return (
    <Layout>
        <ViewAllContainer {...props} />
    </Layout>
  )
}

export default ViewAll
