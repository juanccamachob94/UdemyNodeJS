require('colors')
const { write } = require('./../helpers/terminal');
const { readInquirerInput } = require('./../helpers/inquirer');
const Search = require('./../models/search');

class CitySearcher {
  static async process() {
    showMessage();
    searchPlaces();
    selectPlace();
    loadWeither();
    showResults();
  }

  static async showMessage() {
    await Search.findCity(await readInquirerInput('City:'));
  }

  static async searchPlaces() {

  }

  static async selectPlace() {

  }

  static async loadWeither() {

  }

  static async showResults(cityJsonResult) {
    write('City information:'.green);
    write('City:', cityJsonResult.city);
    write('Lat:', cityJsonResult.lat);
    write('Lng:', cityJsonResult.lng);
    write('Temp:', cityJsonResult.temperature);
    write('Min:', cityJsonResult.min);
    write('Max:', cityJsonResult.max);
  }
}

module.exports = CitySearcher;
