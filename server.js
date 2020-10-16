const http = require('http');

// create server variable 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
        // content type
    res.setHeader('Content', 'text/html');
    res.write('<h2>I wonder if tomorrow will be full of stoke</h2>');
    res.end();
});

const PORT = process.env.PORT || 5000 ;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));