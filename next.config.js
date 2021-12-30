module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        images: {
            domains: ["yesno.wtf"]
        },
        future: { webpack5: true }
    }
    return nextConfig
  }