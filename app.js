/**
 * concepts covered :
 * 1. Basic node js function
 * 2. Streams(Bus) and buffers (Bus stop)
 * 3. EVent driven architecture : node js heavily uses this pattern
 * 4. Event loop : this is automatically started by node js
 */

const http = require('http');
const routes = require('./routes.js');//since its not glbal a local path is required

console.log(routes.text);


//1.explicitly mention
//http.createServer(reqListener);
//2.now create with anonymolus function

//3.next gen js syntax.. looks cool. This is an event driven function
//this returns a server
const server =  http.createServer( routes.handler ); //dont execute so no {} is required

//this will keep runnning for incoming requests.
//this can be an example for event loop
server.listen(3000);
