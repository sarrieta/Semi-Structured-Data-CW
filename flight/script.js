const FLIGHTS_COLLECTION = 'flights';

load(`${currentDir}/flight/data.js`);

setupCollection(FLIGHTS_COLLECTION, flights);
