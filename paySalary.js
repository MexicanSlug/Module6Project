function paySalary(employeeHours) {
    const hourlyRate = 10.00;
    let regtime, overtime, salary;

    if (employeeHours <= 40) {
        regtime = hourlyRate * employeeHours;
        overtime = 0.00;
        salary = regtime;
    } else {
        regtime = hourlyRate * 40;
        overtime = (hourlyRate * 1.5) * (employeeHours - 40);
        salary = regtime + overtime;
    }

    return salary;
}

module.exports = paySalary;
