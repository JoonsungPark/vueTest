module.exports = {
  devServer: {
    proxy: { 
      "/api": { target: 'http://1.235.195.83:8070', changeOrigin: true },
      "/rapi": { target: 'https:/223.130.160.5', changeOrigin: true },
   },
    port: 3030,
  }
}