/**
 * concepts covered :
 * 1. Basic node js function
 * 2. Streams(Bus) and buffers (Bus stop)
 * 3. EVent driven architecture : node js heavily uses this pattern
 * 4. Event loop : this is automatically started by node js
 */



//import express
const express = require('express');
const bodyParser = require('body-parser');
//const adminData = require('./routes/admin.js');
//const shopRouter = require('./routes/shop.js');
const errorController = require('./controllers/error');

const path = require('path');

//db
const db = require('./util/db')

//now create a express application
const app = express();

//add template engine
app.set('view engine','ejs');//set the templating engine to use
app.set('views','views');//set the place to find templates



const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);



//const server = http.createServer(app);server.listen(3000);
//both the above lines can be done together.
app.listen(3000);





/**
 * Below is code with native node js
 */

//1.explicitly mention

//const http = require('http');
//const routes = require('./routes.js');//since its not glbal a local path is required
//http.createServer(reqListener);
//2.now create with anonymolus function

//3.next gen js syntax.. looks cool. This is an event driven function
//this returns a server
//const server =  http.createServer( routes.handler ); //dont execute so no {} is required

//this will keep runnning for incoming requests.
//this can be an example for event loop
//server.listen(3000);

