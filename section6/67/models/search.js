const axios = require('axios');
const fs = require('fs');

class Search {
  static get history() {
    if(this.currentHistory == undefined)
      this.currentHistory = [];
    return this.currentHistory;
  }

  static set history(currentHistory) {
    this.currentHistory = currentHistory;
  }

  static get dbPath() {
    return './db/database.json';
  }

  static get capitalizedHistory() {
    return this.history.map(place => {
      let words = place.split(' ');
      return words.map(p => p[0].toUpperCase() + p.substring(1)).join(' ');
    })
  }

  static get mapBoxParams() {
    return {
      'access_token': process.env.MAPBOX_TOKEN,
      'language': 'es',
      'limit': 5,
      'types': 'place'
    };
  }

  static buildOpenWeatherParams(lng, lat) {
    return {
      'appid': process.env.OPEN_WEATHER_KEY,
      'lang': 'es',
      'lat': lat,
      'lon': lng,
      'units': 'metric'
    }
  }

  static async loadMatchingPlaces(place = '') {
    try {
      const axiosInstance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: Search.mapBoxParams
      });
      return (await axiosInstance.get()).data.features.map(place => ({
        id: place.id,
        place_name: place.place_name,
        lat: place.center[1],
        lng: place.center[0]
      }));
    } catch(err) {
      return [];
    }
  }

  static async loadWeatherData(lng, lat) {
    try {
      const axiosInstance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: Search.buildOpenWeatherParams(lng, lat)
      });
      const responseData = (await axiosInstance.get()).data;
      const responseMainData = responseData.main;
      return {
        temp: responseMainData.temp,
        temp_description: responseData.weather[0].description,
        temp_max: responseMainData.temp_max,
        temp_min: responseMainData.temp_min
      }
    } catch(err) {
      return {};
    }
  }

  static addHistoryItem(place = '') {
    const sanitizedPlace = place.toLocaleLowerCase();
    if(this.history.includes(sanitizedPlace))
      return;
    this.history = this.history.splice(0, 5);
    this.history.unshift(sanitizedPlace);
    this.saveOnDB();
  }

  static saveOnDB() {
    fs.writeFileSync(this.dbPath, JSON.stringify({ history:  this.history }));
  }

  static readOnDB() {
    if(!fs.existsSync(this.dbPath))
      return;
    this.history = JSON.parse(fs.readFileSync(this.dbPath, { encoding: 'utf-8' })).history;
  }
}

module.exports = Search;
