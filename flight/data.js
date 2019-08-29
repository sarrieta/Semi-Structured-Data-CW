const flights = [
    {
    "_id": "f1",
    "plane": {
        "_id": "pl1",
        "make": "Boeing",
        "model": "747",
        "flyingRange": "15000",
        "lengthOfService": 180,
        "status": "working",
        "seatingCapacity": 524
    },
    "departure": {
        "departureAirport": "LGW",
        "departureTime": new Date("2018-10-09T15:06:21.595Z")
    },
    "arrival": {
        "arrivalAirport": "MAD",
        "arrivalTime": new Date("2018-10-09T17:06:21.595Z")
    },
    "flightCrew": [{
            "employeeNumber": "e07",
            "firstName": "Joe",
            "lastName": "Cooler",
            "role": "cabin staff",
            "title": "Mr"
        },
        {
            "employeeNumber": "e02",
            "firstName": "Tom",
            "lastName": "Jackson",
            "role": "maintenance staff",
            "title": "Mr"
        },
        {
            "employeeNumber": "e04",
            "firstName": "Jane",
            "lastName": "Black",
            "role": "pilot",
            "title": "Ms"
        }
    ],
    "passengerList": [{
            "bookingDetails": {
                "issuingCountry": "Pakistan",
                "passportExpiry": new Date("2020-10-10"),
                "passportNumber": "AB0123456"
            },
            "firstName": "Muhammad",
            "lastName": "Qasim",
            "passengerObjectId": "p1",
            "title": "Mr"
        },
        {
            "bookingDetails": {
                "issuingCountry": "United Kingdom",
                "passportExpiry": new Date("2019-09-10"),
                "passportNumber": "AB0773456"
            },
            "firstName": "Joe",
            "lastName": "Carter",
            "passengerObjectId": "p2",
            "title": "Mr"
        }
    ]
}, {
    "_id": "f2",
    "plane": {
        "_id": "pl5",
        "make": "ULR",
        "model": " A350",
        "flyingRange": "15200",
        "lengthOfService": 240,
        "status": "working",
        "seatingCapacity": 544
    },
    "departure": {
        "departureAirport": "PEK",
        "departureTime": new Date("2020-01-20T06:20:30.675Z")
    },
    "arrival": {
        "arrivalAirport": "ISB",
        "arrivalTime": new Date("2020-01-20T15:20:30.675Z")
    },
    "flightCrew": [{
        "employeeNumber": "e04",
        "firstName": "Jane",
        "lastName": "Black",
        "role": "pilot",
        "title": "Ms"
    }, {
        "employeeNumber": "e02",
        "firstName": "Tom",
        "lastName": "Jackson",
        "role": "maintenance staff",
        "title": "Mr"
    }, {
        "employeeNumber": "e08",
        "firstName": "John",
        "lastName": "Bieber",
        "role": "cabin crew",
        "title": "Mr"
    }],
    "passengerList": [{
        "bookingDetails": {
            "issuingCountry": "United Kingdom",
            "passportExpiry": new Date("2023-10-10"),
            "passportNumber": "AR11345611"
        },
        "firstName": "Rose",
        "lastName": "Lee",
        "passengerObjectId": "p6",
        "title": "Miss"
    }, {
        "bookingDetails": {
            "issuingCountry": "United States",
            "passportExpiry": new Date("2025-04-10"),
            "passportNumber": "CD0773056"
        },
        "firstName": "Grace",
        "lastName": "Cao",
        "passengerObjectId": "p5",
        "title": "Ms"
    }]
}, {
    "_id": "f3",
    "plane": {
        "_id": "pl3",
        "make": "Safran",
        "model": "Falcon900",
        "flyingRange": "20000",
        "lengthOfService": 32,
        "status": "working",
        "seatingCapacity": 756
    },
    "departure": {
        "departureAirport": "ISB",
        "departureTime": new Date("2019-12-09T09:06:55.595Z")
    },
    "arrival": {
        "arrivalAirport": "LGW",
        "arrivalTime": new Date("2019-12-09T21:06:21.595Z")
    },
    "flightCrew": [{
        "employeeNumber": "e01",
        "firstName": "Joe",
        "lastName": "Cooler",
        "role": "cabin staff",
        "title": "Mr"
    }, {
        "employeeNumber": "e02",
        "firstName": "Tom",
        "lastName": "Jackson",
        "role": "maintenance staff",
        "title": "Mr"
    }, {
        "employeeNumber": "e05",
        "firstName": "Jerry",
        "lastName": "Hansard",
        "role": "pilot",
        "title": "Mr"
    }],
    "passengerList": [{
        "bookingDetails": {
            "issuingCountry": "United States",
            "passportExpiry": new Date("2025-04-10"),
            "passportNumber": "CD0773056"
        },
        "firstName": "Grace",
        "lastName": "Cao",
        "passengerObjectId": "p5",
        "title": "Ms"
    }, {
        "bookingDetails": {
            "issuingCountry": "United Kingdom",
            "passportExpiry": new Date("2021-09-10"),
            "passportNumber": "E50773456"
        },
        "firstName": "Mary",
        "lastName": "Green",
        "passengerObjectId": "p3",
        "title": "Ms"
    }]
}, {
    "_id": "f4",
    "plane": {
        "_id": "pl3",
        "make": "Safran",
        "model": "Falcon900",
        "flyingRange": "20000",
        "lengthOfService": 32,
        "status": "working",
        "seatingCapacity": 756
    },
    "departure": {
        "departureAirport": "MIA",
        "departureTime": new Date("2018-09-09T21:06:21.595Z")
    },
    "arrival": {
        "arrivalAirport": "BOM",
        "arrivalTime": new Date("2018-09-10T05:06:21.595Z")
    },
    "flightCrew": [{
        "employeeNumber": "e01",
        "firstName": "Joe",
        "lastName": "Cooler",
        "role": "cabin staff",
        "title": "Mr"
    }, {
        "employeeNumber": "e03",
        "firstName": "Lucky",
        "lastName": "White",
        "role": "booking clerks",
        "title": "Miss"
    }, {
        "employeeNumber": "e04",
        "firstName": "Jane",
        "lastName": "Black",
        "role": "pilot",
        "title": "Ms"
    }],
    "passengerList": [{
        "bookingDetails": {
            "issuingCountry": "United Kingdom",
            "passportExpiry": new Date("2020-10-10"),
            "passportNumber": "AB0123456"
        },
        "firstName": "Mary",
        "lastName": "Green",
        "passengerObjectId": "p3",
        "title": "Ms"
    }, {
        "bookingDetails": {
            "issuingCountry": "United Kingdom",
            "passportExpiry": new Date("2023-10-10"),
            "passportNumber": "AR11345611"
        },
        "firstName": "Rose",
        "lastName": "Lee",
        "passengerObjectId": "p6",
        "title": "Miss"
    }, {
        "bookingDetails": {
            "issuingCountry": "China",
            "passportExpiry": new Date("2025-08-10"),
            "passportNumber": "E50993456"
        },
        "firstName": "Wei",
        "lastName": "Sun",
        "passengerObjectId": "p4",
        "title": "Miss"
    }]
}, {
    "_id": "f5",
    "plane": {
        "_id": "pl5",
        "make": "ULR",
        "model": " A350",
        "flyingRange": "15200",
        "lengthOfService": 240,
        "status": "working",
        "seatingCapacity": 544
    },
    "departure": {
        "departureAirport": "MAD",
        "departureTime": new Date("2019-10-11T11:10:40.595Z")
    },
    "arrival": {
        "arrivalAirport": "CDG",
        "arrivalTime": new Date("2019-10-11T17:10:40.595Z")
    },
    
    "flightCrew": [{
        "employeeNumber": "e07",
        "firstName": "Joe",
        "lastName": "Cooler",
        "role": "cabin staff",
        "title": "Mr"
    }, 
    {
        "employeeNumber": "e06",
        "firstName": "Rose",
        "lastName": "Black",
        "role": "pilot",
        "title": "Miss"
    }],
    "passengerList": [{
        "bookingDetails": {
            "issuingCountry": "China",
            "passportExpiry": new Date("2025-08-10"),
            "passportNumber": "E50993456"
        },
        "firstName": "Wei",
        "lastName": "Sun",
        "passengerObjectId": "p4",
        "title": "Miss"
    }, {
        "bookingDetails": {
            "issuingCountry": "United Kingdom",
            "passportExpiry": new Date("2023-10-10"),
            "passportNumber": "AR11345611"
        },
        "firstName": "Rose",
        "lastName": "Lee",
        "passengerObjectId": "p6",
        "title": "Miss"
    }, {
        "bookingDetails": {
            "issuingCountry": "United Kingdom",
            "passportExpiry": new Date("2021-09-10"),
            "passportNumber": "E50773456",
        },
        "firstName": "Mary",
        "lastName": "Green",
        "passengerObjectId": "p3",
        "title": "Ms"
    }]
}, {
    "_id": "f6",
    "plane": {
        "_id": "pl6",
        "make": "Leonardo",
        "model": "MRO26",
        "flyingRange": "9200",
        "lengthOfService": 130,
        "status": "working",
        "seatingCapacity": 123
    },
    "departure": {
        "departureAirport": "MAD",
        "departureTime": new Date("2019-02-09T09:06:55.595Z")
    },
    "arrival": {
        "arrivalAirport": "DXB",
        "arrivalTime": new Date("2019-02-09T15:06:21.595Z")
    },
    "flightCrew": [{
        "employeeNumber": "e01",
        "firstName": "Joe",
        "lastName": "Cooler",
        "role": "cabin staff",
        "title": "Mr"
    }, {
        "employeeNumber": "e03",
        "firstName": "Lucky",
        "lastName": "White",
        "role": "Booking Clerk",
        "title": "Miss"
    }, {
        "employeeNumber": "e05",
        "firstName": "Jerry",
        "lastName": "Hansard",
        "role": "pilot",
        "title": "Mr"
    }],
    "passengerList": [{
        "bookingDetails": {
            "issuingCountry": "China",
            "passportExpiry": new Date("2025-08-10"),
            "passportNumber": "E50993456"
        },
        "firstName": "Wei",
        "lastName": "Sun",
        "passengerObjectId": "p4",
        "title": "Miss"
    }, {
        "bookingDetails": {
            "issuingCountry": "United Kingdom",
            "passportExpiry": new Date("2023-10-10"),
            "passportNumber": "AR11345611"
        },
        "firstName": "Rose",
        "lastName": "Lee",
        "passengerObjectId": "p6",
        "title": "Miss"
    }]
}, {
    "_id": "f7",
    "plane": {
        "_id": "pl5",
        "make": "ULR",
        "model": " A350",
        "flyingRange": "15200",
        "lengthOfService": 240,
        "status": "working",
        "seatingCapacity": 544
    },
    "departure": {
        "departureAirport": "LGW",
        "departureTime": new Date("2018-12-09T06:04:41.595Z")
    },
    "arrival": {
        "arrivalAirport": "MIA",
        "arrivalTime": new Date("2018-12-09T23:06:30.595Z")
    },
    "flightCrew": [{
        "employeeNumber": "e01",
        "firstName": "Joe",
        "lastName": "Cooler",
        "role": "cabin staff",
        "title": "Mr"
    }, {
        "employeeNumber": "e03",
        "firstName": "Lucky",
        "lastName": "White",
        "role": "Booking Clerk",
        "title": "Miss"
    }, {
        "employeeNumber": "e05",
        "firstName": "Jerry",
        "lastName": "Hansard",
        "role": "pilot",
        "title": "Mr"
    }],
    "passengerList": [{
        "bookingDetails": {
            "issuingCountry": "China",
            "passportExpiry": new Date("2025-08-10"),
            "passportNumber": "E50993456"
        },
        "firstName": "Wei",
        "lastName": "Sun",
        "passengerObjectId": "p4",
        "title": "Miss"
    }, {
        "bookingDetails": {
            "issuingCountry": "United Kingdom",
            "passportExpiry": new Date("2023-10-10"),
            "passportNumber": "AR11345611"
        },
        "firstName": "Rose",
        "lastName": "Lee",
        "passengerObjectId": "p6",
        "title": "Miss"
    }]

}]