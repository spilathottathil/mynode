const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');
//either as a function ES5 or with nextgen js
//const products = [];
const p =  path.join(rootDir,'data','products.json');
const getProductsFromFile = cb =>{
   
        fs.readFile(p,(err,fileContent) =>{
            if(err) {
                cb([]);
            }
             cb(JSON.parse(fileContent));
        })
}
module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save() {
        //products.push(this);   
        //push to file
    
        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err) =>{
                console.log(err);
            })
        });

    }

    static fetchAll(cb){
        getProductsFromFile(cb);
      
    }   

}