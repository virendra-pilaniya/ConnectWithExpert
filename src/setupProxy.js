const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/1/upload",
    createProxyMiddleware({
      target: process.env.REACT_APP_IMGBB_URL,
      changeOrigin: true,
    })
  );
};

