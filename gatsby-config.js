require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Cindy Kim',
    description: `Cindy Kim's personal website`,
    keywords: 'cindy, kim, portfolio, artist, writing, art, personal',
    siteUrl: 'https://cindy.kim',
    author: {
      name: 'Cindy Kim',
      url: 'https://cindy.kim',
      email: 'hello@cindy.kim',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'o3gvfk02nk2l',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://cindy.kim',
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
}

if (process.env.NODE_ENV === 'development') {
  module.exports.plugins.push('gatsby-plugin-graphql-codegen')
}
