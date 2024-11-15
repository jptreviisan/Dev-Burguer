const express = require('express');

class App{
    construtor() {
        this.app = express()

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json())
    }

    routes() {}


}


module.exports = new App().app