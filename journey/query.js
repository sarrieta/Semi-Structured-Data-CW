// The JOURNEY_COLLECTION variable should be already set

print(`\n\n-------------------------------------`);
print(`Running queries against the ${JOURNEY_COLLECTION} collection`);

// find all journeys
const findAllJourneysQuery = {}
const findAllJourneysMessage = `find all journeys`
findInCollection(JOURNEY_COLLECTION, findAllJourneysQuery, findAllJourneysMessage)

// find all journeys which have f7 as the first flight id
const elemMatchQuery = {
    flights: {
        $elemMatch: {
            flightId: "f7"
        }
    }
}
const elemMatchMessage = `find all journeys which have f7 as the first flight id`
findInCollection(JOURNEY_COLLECTION, elemMatchQuery, elemMatchMessage)

// Will join the flight collection with journeys to look up all journeys with plane having model 747
const lookupAndMatchPlaneModelQuery = [{
    $lookup: {
        from: 'flights',
        localField: 'flights.flightId',
        foreignField: '_id',
        as: 'flights'
    }
}, {
    $match: {
        "flights.plane.model": "747"
    }
}]
const lookupAndMatchPlaneModelMessage = `Will join the flight collection with journeys to look up all journeys with plane having model 747`
aggregateFromArray(JOURNEY_COLLECTION, lookupAndMatchPlaneModelQuery, lookupAndMatchPlaneModelMessage)