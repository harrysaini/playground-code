const express = require('express');
var Worker = require('webworker-threads').Worker;

const app = express();




app.get('/', (req, res) => {
   const worker = new Worker(function (){
        //this.postMessage('Bam bam bhole');

       this.onmessage = function(data) {
           // do something
           var counter = 0;
           while(counter < (10**9)) {
               counter++;
           }
           this.postMessage(counter);
       }
   });

   worker.postMessage();

   worker.onmessage = (message) => {
       console.log(message);
       res.send('' + message.data)
   }
});

app.listen(3000,  () => {
    console.log('Server started');
});