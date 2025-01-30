import { NextConfig } from 'next'

const config: NextConfig = {
  async redirects() {
    return [
      // Redirect from non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'fiziokaspars.lv',
          },
        ],
        destination: 'https://www.fiziokaspars.lv/:path*',
        permanent: true,
      },
      // Redirect from http://www to https://www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.fiziokaspars.lv',
          },
        ],
        destination: 'https://www.fiziokaspars.lv/:path*',
        permanent: true,
      }
    ]
  }
}

export default config