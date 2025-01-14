/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.fiziokaspars.lv', // Your website URL
    generateRobotsTxt: true, // Generates a robots.txt file
    changefreq: 'daily', // Frequency of page updates
    priority: 0.7, // Priority for the pages
    sitemapSize: 5000, // Max entries per sitemap file
    exclude: ['/404'], // Pages to exclude
  };
  