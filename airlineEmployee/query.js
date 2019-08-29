// The AIRLINE_EMPLOYEE_COLLECTION variable should be already set

print(`\n\n-------------------------------------`);
print(`Running queries against the ${AIRLINE_EMPLOYEE_COLLECTION} collection`);

// get total salary 
const totalSalaryBillQuery = {
    // specifying _id as null matches to all the documents within the collection
    "_id": "null",
    "totalSalaryBill": {
        $sum: "$employmentDetails.workDetails.totalMonthlyPay"
    }
};
const totalSalaryBillMessage = `sum of total salary for all employees`
const totalSalaryBill = aggregateSum(AIRLINE_EMPLOYEE_COLLECTION, totalSalaryBillQuery, totalSalaryBillMessage);

// find all employees who were born after
const allEmployeesBornAfterQuery = {
    "dob": {
        $gte: new Date(1986, 0, 11)
    }
}
const allEmployeesBornAfterMessage = `find all employees who were born after a given date`;
findInCollection(AIRLINE_EMPLOYEE_COLLECTION, allEmployeesBornAfterQuery, allEmployeesBornAfterMessage);

// find all employees who started after the given date
const allEmployeesWhoStartedAfterQuery = {
    "employmentDetails.startDate": {
        $gte: new Date(2014, 10, 10)
    }
}
const allEmployeesWhoStartedAfterMessage = `find all employees who started after the given date`;
findInCollection(AIRLINE_EMPLOYEE_COLLECTION, allEmployeesWhoStartedAfterQuery, allEmployeesWhoStartedAfterMessage);
