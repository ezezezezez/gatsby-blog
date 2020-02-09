import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from '../styles/Header.module.css'

const Header = () => {
  const gql = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  const data = useStaticQuery(gql)
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {data.site.siteMetadata.title}
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to='/'>Home</Link></li>
          <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} partiallyActive={true} to='/blog'>Blog</Link></li>
          <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} partiallyActive={true} to='/about'>About</Link></li>
          <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} partiallyActive={true} to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
