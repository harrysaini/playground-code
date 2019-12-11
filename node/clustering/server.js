const express = require('express');

const app = express();

function block(duration) {
    const start = Date.now();
    while(Date.now() - start < duration) {
        // block
    }
}


app.get('/', (req, res) => {
    block(5000);
    res.send("Hello world");
});

app.listen(3000,  () => {
    console.log('Server started');
});