
//either as a function ES5 or with nextgen js
//const products = [];
const db = require('../util/db');


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
        

    }

    static fetchAll(){
      return  db.execute('SELECT * FROM products');    
    }   

    static findById(id){

    }

    static deleteById(id){

    }

};