require('colors')
const { write } = require('./../helpers/terminal');
const { readInquirerInput, selectPlaceId } = require('./../helpers/inquirer');
const { listPlaces } = require('./../helpers/inquirer');
const Search = require('./../models/search');

class CitySearcher {
  static async process() {
    const placeName = await readInquirerInput('City:');
    const places = await Search.loadMatchingPlaces(placeName);
    const selectedPlaceId = await selectPlaceId(places);
    const selectedPlace = places.find(place => place.id == selectedPlaceId);
    const weatherPlaceData = await Search.loadWeatherData(selectedPlace.lng, selectedPlace.lat);
    CitySearcher.showResults({ ...selectedPlace, ...weatherPlaceData });
  }

  static showResults(cityJsonResult) {
    write('Place information:'.green);
    write('Place:'.green, cityJsonResult.place_name);
    write('Lat:'.green, cityJsonResult.lat);
    write('Lng:'.green, cityJsonResult.lng);
    write('Temp:'.green.green, cityJsonResult.temp);
    write('Min:'.green, cityJsonResult.temp_min);
    write('Max:'.green, cityJsonResult.temp_max);
    write('Temp description:'.green, cityJsonResult.temp_description)
  }
}

module.exports = CitySearcher;
