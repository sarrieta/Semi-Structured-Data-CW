const AIRLINE_EMPLOYEE_COLLECTION = 'airlineEmployees';

// load data
load(`${currentDir}/airlineEmployee/data.js`);

// call the setupCollection function with collection name and data
setupCollection(AIRLINE_EMPLOYEE_COLLECTION, airlineEmployees);