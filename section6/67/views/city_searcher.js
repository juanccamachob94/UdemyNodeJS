require('colors')
const { readInquirerInput, selectPlaceId } = require('./../helpers/inquirer');
const { listPlaces } = require('./../helpers/inquirer');
const Search = require('./../models/search');

class CitySearcher {
  static async process() {
    const placeName = await readInquirerInput('City:');
    const places = await Search.loadMatchingPlaces(placeName);
    const selectedPlaceId = await selectPlaceId(places);
    if(selectedPlaceId == undefined)
      return false;
    const selectedPlace = places.find(place => place.id == selectedPlaceId);
    const weatherPlaceData = await Search.loadWeatherData(selectedPlace.lng, selectedPlace.lat);
    Search.addHistoryItem(selectedPlace.place_name);
    CitySearcher.showResults({ ...selectedPlace, ...weatherPlaceData });
    return true;
  }

  static showResults(cityJsonResult) {
    console.clear();
    console.log('Place information:'.green);
    console.log('Place:'.green, cityJsonResult.place_name);
    console.log('Lat:'.green, cityJsonResult.lat);
    console.log('Lng:'.green, cityJsonResult.lng);
    console.log('Temp:'.green, cityJsonResult.temp);
    console.log('Min:'.green, cityJsonResult.temp_min);
    console.log('Max:'.green, cityJsonResult.temp_max);
    console.log('Temp description:'.green, cityJsonResult.temp_description)
  }
}

module.exports = CitySearcher;
