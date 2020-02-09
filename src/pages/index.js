import React from 'react'
/*
  client-side routing use Link component,
  external link like http://google.com use anchor element
*/
import Layout from '../components/Layout'
import Head from '../components/Head'

const Index = () => {
  return (
    <Layout>
      <Head title='Home' />
      <p>Hello world!</p>
    </Layout>
  )
}

export default Index
