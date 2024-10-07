const paySalary = require('./paySalary');

test('calculates pay for 40 hours', () => {
    expect(paySalary(40)).toBe(400);
});

test('calculates pay for 50 hours', () => {
    expect(paySalary(50)).toBe(550);
});

test('calculates pay for 30 hours', () => {
    expect(paySalary(30)).toBe(300);
});
