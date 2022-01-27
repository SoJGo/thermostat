class Thermostat {
  constructor() { 
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature++;
  }

  down() {
    if(this.temperature === 10) {
      return 'It\'s freezing in here! I\'m not going any colder, sorry pal.';
    } else {
      this.temperature--;
    }
  }
}

module.exports = Thermostat;