const products = []
const fs = require('fs')
const path = require('path')
const readFile=(cb)=>{
    const p = path.join(path.dirname(process.mainModule.filename),'data','products.json')
    fs.readFile(p,((err,fileContent)=>{
            if(err){
                return cb([]) 
            }else{
                return cb(JSON.parse(fileContent))
            }
    }))
}
module.exports = class Product{
    constructor(title){
        this.title = title
    }
    
    save(){
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json')
        readFile((products)=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),((err)=>{
                               console.log(err)
                           }))
        }) 
    }
    static fetchAll(cb){
        readFile(cb)
    }
}