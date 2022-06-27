const axios = require('axios');

class Search {
  static get history() {
    return ['San José'];
  }

  static async findCity(cityName = '') {
    return [];
  }
}

module.exports = Search;

/**
 * https://www.npmjs.com/package/request
 * https://www.npmjs.com/package/fetch
 * https://www.npmjs.com/package/axios
 * https://reqres.in/
 * https://www.mapbox.com/
 * https://docs.mapbox.com/api/search/geocoding/
 * pk.eyJ1IjoiY2hpa2FyYTk0IiwiYSI6ImNsNHdha2RmaDEwY3czaXVscjZ2dzczMW4ifQ.ahj1ijewIJW8Zsr1aCEkZw
 */
