const Thermostat = require("./Thermostat");

const thermostat = new Thermostat;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
  rl.question("Please Choose an option:\n"
    + "1) Up\n"
    + "2) Down\n"
    + "3) PSM On\n"
    + "4) PSM Off\n"
    + "5) Exit\n"
    , function (line) {

      switch (line){
        case "1":
          thermostat.up();
          console.log(`Temperature is ${thermostat.getTemperature()} ${thermostat.isMax()}`);
          break;
        case "2":
          thermostat.down();
          console.log(`Temperature is ${thermostat.getTemperature()} ${thermostat.isMin()}`);
          break;
        case "3":
          thermostat.setPowerSavingMode(true);
          console.log(`Temperature is ${thermostat.getTemperature()} ${thermostat.isMin()} ${thermostat.isMax()}`);
          break;
        case "4":
          thermostat.setPowerSavingMode(false);
          console.log(`Temperature is ${thermostat.getTemperature()} ${thermostat.isMin()} ${thermostat.isMax()}`);
          break;
        case "5":
          return rl.close();
          break;
        default:
          console.log("No such option. Please enter another: ");
      }
      recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();
