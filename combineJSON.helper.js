const name = "flight";
const folderName = "./flight/flightsInfo";

const fs = require('fs');
const join = require('path').join;

const route = join(__dirname, folderName);

var values = [];

fs.readdirSync(route)
    .filter(file => ~file.indexOf('.json'))
    .forEach(file => {
        console.log("Importing file with name: " + file);
        try {
            let json = require(join(route, file));
            values.push(json);
        } catch (err) {
            console.log(`-----------------------------------------`)
            console.log(`ERROR IMPORTING FILE: ${file}`);
            console.log(`ERROR: ${err}`);
        }
        
    });

// console.log(values.length);
// console.log(values);

const fileData = `const ${name}s = ${JSON.stringify(values)} `;
fs.writeFileSync(`${name}.js`, fileData);
// console.log(fileData);