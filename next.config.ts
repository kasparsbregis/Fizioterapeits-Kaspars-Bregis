import { NextConfig } from 'next'

const config: NextConfig = {
  async redirects() {
    return [
      // Redirect from non-www HTTP to HTTPS www
      {
        source: 'http://fiziokaspars.lv/:path*', // Add :path* to capture the whole path
        destination: 'https://www.fiziokaspars.lv/:path*',
        permanent: true,
      },
      // Redirect from non-www HTTPS to www
      {
        source: 'https://fiziokaspars.lv/:path*',
        destination: 'https://www.fiziokaspars.lv/:path*',
        permanent: true,
      }
    ]
  }
}

export default config
