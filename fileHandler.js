const fs = require("fs");
const csv = require('csvtojson')
const p = require('phin')

const csvUpload=(csvFilePath,jsonFilePath)=>{
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        fs.writeFile(jsonFilePath,JSON.stringify(jsonObj),(err)=>{
                console.log(err);
        });   
    });
}

const fetchData = async (link , filePath) => {
    const res = await p(link)
    fs.writeFile(filePath , res.body,(err)=>{
        console.log(err);
    });
}

module.exports={csvUpload , fetchData}
