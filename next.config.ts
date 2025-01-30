import { NextConfig } from 'next'

const config: NextConfig = {
  async redirects() {
    return [
      // Redirect from non-www HTTP to HTTPS www
      {
        source: 'http://fiziokaspars.lv',
        destination: 'https://www.fiziokaspars.lv',
        permanent: true,
      },
      // Redirect from non-www HTTPS to www
      {
        source: 'https://fiziokaspars.lv',
        destination: 'https://www.fiziokaspars.lv',
        permanent: true,
      }
    ]
  }
}

export default config
