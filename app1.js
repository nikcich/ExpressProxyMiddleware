const express = require('express');

const app = express();

app.get('/nikolas', (req, res) => {
    res.json("Hello world app 1!");
});

// Start the proxy server
app.listen(8081, () => {
    console.log('Proxy server is running on port 8081');
});
