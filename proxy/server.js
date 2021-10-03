const host = '127.0.0.1';
const port = process.env.PROXY_PORT || 8080;

const cors_proxy = require('cors-anywhere');

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
  });
