const PASSENGER_COLLECTION = 'passengers';

// load data
load(`${currentDir}/passenger/data.js`);

setupCollection(PASSENGER_COLLECTION, passengers);
