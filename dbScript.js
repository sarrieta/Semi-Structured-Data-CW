const url = "localhost";
const port = 27017;
const dbName = "semi-structured-coursework1-group005";

const dbPath = `mongodb://${url}:${port}`;

print(`connecting to database at: ${dbPath}`);
const conn = new Mongo(dbPath);

print(`accessing db with name: ${dbName}`);
const db = conn.getDB(dbName);

// we get the current directory to create absolute path to our sub files
const currentDir = pwd();

// function to set up collection
function setupCollection(collectionName, dataArray) {

    print(`-------------------------------------`);
    print(`Dropping ${collectionName} collection`);
    db[collectionName].drop();

    print(`Inserting data in ${collectionName} collection`);
    dataArray.forEach((dataElement, index) => {
        try {
            db[collectionName].insertOne(dataElement);
        } catch (err) {
            print(`*************************************************`);
            print(`ERROR in ${collectionName} at element: ${index+1}`)
            print(`ERROR: ${err}`)
            print(`*************************************************`);
        }
    });
    
};

// Will load the scripts to setup each collection and execute them
load(`${currentDir}/airlineEmployee/script.js`);
load(`${currentDir}/airport/script.js`);
load(`${currentDir}/passenger/script.js`);
load(`${currentDir}/plane/script.js`);
load(`${currentDir}/flight/script.js`);
load(`${currentDir}/journey/script.js`);
load(`${currentDir}/flightBooking/script.js`);

// a counter to track total number of queries
let queryCount = 0;
// A helper class for running queries in the database
load(`${currentDir}/query.helper.js`)

// Will load the scripts to query the database
load(`${currentDir}/airlineEmployee/query.js`);
load(`${currentDir}/airport/query.js`);
load(`${currentDir}/passenger/query.js`);
load(`${currentDir}/plane/query.js`);
load(`${currentDir}/flight/query.js`);
load(`${currentDir}/flightBooking/query.js`);
load(`${currentDir}/journey/query.js`);

// calculate total revenue
const combinedTotalAirportCharges = totalAirportCharges[0].totalStandingCharges + totalAirportCharges[0].totalRefuellingCharges
const Revenue = totalCostOfBooking[0].totalCostOfBooking - (combinedTotalAirportCharges + totalSalaryBill[0].totalSalaryBill)

print(`total queries count: ${queryCount}`)
print(`Total revenue: ${Revenue}`)