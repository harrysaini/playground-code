process.env.UV_THREADPOOL_SIZE = 5  as any;

import { pbkdf2 } from 'crypto';

const start = Date.now();

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


pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
    console.log(`5: ${Date.now() - start}`)
});


