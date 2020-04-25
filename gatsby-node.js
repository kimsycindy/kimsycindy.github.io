const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('./src/templates/project.tsx')

    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors) // eslint-disable-line
          reject(result.errors)
        }

        const posts = result.data.allContentfulProject.edges
        posts.forEach(post => {
          createPage({
            path: `/projects/${post.node.slug}/`,
            component: projectTemplate,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
