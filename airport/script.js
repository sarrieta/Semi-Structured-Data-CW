const AIRPORT_COLLECTION = 'airports';

// load data
load(`${currentDir}/airport/data.js`);

setupCollection(AIRPORT_COLLECTION, airports);