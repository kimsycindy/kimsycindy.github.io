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

  // const allMarkdown = await graphql(`
  //   {
  //     allMarkdownRemark(limit: 1000) {
  //       edges {
  //         node {
  //           fields {
  //             layout
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (allMarkdown.errors) {
  //   console.error(allMarkdown.errors) // eslint-disable-line
  //   throw new Error(allMarkdown.errors)
  // }

  // allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   const { slug, layout } = node.fields

  //   createPage({
  //     path: slug,
  //     // This will automatically resolve the template to a corresponding
  //     // `layout` frontmatter in the Markdown.
  //     //
  //     // Feel free to set any `layout` as you'd like in the frontmatter, as
  //     // long as the corresponding template file exists in src/templates.
  //     // If no template is set, it will fall back to the default `page`
  //     // template.
  //     //
  //     // Note that the template has to exist first, or else the build will fail.
  //     component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
  //     context: {
  //       // Data passed to context is available in page queries as GraphQL variables.
  //       slug,
  //     },
  //   })
  // })
}
