const request = require('request');
const args = process.argv.slice(2);
const fs = require('fs');
let url = args[0];
let path = args[1];


request( url, (error, response, body) => {
    fs.writeFile(path, body, (error)=>{
        if(error) throw error
        console.log("wow!!");
    })
    
});