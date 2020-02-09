/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  pathPrefix: '/gatsby-blog',
  siteMetadata: {
    title: 'An example blog by gatsby',
    author: 'Kevin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/posts`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              // showCaptions: true,
              // styles will be applied to wrong wrapper when showCaptions is set to true
              wrapperStyle: 'margin-left: 0;'
            }
          }
        ]
      }
    }
  ]
}
