import { request } from "https";
import { pbkdf2 } from 'crypto';
import { readFile } from 'fs';

const start = Date.now();

const doRequest = (i: number) => {
    request("https://www.google.com", res => {
        res.on("data", () => { });
        res.on("end", () => {
            console.log(`http: ${i}: ${Date.now() - start} `);
        });
    }).end();
}

doRequest(1);

readFile('async.js', 'utf-8', () => {
    console.log(`fs: ${Date.now() - start} `)
})

pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
    console.log(`1: ${Date.now() - start} `)
});


pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
    console.log(`2: ${Date.now() - start}`)
});


pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
    console.log(`3: ${Date.now() - start} `)
});


pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
    console.log(`4: ${Date.now() - start}`)
});
