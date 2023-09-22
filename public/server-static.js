const http = require("http");
const url = require("url");
const fs = require("fs");
const lookup = require("mime-types").lookup;

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

  if (path == "") {
    path = "index.html";
  }
  console.log(`Requested ${path}`);

  let file = __dirname + "\\" + path;

  fs.readFile(file, (err, content) => {
    if (err) {
      console.log(`${file} File not found.`);
      res.writeHead("Error: " + 404);
      res.end();
    } else {
      console.log(`Returning ${path}`);

      let mime = lookup(path);
      res.writeHead(200, { "Content-type": mime });
      res.end(content);
    }
  });
});

server.listen(4321, "localhost", () => {
  console.log("Listening on localhost:4321");
});
