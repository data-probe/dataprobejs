## About 

This is a Javascript library for data exploration and analysis.
It takes data input in JSON format and converts it into a tabular form
in the node console. It has simple to use commands for manipulating and 
playing around with the data table.

### Installation

```javascript
npm i dataprobe
```
### Important Functions

* console.table(dataset) - Used to display the data in tabular format in your terminal/console

* dataHead(dataset,number) - It takes two input, first the data and then the number of rows.
This function is used to display a perticular number of rows from the top of the data table

* dataTail(dataset,number) - Works same as dataHead(), instead displays a certain number of 
rows from the bottom depending on input.

* datasetSize(dataset) - Displays the size of the data table. 

* dataSummary(dataset) - Provides a summary of the data table.

* columnEncoder(dataset,column-name) -This function takes two inputs, first the data and
then the column to be encoded.It converts multivariant data to numeric data for easies and faster 
data processing

* sliceColumn(dataset,column-name) - Used to slics a column

* columnsCorrelation(column1-name,column2-name) - returns the correlation coefficient of two arrays. It takes two sliced arrays as input. Correlation coefficient are always on the range of 
-1 to +1. 

* checkNull(dataset,column-name) - Used to check and count the presence of null,undefined,"" or 0 values inside a given column of the data table. It return a number. If it returns 0, then the column has no input values

* deleteColumn(dataset,column-name) - Delete a column form the database.

* saveDataset(new_dataset,filename) - Takes two inputs, first the data and then the JSON filename of the where you want to store your new dataset in JSON format

* csvHandler(csv_file_path,json_file) - Takes two inputs, first the absolute path to the CSV file and second the JSON filename to where you want to store the data in JSON format.

### How to Import dataprobe and use it ?

```javascript
const {functionName()} = require("dataprobe");
const dataset = require("./filename");
```
#### Example
```javascript
const {datasetSize} = require("dataprobe");
const dataset = require("./supermarket.json");

console.table(dataset);
datasetSize(dataset);
```

### Contributors

* Anupam Dungdung
* Gourav Ojha