const airlineEmployees = [{
        "_id": "e01",
        "title": "Mr",
        "firstName": "Tommy",
        "lastName": "Hilfiger",
        "dob": new Date("1990-05-01"),
        "contactDetails": {
            "personalEmail": "tommy.hilfiger@gmail.com",
            "address": {
                "houseNumber": "Flat 8C",
                "street": "British Street",
                "city": "London",
                "country": "UK",
                "postcode": "E34QL"
            },
            "mobilePhone": "07479123456"
        },
        "employmentDetails": {
            "startDate": new Date("2014-01-06"),
            "workDetails": {
                "hourlyRate": 20,
                "numberOfHoursWorked": 40,
                "totalMonthlyPay": 800
            },
            "nationalInsuranceNumber": "AS123456B",
            "role": "maintenance staff"
        },
        "roleDetails": {
            "fitForFlying": ""
        }
    }, {
        "_id": "e02",
        "title": "Mr",
        "firstName": "Tom",
        "lastName": "Jackson",
        "dob": new Date("1986-11-09"),
        "contactDetails": {
            "personalEmail": "tomjackson@gmail.com",
            "address": {
                "houseNumber": "Room 5C",
                "street": "Barklays Street",
                "city": "London",
                "country": "UK",
                "postcode": "W389PD"
            },
            "mobilePhone": "07009798765"
        },
        "employmentDetails": {
            "startDate": new Date("2015-09-09"),
            "workDetails": {
                "hourlyRate": 15,
                "numberOfHoursWorked": 19,
                "totalMonthlyPay": 4000
            },
            "nationalInsuranceNumber": "SY333456B",
            "role": "maintenance staff"
        },
        "roleDetails": {
            "fitForFlying": ""
        }
    }, {
        "_id": "e03",
        "title": "Miss",
        "firstName": "Lucky",
        "lastName": "White",
        "dob": new Date("1979-11-09"),
        "contactDetails": {
            "personalEmail": "luckywhite@gmail.com",
            "address": {
                "houseNumber": "Room 9D",
                "street": "Brown Street",
                "city": "Oxford",
                "country": "UK",
                "postcode": "W38000"
            },
            "mobilePhone": "07009000065"
        },
        "employmentDetails": {
            "startDate": new Date("2012-08-09"),
            "workDetails": {
                "hourlyRate": 20,
                "numberOfHoursWorked": 20,
                "totalMonthlyPay": 6000
            },
            "nationalInsuranceNumber": "SY330056B",
            "role": "booking clerks"
        },
        "roleDetails": {
            "fitForFlying": ""
        }
    }, {
        "_id": "e04",
        "title": "Ms",
        "firstName": "Jane",
        "lastName": "Black",
        "dob": new Date("1981-11-09"),
        "contactDetails": {
            "personalEmail": "janeblack@gmail.com",
            "address": {
                "houseNumber": "213",
                "street": "Green Way",
                "city": "York",
                "country": "UK",
                "postcode": "W99000"
            },
            "mobilePhone": "07999001165"
        },
        "employmentDetails": {
            "startDate": new Date("2010-08-09"),
            "workDetails": {
                "hourlyRate": 25,
                "numberOfHoursWorked": 30,
                "totalMonthlyPay": 8000
            },
            "nationalInsuranceNumber": "SY330066D",
            "role": "pilot"
        },
        "roleDetails": {
            "fitForFlying": new Date("2018-10-09")
        }
    }, {
        "_id": "e05",
        "title": "Mr",
        "firstName": "Jerry",
        "lastName": "Hansard",
        "dob": new Date("1979-11-09"),
        "contactDetails": {
            "personalEmail": "jerryhansard@gmail.com",
            "address": {
                "houseNumber": "314",
                "street": "York Road",
                "city": "York",
                "country": "UK",
                "postcode": "W92900"
            },
            "mobilePhone": "07999001178"
        },
        "employmentDetails": {
            "startDate": new Date("2014-11-09"),
            "workDetails": {
                "hourlyRate": 30,
                "numberOfHoursWorked": 25,
                "totalMonthlyPay": 6500
            },
            "nationalInsuranceNumber": "SY000066F",
            "role": "pilot"
        },
        "roleDetails": {
            "fitForFlying": new Date("2018-10-23")
        }
    },
    {
        "_id": "e06",
        "title": "Miss",
        "firstName": "Rose",
        "lastName": "Black",
        "dob": new Date("1973-12-01"),
        "contactDetails": {
            "personalEmail": "roseblack@gmail.com",
            "address": {
                "houseNumber": "9",
                "street": "Cheers Avenuew",
                "city": "Windors",
                "country": "UK",
                "postcode": "N95PD"
            },
            "mobilePhone": "07999008888"
        },
        "employmentDetails": {
            "startDate": new Date("2008-09-01"),
            "workDetails": {
                "hourlyRate": 40,
                "numberOfHoursWorked": 40,
                "totalMonthlyPay": 8000
            },
            "nationalInsuranceNumber": "SY333066H",
            "role": "pilot"
        },
        "roleDetails": {
            "fitForFlying": new Date("2018-10-30")
        }
    },
    {
        "_id": "e07",
        "title": "Mr",
        "firstName": "Joe",
        "lastName": "Cooler",
        "dob": new Date("1978-12-09"),
        "contactDetails": {
        "personalEmail": "joecooler@gmail.com",
            "address": {
              "houseNumber": "297",
              "street": "Northfield Street",
              "city": "London",
              "country": "UK",
              "postcode": "E889PD"
            },
            "mobilePhone": "07009771677"
        },
        "employmentDetails": {
            "startDate": new Date("2012-12-09"),
            "workDetails":{
                "hourlyRate": 14,
                "numberOfHoursWorked": 8,
                "totalMonthlyPay": 3000
            },
            "nationalInsuranceNumber": "SY123456B",
            "role": "cabin crew"
        },
        "roleDetails":{
            "fitForFlying": ""
        }
    },
    {
        "_id": "e08",
        "title": "Mr",
        "firstName": "John",
        "lastName": "Bieber",
        "dob": new Date("1960-12-09"),
        "contactDetails": {
        "personalEmail": "jbieber@gmail.com",
            "address": {
              "houseNumber": "53",
              "street": "Campus Street",
              "city": "Essex",
              "country": "UK",
              "postcode": "ES246PD"
            },
            "mobilePhone": "07989471667"
        },
        "employmentDetails": {
            "startDate": new Date("2012-12-09"),
            "workDetails":{
                "hourlyRate": 14,
                "numberOfHoursWorked": 8,
                "totalMonthlyPay": 3000
            },
            "nationalInsuranceNumber": "SY123456B",
            "role": "cabin crew"
        },
        "roleDetails":{
            "fitForFlying": ""
        }
    }
]