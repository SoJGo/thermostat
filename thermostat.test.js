const Thermostat = require('./Thermostat');

describe(Thermostat, () => {
  const thermostat = new Thermostat();
  const thermostat2 = new Thermostat();

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

    it('has a maximum temperature of 32', () => {
      thermostat2.setPowerSavingMode(false)
      for (let i = 0 ; i < 12 ; i++) {
        thermostat2.up();
      }
      thermostat2.up();
      expect(thermostat2.getTemperature()).toEqual(32);
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

  describe('setPowerSavingMode', () => {
    it('stops temp going above 25', () => {
      for (let i = 0 ; i < 15 ; i++) {
        thermostat.up();
      }
      thermostat.up();

      expect(thermostat.getTemperature()).toEqual(25);
    })

    it('can be turned off', () => {
      thermostat.setPowerSavingMode(false);
      thermostat.up();

      expect(thermostat.getTemperature()).toEqual(26);
    })
  })
})