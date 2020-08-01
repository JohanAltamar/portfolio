module.exports = {
  siteMetadata: {
    title: `Johan Altamar | Web Developer`,
    description: `Web development and embedded systems in the same place.`,
    author: `Johan Altamar`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Johan Dev`,
        short_name: `Johan Dev`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
