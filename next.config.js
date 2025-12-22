/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Configuration webpack pour react-pdf
  webpack: (config, { isServer }) => {
    // Ignorer les modules Node.js pour le client
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
        path: false,
        stream: false,
        crypto: false,
        util: false,
        buffer: false,
        process: false,
      };
    }
    
    // Ignorer canvas dans tous les cas (même côté serveur pour éviter les problèmes)
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    
    // Exclure canvas des modules externes
    config.externals = config.externals || [];
    if (!isServer) {
      config.externals.push({
        canvas: 'commonjs canvas',
      });
    }
    
    return config;
  },
  // Configuration pour servir les PDFs de manière sécurisée
  // Note: Les headers sont gérés directement dans la route API pour éviter les doublons
  async headers() {
    return [
      {
        source: '/api/pdf/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

