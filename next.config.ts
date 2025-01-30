import { NextConfig } from 'next'

const config: NextConfig = {
  async redirects() {
    return [
      // Redirect from non-www HTTP to HTTPS www
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
      // Redirect from non-www HTTPS to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'fiziokaspars.lv',
          },
        ],
        permanent: true,
        destination: 'https://www.fiziokaspars.lv/:path*',
      }
    ]
  }
}

export default config