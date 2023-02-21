const Report = require('./report')

describe(Report, () => {
  it('Builds a report of results', () => {
    const results = "Green, Green, Amber, Red, Green"
    report = new Report(results)
    expect(report.build()).toBe("Green: 3\nAmber: 1\nRed: 1")

  });
});