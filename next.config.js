module.exports = ( phase, { defaultConfig } ) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
        reactStrictMode: false,
        staticPageGenerationTimeout: 120,
        images:
        {
            domains: [ process.env.HTTP_DOMAIN, "hannahsweetcakes.com" ]
        },
        env: {
            VERSION: process.env.VERSION,
            APILOCAL: process.env.APILOCAL,
            APISERVER: process.env.APISERVER,
            SECRET_KEY: process.env.SECRET_KEY,
        }
    };
    return nextConfig;
};
