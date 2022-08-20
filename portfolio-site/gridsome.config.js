// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jake Fauvel - Portfolio Site',
  siteUrl: 'https://www.jakefauvel.com/',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          '/*': {
            changefreq: 'monthly',
            priority: 0.5
          }
        }
      }
    }
  ]
};
