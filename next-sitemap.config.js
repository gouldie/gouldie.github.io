/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://matthewgould.dev',
  generateIndexSitemap: false,
  generateRobotsTxt: true, // (optional)
  exclude: ['/quizapp/privacy-policy']
  // ...other options
}
