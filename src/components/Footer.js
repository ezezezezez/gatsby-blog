import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  const gql = graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `
  const data = useStaticQuery(gql)
  return (
    <footer className={styles.footer}>
      <p>Created by {data.site.siteMetadata.author}. © 2020</p>
    </footer>
  )
}

export default Footer
