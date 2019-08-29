// The AIRPORT_COLLECTION variable should be already set

print(`\n\n-------------------------------------`);
print(`Running queries against the ${AIRPORT_COLLECTION} collection`);

// query to calculate the total sum of standing and refuelling charges
const totalAirportChargesQuery = {
    // specifying _id as null matches to all the documents within the collection
    _id: null,
    totalStandingCharges: {
        $sum: "$standingTotalCharges"
    },
    totalRefuellingCharges: {
        $sum: "$refuellingTotalCharges"
    }
};
const totalAirportChargesMessage = `query to calculate the total sum of standing & refuelling charges`;
const totalAirportCharges = aggregateSum(AIRPORT_COLLECTION, totalAirportChargesQuery, totalAirportChargesMessage);
