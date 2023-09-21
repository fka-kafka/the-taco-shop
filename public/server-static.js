const http = require("http");
const url = require("url");
const fs = require("fs");
const { config } = require("dotenv");
require("dotenv").config();

const port = process.env.port;
const host = process.env.host;

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

  if (path == "") {
    path = "index.html";
  };
  console.log(`Requested path ${path}`)
});

server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});
