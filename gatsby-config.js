/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
//hello this zis a comment
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
      
    },
      `gatsby-plugin-sharp`, 
      `gatsby-transformer-sharp`,
      `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions:[`.md`, `.mdx`],
        gatsbyRemarkPlugins:[
          {
            resolve:`gatsby-remark-images`,
            options:{
              maxWidth: 1200
            },
            
          },
          
        ],
        
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `reoboto mono`,
          `muli\:400,400i,700,700i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
}
