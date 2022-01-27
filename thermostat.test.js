const Thermostat = require('./Thermostat');

describe(Thermostat, () => {
  const thermostat = new Thermostat();

  describe('getTemperature', () => {
    it('returns the current temperature', () => {
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })

  describe('up', () => {
    it('increases temp by one degree', () => {
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(22);
    })
  })

  describe('down', () => {
    it('decreases temp by one degree', () => {
      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(20);
    })

    it('doesn\'t go below 10 degrees', () => {
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.down();
      }
      thermostat.down();

      expect(thermostat.getTemperature()).toEqual(10);
    })
  })
})