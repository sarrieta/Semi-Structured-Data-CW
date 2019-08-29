/**
 * @description finds all elements with the given values and prints them
 * @param {string} collectionName - the collection to search in
 * @param {JSON} query - the values to find 
 */
const findInCollection = function (collectionName, query, message) {
    queryCount++;
    print(`\n*************************************************`)
    print(`${queryCount}-> ${message}`)

    const shellQuery = `db.${collectionName}.find(${JSON.stringify(query, null, 2)});`
    const explain = explainFindQuery(collectionName, query);
    const element = db[collectionName].find(query).toArray();

    
    print(shellQuery)
    print(`---------------> explain`)
    printjson(explain)
    print(`---------------> response`)
    printjson(element);
    return element;
}

const explainFindQuery = function (collectionName, query) {
    const explaination = db[collectionName].find(query).explain();
    return explaination;
}

/**
 * @description finds all elements with the given values and prints them
 * @param {string} collectionName - the collection to search in
 * @param {[JSON]} arrayOfActions - the query to run 
 */
const aggregateFromArray = function (collectionName, arrayOfActions, message) {
    queryCount++;
    print(`\n*************************************************`)
    print(`${queryCount}-> ${message}`)

    const shellQuery = `db.${collectionName}.aggregate(${JSON.stringify(arrayOfActions, null, 2)});`
    const explain = explainAggregateQuery(collectionName, arrayOfActions);
    const result = db[collectionName].aggregate(arrayOfActions).toArray();
    
    print(shellQuery)
    print(`---------------> explain`)
    printjson(explain)
    print(`---------------> response`)
    printjson({result: result})
    
    return result;
}

const explainAggregateQuery = function (collectionName, arrayOfActions) {
    const explaination = db[collectionName]
        .explain(`allPlansExecution`)
        .aggregate(arrayOfActions);
    return explaination;
}

/**
 * @description finds all elements with the given values and prints them
 * @param {string} collectionName - the collection to search in
 * @param {JSON} query - the query to run 
 */
const aggregateSum = function (collectionName, query, message) {

    const aggregateSumArray = [{
        $group: query
    }];

    const sum = aggregateFromArray(collectionName, aggregateSumArray, message);
    return sum;
}

