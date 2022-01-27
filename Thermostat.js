class Thermostat {
  constructor() { 
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if(this.powerSavingMode && this.temperature >= 25) {
      return 'It\'s hot enough, you have power saving mode on!';
    } else if(this.temperature >= 32) {
      return 'No you weirdo, what are you, a lizard? It\'s SO HOT in here.';
    } else {
    this.temperature++;
    }
  }

  down() {
    if(this.temperature <= 10) {
      return 'It\'s freezing in here! I\'m not going any colder, sorry pal.';
    } else {
      this.temperature--;
    }
  }

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean;
  }
}

module.exports = Thermostat;