const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.init();
  }

  init() {
    this.initVariables();
    this.runMiddlewares();
    this.initRoutes();
  }

  initVariables() {
    this.app = express();
    this.port = process.env.PORT || 80;
  }

  runMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  initRoutes() {
    ['users'].forEach((rootRoute) => {
      this.app.use(`/${rootRoute}`, require(`../routes/${rootRoute}`));
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    })
  }
}
module.exports = Server;
