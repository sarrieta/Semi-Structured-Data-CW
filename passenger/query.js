// The PASSENGER_COLLECTION variable should be already set

print(`\n\n-------------------------------------`);
print(`Running queries against the ${PASSENGER_COLLECTION} collection`);

// Will find all passengers whose email begins with j
const partialEmailMatchQuery = {
    "contactDetails.personalEmail": /j.*/i
}
const partialEmailMatchMessage = `Will find all users whose email begins with the letter j`
findInCollection(PASSENGER_COLLECTION, partialEmailMatchQuery, partialEmailMatchMessage)

// Will find all passengers who have either arrived or had their departure from ISB
const departureOrArrivalMatchQuery = {
    $or: [ { "journeyHistory.departure": "ISB" }, { "journeyHistory.arrival": "ISB" } ]
}
const departureOrArrivalMatchMessage = `Will find all passengers who have either arrived or departured from ISB`
findInCollection(PASSENGER_COLLECTION, departureOrArrivalMatchQuery, departureOrArrivalMatchMessage)

// Will find all passengers who have arrived at CGD and had their departure from MAD
const departureAndArrivalMatchQuery = {
    $and: [ { "journeyHistory.departure": "MAD" }, { "journeyHistory.arrival": "CDG" } ]
}
const departureAndArrivalMatchMessage = `Will find all passengers who have arrived at CGD and had their departure from MAD`
findInCollection(PASSENGER_COLLECTION, departureAndArrivalMatchQuery, departureAndArrivalMatchMessage)

