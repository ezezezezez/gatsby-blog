// const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('./src/templates/blogTemplate.js')
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug
      }
    })
  })
}
