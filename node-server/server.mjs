// // server.mjs
// import { createServer } from "node:http";
// import { readFile } from "node:fs";
// import { fileURLToPath } from "node:url";
// import path from "node:path";

// // __dirname alternative for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const server = createServer((req, res) => {
//   const filePath = path.join(__dirname, "message.txt");

//   readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("File not found");
//     } else {
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("Listening on http://127.0.0.1:3000");
// });


// server.mjs
// server.mjs
import { createServer } from 'node:http';
import { readFile } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer((req, res) => {
  const filePath = path.join(__dirname, 'data.json');

  readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'JSON file not found' }));
      return;
    }

    try {
      const jsonData = JSON.parse(data); // check JSON validity

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(jsonData));
    } catch (parseError) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON format' }));
    }
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000');
});

