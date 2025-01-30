/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.fiziokaspars.lv', // Your website's base URL
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 5000, // Split sitemap if you have many pages
    exclude: ['/404', '/server-error'], // Exclude unnecessary routes
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };
  