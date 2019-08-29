const FLIGHT_BOOKING_COLLECTION = 'flightBookings';

load(`${currentDir}/flightBooking/data.js`);

setupCollection(FLIGHT_BOOKING_COLLECTION, flightBookings);