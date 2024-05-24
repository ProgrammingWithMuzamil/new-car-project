import { type } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['cdn.imagin.studio']
    },
    typescript:{
        ignoreBuildErrors:type,
    }
};

export default nextConfig;
