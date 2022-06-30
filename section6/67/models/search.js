const axios = require('axios');

class Search {
  static get history() {
    if(this.currentHistory == undefined)
      this.currentHistory = [];
    return this.currentHistory;
  }

  static set history(currentHistory) {
    this.currentHistory = currentHistory;
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
    let history = Search.history;
    history.unshift(place);
    Search.history = history;
    console.log(Search.history);
  }
}

module.exports = Search;
