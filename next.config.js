/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['avatars.githubusercontent.com', 'www.smartwash.app.br'],
      },
    compiler: {
        styledComponents: true
    }
}

module.exports = nextConfig
