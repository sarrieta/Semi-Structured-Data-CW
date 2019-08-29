const flightBookings = [

    {
        "_id": "fb1",
        "title": "Mr",
        "firstName": "Matthew",
        "lastName": "Smith",
        "dob": new Date("1990-03-06"),
        "paymentDetails": {
            "nameOnCard": "Matt Smith",
            "cardNumber": "4659247584939535",
            "cardExpiry": "12/23",
            "cardCVV": "336",
            "address": {
                "houseNumber": "83",
                "street": "Camelot Road",
                "city": "Nottingham",
                "country": "UK",
                "postcode": "NH45PG"
            }
        },
        "dateOfBooking": new Date("2018-04-08T18:10:11.390Z"),
        "passengers": [
            {
                "_id": "p1",
                "title": "Mr",
                "firstName": "Muhammad",
                "lastName": "Qasim",
                "dob": new Date("1997-03-06"),
                "contactDetails": {
                    "personalEmail": "Qasim9872@gmail.com",
                    "address": {
                        "houseNumber": "8 Icarus house",
                        "street": "British Street",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E34LZ"
                    },
                    "mobilePhone": "07479481652"
                },
                "bookingDetails": {
                    "passportNumber": "AB0123456",
                    "passportExpiry": "2020-10-10",
                    "issuingCountry": "Pakistan"
                }
            },

            {
                "_id": "p2",
                "title": "Mr",
                "firstName": "Joe",
                "lastName": "Carter",
                "dob": new Date("1988-12-09"),
                "contactDetails": {
                    "personalEmail": "joecartern@gmail.com",
                    "address": {
                        "houseNumber": "27",
                        "street": "Southfield Way",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E288PD"
                    },
                    "mobilePhone": "07449771690"
                },
                "bookingDetails": {
                    "passportNumber": "AB0773456",
                    "passportExpiry": "2019-09-10",
                    "issuingCountry": "United Kingdom"
                }
            }
        ],
        "totalCost": 2066,
        "journey": {
            "journeyId": "j1",
            "journeyDetails": {
                "startingAirport": "LGW",
                "destinationAirport": "MAD",
                "journeyLength": 1729
            },
            "flights": [
                "f1"
            ]
        }
    },



    {
        "_id": "fb2",
        "title": "Miss",
        "firstName": "Deanna",
        "lastName": "Kouame",
        "dob": new Date("1993-11-29"),
        "paymentDetails": {
            "nameOnCard": "Deanna Kouame",
            "cardNumber": "1465938475613456",
            "cardExpiry": "12/19",
            "cardCVV": "839",
            "address": {
                "houseNumber": "1",
                "street": "Medows Way",
                "city": "Birmingham",
                "country": "UK",
                "postcode": "BS57RF"
            },
        },
        "dateOfBooking": new Date("2018-12-10T20:20:15.395Z"),
        "passengers": [
            {
                "_id": "p5",
                "title": "Miss ",
                "firstName": "Grace",
                "lastName": "Cao",
                "dob": new Date("2000-12-09"),
                "contactDetails": {
                    "personalEmail": "grace2000@gmail.com",
                    "address": {
                        "houseNumber": "29",
                        "street": "Sixth Street",
                        "city": "New York",
                        "country": "US",
                        "postcode": "E28999D"
                    },
                    "mobilePhone": "07488881690"
                },
                "bookingDetails": {
                    "passportNumber": "CD0773056",
                    "passportExpiry": "2025-04-10",
                    "issuingCountry": "United States"
                }
            },

            {
                "_id": "p6",
                "title": "Miss",
                "firstName": "Rose",
                "lastName": "Lee",
                "dob": new Date("1992-01-06"),
                "contactDetails": {
                    "personalEmail": "roselee@gmail.com",
                    "address": {
                        "houseNumber": "15 Maynard house",
                        "street": "Cool Street",
                        "city": "Cambridge",
                        "country": "UK",
                        "postcode": "W34LZ"
                    },
                    "mobilePhone": "07999881652"
                },
                "bookingDetails": {
                    "passportNumber": "AR11345611",
                    "passportExpiry": "2023-10-10",
                    "issuingCountry": "United Kingdom"
                }
            },
        ],
        "totalCost": 9949,
        "journey": {
            "journeyId": "j2",
            "journeyDetails": {
                "startingAirport": "PEK",
                "destinationAirport": "ISB",
                "journeyLength": 3879
            },
            "flights": [
                "f2"
            ]
        }
    },





    {
        "_id": "fb3",
        "title": "Mr",
        "firstName": "Robin",
        "lastName": "Williams",
        "dob": new Date("1987-04-09"),
        "paymentDetails": {
            "nameOnCard": "Robin Williams",
            "cardNumber": "1493048594858493",
            "cardExpiry": "10/22",
            "cardCVV": "454",
            "address": {
                "houseNumber": "5",
                "street": "Jermain Road",
                "city": "Oxford",
                "country": "UK",
                "postcode": "OX14PD"
            },
        },
        "dateOfBooking": new Date("2018-09-10T22:10:15.695Z"),
        "passengers": [
            {
                "_id": "p5",
                "title": "Ms ",
                "firstName": "Grace",
                "lastName": "Cao",
                "dob": new Date("2000-12-09"),
                "contactDetails": {
                    "personalEmail": "grace2000@gmail.com",
                    "address": {
                        "houseNumber": "29",
                        "street": "Sixth Street",
                        "city": "New York",
                        "country": "US",
                        "postcode": "E28999D"
                    },
                    "mobilePhone": "07488881690"
                },
                "bookingDetails": {
                    "passportNumber": "CD0773056",
                    "passportExpiry": "2025-04-10",
                    "issuingCountry": "United States"
                }
            },

            {
                "_id": "p3",
                "title": "Ms",
                "firstName": "Mary",
                "lastName": "Green",
                "dob": new Date("1989-03-09"),
                "contactDetails": {
                    "personalEmail": "marygreen@gmail.com",
                    "address": {
                        "houseNumber": "117",
                        "street": "Northfield Way",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E189PD"
                    },
                    "mobilePhone": "07449181690"
                },
                "bookingDetails": {
                    "passportNumber": "E50773456",
                    "passportExpiry": "2021-09-10",
                    "issuingCountry": "United Kingdom"
                }
            },
        ],
        "totalCost": 45984,
        "journey": {
            "journeyId": "j3",
            "journeyDetails": {
                "startingAirport": "ISB",
                "destinationAirport": "LGW",
                "journeyLength": 7981
            },
            "flights": [
                "f3"
            ]
        }
    },



    {
        "_id": "fb4",
        "title": "Ms",
        "firstName": "Mary",
        "lastName": "Green",
        "dob": new Date("1989-03-09"),
        "paymentDetails": {
            "nameOnCard": "Mary Green",
            "cardNumber": "2948534837774839",
            "cardExpiry": "02/22",
            "cardCVV": "433",
            "address": {
                "houseNumber": "117",
                "street": "Northfield Way",
                "city": "London",
                "country": "UK",
                "postcode": "E189PD"
            },
        },
        "dateOfBooking": new Date("2018-08-22T06:30:17.495Z"),
        "passengers": [
            {
                "_id": "p3",
                "title": "Miss ",
                "firstName": "Mary",
                "lastName": "Green",
                "dob": new Date("1989-03-09"),
                "contactDetails": {
                    "personalEmail": "marygreen@gmail.com",
                    "address": {
                        "houseNumber": "117",
                        "street": "Northfield Way",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E189PD"
                    },
                    "mobilePhone": "07449181690"
                },
                "bookingDetails": {
                    "passportNumber": "E50773456",
                    "passportExpiry": "2021-09-10",
                    "issuingCountry": "United Kingdom"
                }
            },

            {
                "_id": "p6",
                "title": "Miss",
                "firstName": "Rose",
                "lastName": "Lee",
                "dob": new Date("1992-01-06"),
                "contactDetails": {
                    "personalEmail": "roselee@gmail.com",
                    "address": {
                        "houseNumber": "15 Maynard house",
                        "street": "Cool Street",
                        "city": "Cambridge",
                        "country": "UK",
                        "postcode": "W34LZ"
                    },
                    "mobilePhone": "07999881652"
                },
                "bookingDetails": {
                    "passportNumber": "AR11345611",
                    "passportExpiry": "2023-10-10",
                    "issuingCountry": "United Kingdom"
                }
            },

            {
                "_id": "p4",
                "title": "Miss",
                "firstName": "Wei",
                "lastName": "Sun",
                "dob": new Date("1997-04-09"),
                "contactDetails": {
                    "personalEmail": "sunwei@gmail.com",
                    "address": {
                        "houseNumber": "18B",
                        "street": "Westfield Way",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E14PD"
                    },
                    "mobilePhone": "07999881652"
                },
                "bookingDetails": {
                    "passportNumber": "AR11345611",
                    "passportExpiry": "2023-10-10",
                    "issuingCountry": "United Kingdom"
                }
            },
        ],
        "totalCost": 84435,
        "journey": {
            "journeyId": "j4",
            "journeyDetails": {
                "startingAirport": "MIA",
                "destinationAirport": "BOM",
                "journeyLength": 14233
            },
            "flights": [
                "f4"
            ]
        }
    },



    {
        "_id": "fb5",
        "title": "Mr",
        "firstName": "Muhammad",
        "lastName": "Qasim",
        "dob": new Date("1997-03-06"),
        "paymentDetails": {
            "nameOnCard": "Muhammad Qasim",
            "cardNumber": "5536462834864285",
            "cardExpiry": "09/21",
            "cardCVV": "496",
            "address": {
                "houseNumber": "8 Icarus house",
                "street": "British Street",
                "city": "London",
                "country": "UK",
                "postcode": "E34LZ"
            }
        },
        "dateOfBooking": new Date("2018-04-08T18:10:11.390Z"),
        "passengers": [
            {
                "_id": "p4",
                "title": "Miss ",
                "firstName": "Wei",
                "lastName": "Sun",
                "dob": new Date("1997-04-09"),
                "contactDetails": {
                    "personalEmail": "sunwei@gmail.com",
                    "address": {
                        "houseNumber": "18B",
                        "street": "Westfield Way",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E14PD"
                    },
                    "mobilePhone": "07149181699"
                },
                "bookingDetails": {
                    "passportNumber": "E50993456",
                    "passportExpiry": new Date("2025-08-10"),
                    "issuingCountry": "China"
                }
            },

            {
                "_id": "p6",
                "title": "Miss",
                "firstName": "Rose",
                "lastName": "Lee",
                "dob": new Date("1992-01-06"),
                "contactDetails": {
                    "personalEmail": "roselee@gmail.com",
                    "address": {
                        "houseNumber": "15 Maynard house",
                        "street": "Cool Street",
                        "city": "Cambridge",
                        "country": "UK",
                        "postcode": "W34LZ"
                    },
                    "mobilePhone": "07999881652"
                },
                "bookingDetails": {
                    "passportNumber": "AR11345611",
                    "passportExpiry": new Date("2023-10-10"),
                    "issuingCountry": "United Kingdom"
                }
            },

            {
                "_id": "p3",
                "title": "Ms",
                "firstName": "Mary",
                "lastName": "Green",
                "dob": new Date("1989-03-09"),
                "contactDetails": {
                    "personalEmail": "marygreen@gmail.com",
                    "address": {
                        "houseNumber": "117",
                        "street": "Northfield Way",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E189PD"
                    },
                    "mobilePhone": "07449181690"
                },
                "bookingDetails": {
                    "passportNumber": "E50773456",
                    "passportExpiry": new Date("2021-09-10"),
                    "issuingCountry": "United Kingdom"
                }
            }
        ],
        "totalCost": 3966,
        "journey": {
            "journeyId": "j5",
            "journeyDetails": {
                "startingAirport": "MAD",
                "destinationAirport": "CDG",
                "journeyLength": 1271
            },
            "flights": [
                "f5"
            ]
        }
    },



    {
        "_id": "fb6",
        "title": "Miss",
        "firstName": "Wei",
        "lastName": "Sun",
        "dob": new Date("1997-04-09"),
        "paymentDetails": {
            "nameOnCard": "Wei Sun",
            "cardNumber": "1943507507879406",
            "cardExpiry": "12/22",
            "cardCVV": "784",
            "address": {
                "houseNumber": "18B",
                "street": "Westfield Way",
                "city": "London",
                "country": "UK",
                "postcode": "E14PD"
            },
        },
        "dateOfBooking": new Date("2018-12-10T20:20:15.395Z"),
        "passengers": [
            {
                "_id": "p4",
                "title": "Miss ",
                "firstName": "Wei",
                "lastName": "Sun",
                "dob": new Date("1997-04-09"),
                "contactDetails": {
                    "personalEmail": "sunwei@gmail.com",
                    "address": {
                        "houseNumber": "18B",
                        "street": "Westfield Way",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E14PD"
                    },
                    "mobilePhone": "07149181699"
                },
                "bookingDetails": {
                    "passportNumber": "E50993456",
                    "passportExpiry": new Date("2025-08-10"),
                    "issuingCountry": "China"
                }
            },

            {
                "_id": "p6",
                "title": "Miss",
                "firstName": "Rose",
                "lastName": "Lee",
                "dob": new Date("1992-01-06"),
                "contactDetails": {
                    "personalEmail": "roselee@gmail.com",
                    "address": {
                        "houseNumber": "15 Maynard house",
                        "street": "Cool Street",
                        "city": "Cambridge",
                        "country": "UK",
                        "postcode": "W34LZ"
                    },
                    "mobilePhone": "07999881652"
                },
                "bookingDetails": {
                    "passportNumber": "AR11345611",
                    "passportExpiry": new Date("2023-10-10"),
                    "issuingCountry": "United Kingdom"
                }
            },
        ],
        "totalCost": 10599,
        "journey": {
            "journeyId": "j6",
            "journeyDetails": {
                "startingAirport": "MAD",
                "destinationAirport": "DXB",
                "journeyLength": 7659
            },
            "flights": [
                "f6"
            ]
        }
    },





    {
        "_id": "fb7",
        "title": "Miss",
        "firstName": "Wei",
        "lastName": "Sun",
        "dob": new Date("1997-04-09"),
        "paymentDetails": {
            "nameOnCard": "Wei Sun",
            "cardNumber": "1943507507879406",
            "cardExpiry": "12/22",
            "cardCVV": "784",
            "address": {
                "houseNumber": "18B",
                "street": "Westfield Way",
                "city": "London",
                "country": "UK",
                "postcode": "E14PD"
            },
        },
        "dateOfBooking": new Date("2018-09-10T22:10:15.695Z"),
        "passengers": [
            {
                "_id": "p4",
                "title": "Miss ",
                "firstName": "Wei",
                "lastName": "Sun",
                "dob": new Date("1997-04-09"),
                "contactDetails": {
                    "personalEmail": "sunwei@gmail.com",
                    "address": {
                        "houseNumber": "18B",
                        "street": "Westfield Way",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E14PD"
                    },
                    "mobilePhone": "07149181699"
                },
                "bookingDetails": {
                    "passportNumber": "E50993456",
                    "passportExpiry": new Date("2025-08-10"),
                    "issuingCountry": "China"
                }
            },

            {
                "_id": "p6",
                "title": "Miss",
                "firstName": "Rose",
                "lastName": "Lee",
                "dob": new Date("1992-01-06"),
                "contactDetails": {
                    "personalEmail": "roselee@gmail.com",
                    "address": {
                        "houseNumber": "15 Maynard house",
                        "street": "Cool Street",
                        "city": "Cambridge",
                        "country": "UK",
                        "postcode": "W34LZ"
                    },
                    "mobilePhone": "07999881652"
                },
                "bookingDetails": {
                    "passportNumber": "AR11345611",
                    "passportExpiry": new Date("2023-10-10"),
                    "issuingCountry": "United Kingdom"
                }
            },
        ],
        "totalCost": 25984,
        "journey": {
            "journeyId": "j7",
            "journeyDetails": {
                "startingAirport": "LGW",
                "destinationAirport": "DXB",
                "journeyLength": 9388
            },
            "flights": [{
                "flightId": "f1"

            }, {
                "flightId": "f6"
            }]
        }
    },



    {
        "_id": "fb8",
        "title": "Miss",
        "firstName": "Rose",
        "lastName": "Lee",
        "dob": new Date("1992-01-06"),
        "paymentDetails": {
            "nameOnCard": "Rose Lee",
            "cardNumber": "2488531245775901",
            "cardExpiry": "03/24",
            "cardCVV": "633",
            "address": {
                "houseNumber": "15 Maynard house",
                "street": "Cool Street",
                "city": "Cambridge",
                "country": "UK",
                "postcode": "W34LZ"
            },
        },
        "dateOfBooking": new Date("2018-08-22T06:30:17.495Z"),
        "passengers": [
            {
                "_id": "p4",
                "title": "Miss ",
                "firstName": "Wei",
                "lastName": "Sun",
                "dob": new Date("1997-04-09"),
                "contactDetails": {
                    "personalEmail": "sunwei@gmail.com",
                    "address": {
                        "houseNumber": "18B",
                        "street": "Westfield Way",
                        "city": "London",
                        "country": "UK",
                        "postcode": "E14PD"
                    },
                    "mobilePhone": "07149181699"
                },
                "bookingDetails": {
                    "passportNumber": "E50993456",
                    "passportExpiry": new Date("2025-08-10"),
                    "issuingCountry": "China"
                }
            },

            {
                "_id": "p6",
                "title": "Miss",
                "firstName": "Rose",
                "lastName": "Lee",
                "dob": new Date("1992-01-06"),
                "contactDetails": {
                    "personalEmail": "roselee@gmail.com",
                    "address": {
                        "houseNumber": "15 Maynard house",
                        "street": "Cool Street",
                        "city": "Cambridge",
                        "country": "UK",
                        "postcode": "W34LZ"
                    },
                    "mobilePhone": "07999881652"
                },
                "bookingDetails": {
                    "passportNumber": "AR11345611",
                    "passportExpiry": new Date("2023-10-10"),
                    "issuingCountry": "United Kingdom"
                }
            },
        ],
        "totalCost": 45835,
        "journey": {
            "journeyId": "j8",
            "journeyDetails": {
                "startingAirport": "LGW",
                "destinationAirport": "BOM",
                "journeyLength": 21892
            },
            "flights": [{
                "flightId": "f7"

            }, {
                "flightId": "f4"
            }]
        }
    }
]