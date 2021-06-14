
const fs = require('fs');

const reqHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter your message</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="create"><button type="submit">Send</button></input></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>User list</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        console.log("inside create user");
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);    
        });

        req.on('end',() =>{
            const parsed = Buffer.concat(body).toString();
            console.log(parsed.split("=")[1]);
        });
    }

    if(url === '/message' && method === 'POST'){
        console.log("inside message");
        //listen to the req stream
        const body = [];
        req.on('data',(chunk) =>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            //add a call back instead of fs.writeFileSync('message.txt', parsedBody.split("=")[1])
            fs.writeFileSync('message.txt', parsedBody.split("=")[1] ,(error) =>{
                res.statusCode= 302;
                res.setHeader('Location','/');
                return res.end();   
            });
            
        });
        
       
    };

    //console.log(req.url, req.method, req.headers);
    //res.setHeader('Content-Type','text/html');
    //res.write()



};
//module.exports = reqHandler;
module.exports = {
    handler : reqHandler,
    text : 'Use routes after nodemon'
};

//exports.handler = reqHandler;