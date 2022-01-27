const Thermostat = require('./Thermostat');

describe(Thermostat, () => {
  describe('getTemperature', () => {
    it('returns the current temperature', () => {
      const thermostat = new Thermostat();

      expect(thermostat.getTemperature()).toEqual(20);
    })
  })
})