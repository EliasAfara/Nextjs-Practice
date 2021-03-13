const dev = process.env.NODE_ENV !== 'production';
const yourAPI = 'yourAPI';
export const server = dev ? 'http://localhost:3000' : yourAPI;
