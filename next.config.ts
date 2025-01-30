import { NextConfig } from 'next'

const config: NextConfig = {
  async redirects() {
    return [
      // Redirect from http://fiziokaspars.lv or https://fiziokaspars.lv to https://www.fiziokaspars.lv
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'fiziokaspars.lv',  // Target domain without www
          },
        ],
        destination: 'https://www.fiziokaspars.lv/:path*',  // Redirect to www with HTTPS
        permanent: true,  // Use 301 (permanent) redirect
      },
    ]
  },
}

export default config
