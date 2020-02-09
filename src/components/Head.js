import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

const Head = ({ title }) => {
  const gql = graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `
  const data = useStaticQuery(gql)
  return (
    <Helmet title={`${title || 'default title'} | ${data.site.siteMetadata.title}`} />
  )
}

Head.propTypes = {
  title: PropTypes.string
}

export default Head
