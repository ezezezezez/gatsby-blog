import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types'
import styles from '../styles/Layout.module.css'
import '../styles/GlobalStyle.module.css'

const Layout = (props) => {
  const { children } = props
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
