module.exports = {
  devServer: {
    proxy: { 
      "/api": { target: 'http://1.235.195.83:8070', changeOrigin: true },
      "/rapi": { target: 'https://rapi.kric.com', changeOrigin: true },
   },
    port: 3000,
  }
}