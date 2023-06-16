const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// e.g. Auth service running separately on 8080
const apiProxy1 = createProxyMiddleware('/auth', {
  target: 'http://localhost:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/auth': '',
  },
});

// Another API service running on 8081
const apiProxy2 = createProxyMiddleware('/api', {
  target: 'http://localhost:8081',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
});

app.use(apiProxy1);
app.use(apiProxy2);

// e.g.
// http://localhost:3000/auth/CichoszAuth/auth/service/
// http://localhost:3000/api/nikolas

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});