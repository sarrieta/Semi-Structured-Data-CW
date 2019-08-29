// The FLIGHTS_COLLECTION variable should be already set

print(`\n\n-------------------------------------`);
print(`Running queries against the ${FLIGHTS_COLLECTION} collection`);

// find all flights with passengers who have their passport issued from Pakistan
const findAllFlightsWithPassengersFromCountryQuery = {
    "passengerList.bookingDetails.issuingCountry": "Pakistan"
}
const findAllFlightsWithPassengersFromCountryMessage = `find all flights with passengers who have their passport issued from Pakistan`
findInCollection(FLIGHTS_COLLECTION, findAllFlightsWithPassengersFromCountryQuery, findAllFlightsWithPassengersFromCountryMessage);