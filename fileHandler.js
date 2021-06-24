const fs = require("fs");
const csv = require('csvtojson')

const csvUpload=(csvFilePath,jsonFilePath)=>{
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        fs.writeFile(jsonFilePath,JSON.stringify(jsonObj),(err)=>{
                console.log(err);
        });   
    });
}

module.exports={csvUpload}