import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Layout from '../components/Layout'
import Head from '../components/Head'

const Template = (props) => {
  const { data } = props
  const { contentfulBlogPost } = data
  const { title, publishedDate, body: { json } } = contentfulBlogPost
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
        <img src={fields.file['zh-Hans-HK'].url} alt={fields.title['zh-Hans-HK']} />
    }
  }
  return (
    <Layout>
      <Head title={title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{title}</h1>
          <h6>{publishedDate}</h6>
          <hr/>
          <div style={{ fontSize: '0.8rem' }}>{documentToReactComponents(json, options)}</div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost (slug: { eq: $slug }) {
      title
      publishedDate (formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

Template.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.shape({
      title: PropTypes.string,
      publishedDate: PropTypes.string,
      body: PropTypes.shape({
        json: PropTypes.shape({})
      })
    })
  })
}

export default Template
