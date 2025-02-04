const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to determine the content type based on file extension
const getContentType = (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
    };
    return mimeTypes[ext] || 'application/octet-stream';
};

// Handler for serving static files
const handleStaticFile = (req, res) => {
    const filePath = path.join(__dirname, '../dist', req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(err.code === 'ENOENT' ? 404 : 500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': getContentType(filePath) });
            res.end(data);
        }
    });
};

// Handler for the API endpoint
const handleApi = (req, res) => {
    if (req.method === 'GET') {
        const response = JSON.stringify({ message: 'Hello, world!' });
        res.writeHead(200, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(response) });
        res.end(response);
    } else {
        res.writeHead(405);
        res.end();
    }
};

// Creating the server and routing requests
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/api/message')) {
        handleApi(req, res);
    } else {
        handleStaticFile(req, res);
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
