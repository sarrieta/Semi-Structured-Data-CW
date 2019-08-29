// The FLIGHT_BOOKING_COLLECTION variable should be already set

print(`\n\n-------------------------------------`);
print(`Running queries against the ${FLIGHT_BOOKING_COLLECTION} collection`);

// query to calculate the total sum of salaries
const totalCostOfBookingQuery = {
    // specifying _id as null matches to all the documents within the collection
    _id: null,
    totalCostOfBooking: {
        $sum: "$totalCost"
    }
};
const totalCostOfBookingMessage = `query to calculate the total sum of salaries`;
const totalCostOfBooking = aggregateSum(FLIGHT_BOOKING_COLLECTION, totalCostOfBookingQuery, totalCostOfBookingMessage);

// query to find all bookings with a specific passenger
const findAllFlightBookingsWithPassengerQuery = {
    "passengers._id": "p6"
}
const findAllFlightBookingsWithPassengerMessage = `query to find all bookings with a specific passenger`;
findInCollection(FLIGHT_BOOKING_COLLECTION, findAllFlightBookingsWithPassengerQuery, findAllFlightBookingsWithPassengerMessage);

// query to find all bookings made after a specific date
const findAllFlightBookingsMadeAfterQuery = {
    dateOfBooking: {
        $gte: new Date("2018-12-08T18:10:11.390Z")
    }
}
const findAllFlightBookingsMadeAfterMessage = `query to find all bookings made after a specific date`;
findInCollection(FLIGHT_BOOKING_COLLECTION, findAllFlightBookingsMadeAfterQuery, findAllFlightBookingsMadeAfterMessage);

// adds first name and last name and compares with name on card
const compareNameOnCardWithFirstAndLastNameQuery = [{
    $project: {
        "nameDoesNotMatch": {
            "$strcasecmp": [{
                "$concat": [
                    "$firstName", " ", "$lastName"
                ]
            }, "$paymentDetails.nameOnCard"]
        }
    }
}, {
    $match: {
        nameDoesNotMatch: {
            $in: [
                // if names match the value should be 0
                1, -1
            ]
        }
    }
}];
const compareNameOnCardWithFirstAndLastNameMessage = `adds first name and last name and compares with name on card - will return different ones`
aggregateFromArray(FLIGHT_BOOKING_COLLECTION, compareNameOnCardWithFirstAndLastNameQuery, compareNameOnCardWithFirstAndLastNameMessage)