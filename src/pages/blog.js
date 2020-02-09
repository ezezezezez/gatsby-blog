import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styles from '../styles/blog.module.css'
import Head from '../components/Head'

const Blog = () => {
  const gql = graphql`
    query {
      allContentfulBlogPost (
       sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate (formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `
  const data = useStaticQuery(gql)
  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blogs</h1>
      <ul className={styles.blogList}>
        {data.allContentfulBlogPost.edges.map(({ node }, idx) => (
          <li className={styles.blogListItem} key={idx}>
            <Link to={`/blog/${node.slug}`}>
              <h2 style={{ margin: 0 }} >{node.title}</h2>
              <p className={styles.date}>{node.publishedDate}</p>
            </Link>
          </li>))}
      </ul>
    </Layout>
  )
}

export default Blog
