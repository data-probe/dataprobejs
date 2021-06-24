const fs = require("fs");
const { csvUpload } = require('./fileHandler.js');


const csvHandler=(csvFile,jsonFile)=>{
    csvUpload(csvFile,jsonFile);
}

// Drop a Column from the Dataset
const deleteColumn = (dataset, key) => {
    for (let i = 0; i < dataset.length; i++) {
        delete dataset[i][key];
    }
    return (dataset);
}


// Size of the Dataset
const datasetSize = (dataset) => {
    rows = Object.keys(dataset[0]).length;
    columns = dataset.length;
    return "Total rows: " + rows + " and " + "Total  columns: " + columns;
}


// Dataset Summary
const dataSummary = (dataset) => {
    console.log()
    console.log("Data Summary :-")
    console.log()
    for (let i in dataset[0]) {
        console.log(i + " : " + typeof (dataset[0][i]));
    }
    columns = Object.keys(dataset[0]).length;
    rows = dataset.length;
    console.log("Total rows: " + rows);
    console.log("Total columns: " + columns);
}


// Data Transform
const columnEncoder = (dataset, columns) => {
    var set = new Set(dataset.map(item => item[columns]))
    const arr = [...set]
    for (let i = 0; i < dataset.length; i++) {
        if (arr.includes(dataset[i][columns])) {
            let temp = dataset[i][columns]
            dataset[i][columns] = arr.indexOf(temp)
        }
    }
    return dataset;
}

// Column slicing
const sliceColumn = (dataset, column) => {
    const col = []
    for (let i = 0; i < dataset.length; i++) {
        col.push(dataset[i][column]);
    }
    return col;
}



// Correlation Coefficient
const columnsCorrelation = (X, Y) => {
    let n = X.length;
    let sum_X = 0, sum_Y = 0, sum_XY = 0;
    let squareSum_X = 0, squareSum_Y = 0;
    for (let i = 0; i < n; i++) {
        sum_X = sum_X + X[i];
        sum_Y = sum_Y + Y[i];
        sum_XY = sum_XY + X[i] * Y[i];
        squareSum_X = squareSum_X + X[i] * X[i];
        squareSum_Y = squareSum_Y + Y[i] * Y[i];
    }
    let corr = (n * sum_XY - sum_X * sum_Y) /
        (Math.sqrt((n * squareSum_X -
            sum_X * sum_X) *
            (n * squareSum_Y -
                sum_Y * sum_Y)));
    return corr.toFixed(3);
}


// Head and Tail 
const dataHead = (dataset, num) => {
    const headDataset = []
    for (let i = 0; i < num; i++) {
        headDataset.push(dataset[i]);
    }
    return headDataset
}

const dataTail = (dataset, num) => {
    const rdataset = dataset.reverse()
    const tailDataset = []
    for (let i = 0; i < num; i++) {
        tailDataset.push(dataset[i]);
    }
    return tailDataset.reverse()
}

// Checks and counts the total number of  null values of a column 
const checkNull = (dataset, column) => {
    let counter = 0
    for (let i = 0; i < dataset.length; i++) {
        if (!dataset[i][column]) {
            counter++
        }
    }
    return counter
}

// Save dataset to new json file
const saveDataset = (dataset, filename) => {
    fs.writeFile(filename, JSON.stringify(dataset), "utf8", (err) => {
        console.log(err);
    });
}


module.exports = {
    deleteColumn,
    datasetSize,
    dataSummary,
    columnEncoder,
    sliceColumn,
    columnsCorrelation,
    dataHead,
    dataTail,
    checkNull,
    saveDataset,
    csvHandler
}