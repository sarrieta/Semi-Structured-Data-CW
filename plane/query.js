// The PLANE_COLLECTION variable should be already set

print(`\n\n-------------------------------------`);
print(`Running queries against the ${PLANE_COLLECTION} collection`);

// Will find all planes with the given id
const planeWithIDQuery = {
    _id: "pl1"
}
const planeWithIDMessage = `Will find all planes with the given id`
findInCollection(PLANE_COLLECTION, planeWithIDQuery, planeWithIDMessage)


// Will find all planes with working status
const planeWithStatusQuery = {
    status: "working"
}
const planeWithStatusMessage = `Will find all planes with working status`
findInCollection(PLANE_COLLECTION, planeWithStatusQuery, planeWithStatusMessage)

// Will find all planes with seating capacity between given range
const planeWithSeatingCapacityInRangeQuery = {
    seatingCapacity: {
        $gte: 100,
        $lte: 200
    }
}
const planeWithSeatingCapacityInRangeMessage = `Will find all planes with seating capacity between given range`
findInCollection(PLANE_COLLECTION, planeWithSeatingCapacityInRangeQuery, planeWithSeatingCapacityInRangeMessage)

