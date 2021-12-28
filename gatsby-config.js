module.exports = {
    plugins: [
        `gatsby-plugin-postcss`, `gatsby-plugin-fontawesome-css`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                tailwind: true,
            },
        },
    ],
}