const fs = require('fs')

const inputFile = './forex/tradays/raw/tradays-2022.json';
const outputFile = './forex/tradays/unique/tradays-2022.json';
const uniqueColumn = 'Id';

const myjson = require(inputFile);

valueArray = myjson.map(j => j[uniqueColumn]);
setOfValue = new Set(valueArray)
uniqueValues = [...setOfValue]

const response = []

for (var i = 0; i < uniqueValues.length; i++) {
  const item = myjson.find(j => j[uniqueColumn] === uniqueValues[i]);
  response.push(item)
}

const content = JSON.stringify(response);

fs.writeFile(outputFile, content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File has been created');
})
